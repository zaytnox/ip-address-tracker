export const getDataFromApi = async ({ domain }: { domain?: string }) => {
  const API =
    'https://geo.ipify.org/api/v2/country,city?apiKey=at_4AkargGMkWlsWM7fCWxnQdwtRrouk';
  try {
    const response = await fetch(`${API}&domain=${domain || ''}`);
    const data = await response.json();
    return data;
  } catch (error) {}
};
