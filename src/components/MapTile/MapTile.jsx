import React, { useEffect, useState } from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';

const MapTile = () => {
  useEffect(() => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const OSM_URL = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const OSM_ATTRIB = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const osmLayer = L.tileLayer(OSM_URL, { attribution: OSM_ATTRIB });

    const WAQI_URL = 'https://tiles.waqi.info/tiles/usepa-aqi/{z}/{x}/{y}.png?token=_TOKEN_ID_';
    const WAQI_ATTR = 'Air Quality Tiles &copy; <a href="http://waqi.info">waqi.info</a>';
    const waqiLayer = L.tileLayer(WAQI_URL, { attribution: WAQI_ATTR });

    const map = L.map('map').setView([51.505, -0.09], 11);
    map.addLayer(osmLayer).addLayer(waqiLayer);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation({ lat: latitude, lng: longitude });
            map.setView([latitude, longitude], 11);
          },
          error => {
            console.error('Error getting user location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ height: '380px' }} />;
};

export default MapTile;
