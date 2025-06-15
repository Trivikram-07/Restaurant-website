// MapComponent.js
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import pinIcon from './pin.webp'; // Correct import for the image

const MapComponent = () => {
  useEffect(() => {
    // Check if the map is already initialized
    if (window.mapInitialized) return;

    // Initialize the map and set the view to Golkonda Fort
    const map = L.map('map').setView([17.4054, 78.4012], 13);

    // Load and display tile layers (OpenStreetMap tiles here)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Define a custom icon for the marker
    const customIcon = L.icon({
      iconUrl: pinIcon, // Use the imported icon
      iconSize: [32, 32], // Size of the icon
      iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -32] // Point from which the popup should open relative to the iconAnchor
    });

    // Add a marker to the map with the custom icon
    L.marker([17.4054, 78.4012], { icon: customIcon }).addTo(map)
      .bindPopup('Golkonda Express')
      .openPopup();

    // Mark map as initialized
    window.mapInitialized = true;

    // Cleanup function to remove the map when the component unmounts
    return () => {
      map.remove();
      window.mapInitialized = false;
    };
  }, []);

  return <div id="map" style={{ height: '400px', width: '100%' }}></div>;
};

export default MapComponent;
