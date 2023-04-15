const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getUrl = (apiUrl, filter = null) => {
  const apiKey = `api_key=${API_KEY}`;
  const urlFilter = filter ? `?${filter}&${apiKey}` : `?${apiKey}`;

  return `${API_URL}/${apiUrl}${urlFilter}`;
};

export const setFetch = async (apiUrl, filter) => {
  const url = getUrl(apiUrl, filter);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const roundedToFixed = (float = 0, divider = 1, digits = 1) => {
  const numberToFix = float / divider;
  const rounder = Math.pow(10, digits);
  const rounded = (Math.round(numberToFix * rounder) / rounder).toFixed(digits);
  return rounded;
};

export const generateColor = (value) => {
  let color;
  if (value < 50) {
    color = 'red';
  } else if (value >= 50 && value <= 70) {
    color = 'yellow';
  } else if (value >= 71 && value <= 80) {
    color = 'green';
  } else if (value >= 81 && value <= 100) {
    color = 'blue';
  } else {
    color = 'default';
  }
  return color;
};
