import Leaflet from 'leaflet';

export const initializeMap = () => {
  const map = Leaflet.map('map', {
    center: [51.505, -0.09],
    zoom: 13,
    preferCanvas: true,
  });

  Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  return map;
};
