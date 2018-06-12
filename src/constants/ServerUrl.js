let baseURL = '';
let socketURL = '';
let textGeneratorURL = '';
let weatherURL = '';
let locationURL = '';

if (process.env.NODE_ENV === 'production' ) {
  // console.log('Production...');
  baseURL = '';
  socketURL = '';
} else {
  // console.log('Devlopment...');
  baseURL = 'http://localhost:3100/api';
  socketURL = 'http://localhost:3100';
  textGeneratorURL = 'https://baconipsum.com/api';
  weatherURL = 'http://api.openweathermap.org/data/2.5/weather';
  locationURL = 'https://api.ipdata.co';  
}

export const BASE_URL = baseURL;
export const SOCKET_URL = socketURL;
export const TEXT_GENERATOR_URL = textGeneratorURL;
export const WEATHER_URL= weatherURL;
export const LOCATION_URL = locationURL;
