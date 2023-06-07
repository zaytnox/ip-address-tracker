import Leaflet from 'leaflet';
import { Coords } from '../types';
import { getDataFromApi } from './getDataFromApi';
import { setViewMap } from './setViewMap';
import { updateDataInTheDOM } from './updateDataInTheDOM';

export const updateDOMByDomain = async ({
  map,
  domain,
}: {
  map: Leaflet.Map;
  domain?: string;
}) => {
  const data = await getDataFromApi({ domain });
  const {
    location: { lat, lng, city, postalCode, region, timezone },
    ip,
    isp,
  } = data;
  const coords: Coords = [lat, lng];
  setViewMap({ map, coords });
  updateDataInTheDOM({
    ip,
    location: { city, region, postalCode },
    isp,
    timezone,
  });
};
