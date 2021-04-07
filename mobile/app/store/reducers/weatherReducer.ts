import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { IWeatherState } from 'app/models/reducers/weather';
import { IWeatherResponseState } from 'app/models/actions/weather';

const initialState: IWeatherState = {
  city: null,
  weather: null,
  temp: null,
  isLoading: false,
  failed: false,
  errorMessage: ''
};

export const weatherReducer = createReducer(initialState, {
  [types.GET_WEATHER_REQUEST](state: IWeatherState) {
    return {
      ...state,
      isLoading: true
    };
  },
  [types.GET_WEATHER_RESPONSE](state: IWeatherState, action: IWeatherResponseState) {
    return {
      ...state,
      city: action.response.city,
      weather: action.response.weather,
      temp: action.response.temp,
      isLoading: false
    };
  },
  [types.GET_WEATHER_FAIL](state: IWeatherState, action: IWeatherResponseState) {
    return {
      ...state,
      isLoading: false,
      failed: true,
      errorMessage: action.response.errorMessage
    };
  }
});
