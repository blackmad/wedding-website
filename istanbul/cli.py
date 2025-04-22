#!/usr/bin/env python3
"""
GPX to JSON Geocoding and Places Tool

This script parses a GPX file or text file, extracts waypoints or search queries, 
enriches them with data from both Google Maps Geocoding API and Places API, 
downloads the first image for each place (with caching), and saves results to a JSON file.
"""

import argparse
import hashlib
import http.client
import json
import os
import re
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from pathlib import Path
from typing import Dict, List, Optional, Tuple, Union

# Constants
GEOCODING_HOST = "maps.googleapis.com"
GEOCODING_PATH = "/maps/api/geocode/json"
PLACES_HOST = "maps.googleapis.com"
PLACES_PATH = "/maps/api/place/details/json"
PLACE_PHOTO_PATH = "/maps/api/place/photo"
PLACES_SEARCH_PATH = "/maps/api/place/findplacefromtext/json"


class GeocodingCLI:
    def __init__(self, api_key: str, image_dir: str = "place_images", interactive: bool = False):
        """Initialize with the Google API key and image directory."""
        self.api_key = api_key
        self.image_dir = image_dir
        self.interactive = interactive
        self.geocoding_conn = http.client.HTTPSConnection(GEOCODING_HOST)
        self.places_conn = http.client.HTTPSConnection(PLACES_HOST)
        
        # Create image directory if it doesn't exist
        os.makedirs(self.image_dir, exist_ok=True)
        
        # Create a cache directory for URL to filename mapping
        self.cache_dir = os.path.join(self.image_dir, ".cache")
        os.makedirs(self.cache_dir, exist_ok=True)
        self.cache_file = os.path.join(self.cache_dir, "image_cache.json")
        
        # Load existing cache if available
        self.image_cache = {}
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'r', encoding='utf-8') as f:
                    self.image_cache = json.load(f)
            except Exception as e:
                print(f"Warning: Could not load cache file: {e}", file=sys.stderr)
                self.image_cache = {}

    def save_cache(self):
        """Save the image cache to disk."""
        try:
            with open(self.cache_file, 'w', encoding='utf-8') as f:
                json.dump(self.image_cache, f, indent=2)
        except Exception as e:
            print(f"Warning: Could not save cache file: {e}", file=sys.stderr)

    def sanitize_filename(self, name: str) -> str:
        """Convert name to a valid filename by removing invalid characters."""
        if not name:
            return "unknown_place"
            
        # Replace invalid filename characters with underscore
        name = re.sub(r'[\\/*?:"<>|]', "_", name)
        # Replace spaces with underscores
        name = name.replace(" ", "_")
        # Remove any other non-alphanumeric characters
        name = re.sub(r'[^\w\-.]', '', name)
        # Limit length to avoid excessively long filenames
        if len(name) > 50:
            name = name[:50]
        return name.lower()

    def get_image_hash(self, photo_url: str) -> str:
        """Create a hash of the photo URL to use for caching."""
        # Create a hash of the URL as the key for caching
        return hashlib.md5(photo_url.encode('utf-8')).hexdigest()

    def download_image(self, photo_url: str, place_name: str) -> Optional[str]:
        """Download an image from the URL and save it to a local file, using cache if available."""
        try:
            # Check if we already have this image
            url_hash = self.get_image_hash(photo_url)
            
            if url_hash in self.image_cache:
                cached_path = self.image_cache[url_hash]
                full_path = os.path.join(self.image_dir, cached_path)
                
                # Verify the file actually exists
                if os.path.exists(full_path):
                    print(f"  Using cached image for {place_name}")
                    return cached_path
            
            # Image not in cache or file missing, download it
            safe_name = self.sanitize_filename(place_name)
            filename = f"{safe_name}_{url_hash}.jpg"
            file_path = os.path.join(self.image_dir, filename)
            
            # Create a request that uses full URL with parameters
            req = urllib.request.Request(photo_url)
            
            # Don't follow redirects, instead get the final URL from Location header
            req.add_header('User-Agent', 'Mozilla/5.0')
            opener = urllib.request.build_opener()
            opener.addheaders = [('User-Agent', 'Mozilla/5.0')]
            urllib.request.install_opener(opener)
            
            # Follow redirects manually to get to the actual image
            response = urllib.request.urlopen(req)
            while response.geturl() != photo_url and response.getcode() in (301, 302, 303, 307, 308):
                photo_url = response.info()['Location']
                req = urllib.request.Request(photo_url)
                response = urllib.request.urlopen(req)
            
            # Save the image
            with open(file_path, 'wb') as f:
                f.write(response.read())
            
            # Update cache
            rel_path = os.path.relpath(file_path, self.image_dir)
            self.image_cache[url_hash] = rel_path
            self.save_cache()
            
            return rel_path
        except Exception as e:
            print(f"Error downloading image: {e}", file=sys.stderr)
            return None

    def parse_gpx(self, gpx_file: str) -> List[Dict]:
        """Parse the GPX file and extract waypoints."""
        try:
            tree = ET.parse(gpx_file)
            root = tree.getroot()
            
            # Handle namespaces in GPX files
            ns = {"": root.tag.split("}")[0].strip("{")} if "}" in root.tag else {}
            prefix = "{" + ns.get("", "") + "}" if ns else ""
            
            waypoints = []
            
            for wpt in root.findall(f".//{prefix}wpt"):
                lat = wpt.get('lat')
                lon = wpt.get('lon')
                name_elem = wpt.find(f"{prefix}name")
                desc_elem = wpt.find(f"{prefix}desc")
                
                waypoint = {
                    'latitude': float(lat) if lat else None,
                    'longitude': float(lon) if lon else None,
                    'name': name_elem.text if name_elem is not None else None,
                    'description': desc_elem.text if desc_elem is not None else None
                }
                
                waypoints.append(waypoint)
                
            return waypoints
        except Exception as e:
            print(f"Error parsing GPX file: {e}", file=sys.stderr)
            sys.exit(1)

    def parse_text_file(self, text_file: str) -> List[Dict]:
        """Parse a text file with search queries and user comments."""
        try:
            with open(text_file, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            waypoints = []
            i = 0
            while i < len(lines):
                # Skip empty lines
                while i < len(lines) and not lines[i].strip():
                    i += 1
                
                if i >= len(lines):
                    break
                
                # First line is the search query
                search_query = lines[i].strip()
                i += 1
                
                # Second line is the user comment (if available)
                user_comment = ""
                if i < len(lines) and lines[i].strip():
                    user_comment = lines[i].strip()
                    i += 1
                
                waypoint = {
                    'name': search_query,
                    'description': user_comment,
                    'latitude': None,
                    'longitude': None
                }
                
                waypoints.append(waypoint)
            
            return waypoints
        except Exception as e:
            print(f"Error parsing text file: {e}", file=sys.stderr)
            sys.exit(1)

    def find_place_by_text(self, place_name: str, lat: Optional[float] = None, lon: Optional[float] = None) -> Optional[str]:
        """Search for a place by name and location using the Places API."""
        try:
            # Include the location in the search to improve accuracy if coordinates are provided
            location_bias = f"circle:1000@{lat},{lon}" if lat is not None and lon is not None else None
            
            # Prepare the request
            params = {
                'input': place_name,
                'inputtype': 'textquery',
                'fields': 'place_id',
                'key': self.api_key
            }
            
            if location_bias:
                params['locationbias'] = location_bias
            
            # Make the request
            self.places_conn.request("GET", f"{PLACES_SEARCH_PATH}?{urllib.parse.urlencode(params)}")
            response = self.places_conn.getresponse()
            
            if response.status != 200:
                print(f"Places API error: {response.status} {response.reason}", file=sys.stderr)
                return None
            
            # Parse the response
            data = json.loads(response.read().decode('utf-8'))
            
            if data['status'] != 'OK' or not data.get('candidates'):
                return None
            
            return data['candidates'][0].get('place_id')
            
        except Exception as e:
            print(f"Error finding place by text: {e}", file=sys.stderr)
            return None

    def geocode_waypoint(self, waypoint: Dict) -> Dict:
        """Get place ID and details using a multi-step approach."""
        enriched = waypoint.copy()
        
        # If we have coordinates, use them for geocoding
        has_coordinates = waypoint['latitude'] is not None and waypoint['longitude'] is not None
        
        try:
            # STEP 1: try text search with name    
            place_id = self.find_place_by_text(
                waypoint['name'],
                waypoint['latitude'] if has_coordinates else None, 
                waypoint['longitude'] if has_coordinates else None
            )

            # STEP 2: If that fails and we have coordinates, Try geocoding API with coordinates
            if not place_id and has_coordinates:
                place_id = self.get_place_id_from_coords(
                    waypoint['latitude'], 
                    waypoint['longitude']
                )
            
            # STEP 3: If we have a place_id, get details
            if place_id:
                enriched['place_id'] = place_id
                enriched['google_maps_link'] = f"https://www.google.com/maps/place/?q=place_id:{place_id}"
                
                place_details = self.get_place_details(place_id, waypoint['name'])
                if place_details:
                    enriched.update(place_details)
            else:
                print(f"  Could not find place information for: {waypoint['name']}")
                
            return enriched
        except Exception as e:
            print(f"Error processing {waypoint['name']}: {e}", file=sys.stderr)
            return enriched

    def get_place_id_from_coords(self, lat: float, lon: float) -> Optional[str]:
        """Get place ID from coordinates using Google Geocoding API."""
        try:
            # Prepare the request
            latlng = f"{lat},{lon}"
            params = urllib.parse.urlencode({
                'latlng': latlng,
                'key': self.api_key,
                'result_type': 'point_of_interest|establishment',
                'language': 'en'
            })
            
            # Make the request
            self.geocoding_conn.request("GET", f"{GEOCODING_PATH}?{params}")
            response = self.geocoding_conn.getresponse()
            
            if response.status != 200:
                print(f"API error: {response.status} {response.reason}", file=sys.stderr)
                return None
            
            # Parse the response
            data = json.loads(response.read().decode('utf-8'))
            
            if data['status'] != 'OK' or not data.get('results'):
                return None
            
            # Extract place_id
            result = data['results'][0]
            return result.get('place_id')
            
        except Exception as e:
            print(f"Error in get_place_id_from_coords: {e}", file=sys.stderr)
            return None

    def get_place_details(self, place_id: str, place_name: str) -> Dict:
        """Get detailed place information including photos from Google Places API."""
        place_info: Dict = {}
        
        try:
            # Prepare the request
            params = urllib.parse.urlencode({
                'place_id': place_id,
                'key': self.api_key,
                'fields': 'name,formatted_address,types,website,formatted_phone_number,rating,user_ratings_total,photos,price_level,opening_hours,address_components'
            })
            
            # Make the request
            self.places_conn.request("GET", f"{PLACES_PATH}?{params}")
            response = self.places_conn.getresponse()
            
            if response.status != 200:
                print(f"Places API error: {response.status} {response.reason}", file=sys.stderr)
                return place_info
            
            # Parse the response
            data = json.loads(response.read().decode('utf-8'))
            
            if data['status'] != 'OK':
                print(f"Places API error for place_id {place_id}: {data['status']}", file=sys.stderr)
                return place_info
            
            result = data.get('result', {})
            
            # Extract relevant information
            place_info['place_name'] = result.get('name')
            place_info['formatted_address'] = result.get('formatted_address')
            place_info['address_components'] = result.get('address_components', [])
            place_info['website'] = result.get('website')
            place_info['phone'] = result.get('formatted_phone_number')
            place_info['rating'] = result.get('rating')
            place_info['rating_count'] = result.get('user_ratings_total')
            place_info['price_level'] = result.get('price_level')
            
            # Extract category information
            place_info['categories'] = result.get('types', [])
            
            # Handle opening hours
            if 'opening_hours' in result:
                place_info['open_now'] = result['opening_hours'].get('open_now')
                place_info['opening_hours'] = result['opening_hours'].get('weekday_text', [])
            
            # Handle photos - download only the first photo
            if 'photos' in result and result['photos']:
                # Use place_name from API if available, otherwise fallback to provided name
                display_name = place_info['place_name'] if place_info.get('place_name') else place_name
                
                # Get only the first photo
                photo = result['photos'][0]
                photo_ref = photo.get('photo_reference')
                
                if photo_ref:
                    photo_url = f"https://{PLACES_HOST}{PLACE_PHOTO_PATH}?maxwidth=800&photoreference={photo_ref}&key={self.api_key}"
                    
                    print(f"  Getting image for {display_name}...")
                    local_path = self.download_image(photo_url, display_name)
                    
                    place_info['photo'] = {
                        'remote_url': photo_url,
                        'local_path': local_path,
                        'width': photo.get('width'),
                        'height': photo.get('height'),
                        'html_attributions': photo.get('html_attributions', [])
                    }
                    
                    place_info['photo_available'] = local_path is not None
                else:
                    place_info['photo_available'] = False
            else:
                place_info['photo_available'] = False
            
            return place_info
        except Exception as e:
            print(f"Error getting place details for {place_id}: {e}", file=sys.stderr)
            return place_info

    def process_gpx_file(self, gpx_file: str, output_file: str) -> None:
        """Process the GPX file and write enriched data to JSON file."""
        waypoints = self.parse_gpx(gpx_file)
        print(f"Found {len(waypoints)} waypoints in {gpx_file}")
        
        enriched_waypoints = []
        for idx, waypoint in enumerate(waypoints, 1):
            print(f"Processing waypoint {idx}/{len(waypoints)}: {waypoint['name']}")
            enriched = self.geocode_waypoint(waypoint)
            
            if self.interactive:
                enriched = self.interactive_confirmation(enriched, waypoint)
                
            enriched_waypoints.append(enriched)
            
            # Add a short delay to avoid hitting API rate limits
            if idx < len(waypoints):
                time.sleep(0.2)
        
        # Write to JSON file
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'waypoints': enriched_waypoints,
                    'count': len(enriched_waypoints),
                    'source': gpx_file,
                    'image_directory': self.image_dir
                }, f, indent=2, ensure_ascii=False)
            
            print(f"Successfully wrote {len(enriched_waypoints)} enriched waypoints to {output_file}")
            print(f"Images saved to directory: {self.image_dir}")
        except Exception as e:
            print(f"Error writing to output file: {e}", file=sys.stderr)
            sys.exit(1)

    def process_text_file(self, text_file: str, output_file: str) -> None:
        """Process the text file and write enriched data to JSON file."""
        waypoints = self.parse_text_file(text_file)
        print(f"Found {len(waypoints)} search queries in {text_file}")
        
        enriched_waypoints = []
        for idx, waypoint in enumerate(waypoints, 1):
            print(f"Processing query {idx}/{len(waypoints)}: {waypoint['name']}")
            enriched = self.geocode_waypoint(waypoint)
            
            if self.interactive:
                enriched = self.interactive_confirmation(enriched, waypoint)
                
            enriched_waypoints.append(enriched)
            
            # Add a short delay to avoid hitting API rate limits
            if idx < len(waypoints):
                time.sleep(0.2)
        
        # Write to JSON file
        try:
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump({
                    'waypoints': enriched_waypoints,
                    'count': len(enriched_waypoints),
                    'source': text_file,
                    'image_directory': self.image_dir
                }, f, indent=2, ensure_ascii=False)
            
            print(f"Successfully wrote {len(enriched_waypoints)} enriched queries to {output_file}")
            print(f"Images saved to directory: {self.image_dir}")
        except Exception as e:
            print(f"Error writing to output file: {e}", file=sys.stderr)
            sys.exit(1)

    def interactive_confirmation(self, enriched: Dict, original: Dict) -> Dict:
        """Allow user to confirm or modify the geocoding result."""
        if not enriched.get('place_id'):
            print(f"  No place found for: {original['name']}")
            return enriched
            
        print(f"\n  Found: {enriched.get('place_name', 'Unknown')}")
        print(f"  Address: {enriched.get('formatted_address', 'Unknown')}")
        if enriched.get('google_maps_link'):
            print(f"  Maps link: {enriched.get('google_maps_link')}")
            
        while True:
            response = input("  Is this correct? (y/n/s): ").lower()
            if response == 'y':
                return enriched
            elif response == 'n':
                new_query = input("  Enter new search query: ")
                if new_query:
                    original['name'] = new_query
                    return self.geocode_waypoint(original)
                else:
                    return enriched
            elif response == 's':
                return enriched
            else:
                print("  Please enter 'y' for yes, 'n' for no, or 's' to skip")


def main():
    parser = argparse.ArgumentParser(description='Convert GPX waypoints or text queries to enriched JSON using Google Geocoding and Places APIs')
    parser.add_argument('input_file', help='Path to the GPX file or text file')
    parser.add_argument('output_file', help='Path to the output JSON file')
    parser.add_argument('--api-key', required=True, help='Google Maps API key')
    parser.add_argument('--image-dir', default='place_images', help='Directory to save downloaded images (default: place_images)')
    parser.add_argument('--text-input', action='store_true', help='Treat input file as a text file with search queries and comments')
    parser.add_argument('--interactive', action='store_true', help='Enable interactive confirmation after each geocode')
    
    args = parser.parse_args()
    
    geocoder = GeocodingCLI(args.api_key, args.image_dir, args.interactive)
    
    if args.text_input:
        geocoder.process_text_file(args.input_file, args.output_file)
    else:
        geocoder.process_gpx_file(args.input_file, args.output_file)


if __name__ == "__main__":
    main()
