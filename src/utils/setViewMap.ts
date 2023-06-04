import Leaflet from 'leaflet';
import { Coords } from '../types';

export const setViewMap = ({
  map,
  coords,
}: {
  map: Leaflet.Map;
  coords: Coords;
}) => {
  const markerIcon = new Leaflet.Icon({
    iconUrl: './images/icon-location.svg',
  });
  map.setView(coords, 13);
  Leaflet.marker(coords, { icon: markerIcon }).addTo(map).openPopup();
};
