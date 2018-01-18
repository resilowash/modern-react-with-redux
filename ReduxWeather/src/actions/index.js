import axios from 'axios';

const API_KEY = '00e978ff18428c3c51e5f4a203e9918e';
//using es6 template strings ${} inside of the backticks string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //this returns a promise
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
