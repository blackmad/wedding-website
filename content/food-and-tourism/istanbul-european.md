---
title: "Istanbul European Side - Places to Visit"
draft: false
---

<div id="map" style="width: 100%; height: 500px; margin-bottom: 2rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"></div>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDatAG3RSFl4ULSKseO7ciADYWgYi_1B64"></script>
<script src="/js/istanbul-european.js"></script>
<script src="/js/waypoint-map.js"></script>

<style>
    .category-section {
        margin-bottom: 3rem;
    }

    .category-title {
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
        border-bottom: 2px solid var(--accent-color);
        padding-bottom: 0.5rem;
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
    }

    .card {
        background: var(--card-background);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s ease-in-out;
        text-decoration: none;
        color: inherit;
        display: block;
    }

    .card:hover {
        transform: translateY(-4px);
    }

    .card-image {
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    .card-content {
        padding: 1.5rem;
    }

    .card-title {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: var(--primary);
    }

    .card-description {
        color: var(--primary-content);
        font-size: 0.95rem;
        margin-bottom: 1rem;
    }

    .card-info {
        font-size: 0.9rem;
        color: var(--primary-content);
    }

    .card-info p {
        margin-bottom: 0.25rem;
    }

    @media (max-width: 768px) {
        #map {
            height: 300px;
        }

        .cards-grid {
            grid-template-columns: 1fr;
        }
    }
</style>

<div id="categories"></div> 