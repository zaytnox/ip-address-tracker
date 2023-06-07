import './styles/global.css';
import { initializeMap } from './utils/initializeMap';
import { updateDOMByDomain } from './utils/updateDOMByDomain';

const map = initializeMap();
updateDOMByDomain({ map });

document.querySelector('.search-btn')?.addEventListener('click', async () => {
  const searchInput: HTMLInputElement | null =
    document.querySelector('.search-input');

  updateDOMByDomain({ map, domain: searchInput?.value });
});
