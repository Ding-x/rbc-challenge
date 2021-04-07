import { ICityResponse } from 'app/models/api/city';
import * as types from './types';

export function requestCities() {
  return {
    type: types.GET_CITIES_REQUEST
  };
}

export function onGetCitiesResponse(response: ICityResponse) {
  return {
    type: types.GET_CITIES_RESPONSE,
    response
  };
}

export function onGetCitiesFail(response: ICityResponse) {
  return {
    type: types.GET_CITIES_RESPONSE,
    response
  };
}
