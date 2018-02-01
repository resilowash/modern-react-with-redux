import axios from 'axios';

const API_KEY = '00e978ff18428c3c51e5f4a203e9918e';
//using es6 template strings ${} inside of the backticks string
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

//Redux-Promise uses intercepts actions where the payload property is a promise and after the promise is resolved dispatches a new action with the same type and the unwrapped promise data.
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //this returns a promise
  const request = axios.get(url);

  console.log('REQUEST: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
