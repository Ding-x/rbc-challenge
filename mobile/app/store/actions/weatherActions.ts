import { IWeatherResponse } from 'app/models/api/weather';
import * as types from './types';

export function requestWeather(location: string) {
  return {
    type: types.GET_WEATHER_REQUEST,
    location
  };
}

export function onGetWeatherResponse(response: IWeatherResponse) {
  return {
    type: types.GET_WEATHER_RESPONSE,
    response
  };
}

export function onGetWeatherFail(response: IWeatherResponse) {
  return {
    type: types.GET_WEATHER_FAIL,
    response
  };
}
