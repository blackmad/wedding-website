function initMap() {
    const istanbul = { lat: 41.0082, lng: 28.9784 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: istanbul,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });

    // Add markers for each location
    data.waypoints.forEach(place => {
        const marker = new google.maps.Marker({
            position: { lat: place.latitude, lng: place.longitude },
            map: map,
            title: place.name
        });

        const infoWindow = new google.maps.InfoWindow({
            content: `
                <div style="max-width: 200px;">
                    <h3>${place.name}</h3>
                    <p>${place.description}</p>
                </div>
            `
        });

        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

function categorizeAndDisplayPlaces() {
    const categorizedPlaces = {};
    
    // Initialize categories
    Object.keys(categories).forEach(category => {
        categorizedPlaces[category] = [];
    });

    // Categorize places
    data.waypoints.forEach(place => {
        let placed = false;
        
        for (const [category, categoryTypes] of Object.entries(categories)) {
            if (place.categories && place.categories.some(cat => categoryTypes.includes(cat))) {
                categorizedPlaces[category].push(place);
                placed = true;
                break;
            }
        }

        if (!placed) {
            categorizedPlaces['Other'].push(place);
        }
    });

    // Create HTML for categories
    const categoriesContainer = document.getElementById('categories');
    
    Object.entries(categorizedPlaces).forEach(([category, places]) => {
        if (places.length === 0) return;

        const section = document.createElement('div');
        section.className = 'category-section';
        
        section.innerHTML = `
            <h2 class="category-title">${category}</h2>
            <div class="cards-grid">
                ${places.map(place => `
                    <a href="${place.google_maps_link}" target="_blank" class="card">
                        ${place.photo_available ? `
                            <img src="/images/places/${place.photo.local_path}" alt="${place.name}" class="card-image">
                        ` : ''}
                        <div class="card-content">
                            <h3 class="card-title">${place.name}</h3>
                            <p class="card-description">${place.description}</p>
                            <div class="card-info">
                                <!-- ${place.rating ? `
                                     <p>Rating: ${place.rating} (${place.rating_count} reviews)</p>
                                 ` : ''}
                                       ${place.phone ? `
                                    <p>Phone: ${place.phone}</p>
                                ` : ''}-->
                                ${place.address_components ? `
                                    <p>${place.formatted_address}</p>
                                ` : ''}
                          
                            </div>
                        </div>
                    </a>
                `).join('')}
            </div>
        `;

        categoriesContainer.appendChild(section);
    });
}

// Initialize map and display places when the page loads
window.onload = () => {
    initMap();
    categorizeAndDisplayPlaces();
}; 