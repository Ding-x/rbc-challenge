import { all, takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { getCitiesAsync } from './citySaga';
import { getWeatherAsync } from './weatherSaga';

export default function * watch () {
  yield all([
    takeEvery(types.GET_CITIES_REQUEST, getCitiesAsync),
    takeEvery(types.GET_WEATHER_REQUEST, getWeatherAsync)
  ]);
}
