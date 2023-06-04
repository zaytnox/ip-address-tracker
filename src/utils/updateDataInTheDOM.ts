type Data = {
  ip: string;
  location: {
    city: string;
    region: string;
    postalCode: string;
  };
  timezone: string;
  isp: string;
};

export const updateDataInTheDOM = (data: Data) => {
  const ipElement = document.querySelector('.ip-address > p');
  const locationElement = document.querySelector('.location > p');
  const timezoneElement = document.querySelector('.timezone > p');
  const ispElement = document.querySelector('.isp > p');

  if (ipElement) ipElement.textContent = data.ip;
  if (locationElement)
    locationElement.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
  if (timezoneElement) timezoneElement.textContent = `UTC ${data.timezone}`;
  if (ispElement) ispElement.textContent = data.isp;
};
