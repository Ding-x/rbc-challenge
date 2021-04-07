import axios from 'axios';
import { BASE_THIRD_PARTY_WEATHER_API, API_TOKEN } from './weather';

export const getWeather = async (req, res, next) => {
  try {
    const { q } = req.query;
    const weather = await axios.get(`${BASE_THIRD_PARTY_WEATHER_API}?q=${q}&APPID=${API_TOKEN}`);
    res.jsend.success(weather.data);
  } catch (error) {
    next(error);
  }
};
