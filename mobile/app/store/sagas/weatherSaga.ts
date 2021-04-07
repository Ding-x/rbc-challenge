import { put, call } from 'redux-saga/effects';
import * as weatherActions from 'app/store/actions/weatherActions';
import getWeather from 'app/services/weather';
import { IWeatherState } from 'app/models/reducers/weather';

export function* getWeatherAsync(action: any) {
  try {
    const response = yield call(getWeather, action.location);
    if (response.status === 200) {
      yield put(weatherActions.onGetWeatherResponse(mapWeatherApiToState(response.data.data)));
    }
  } catch (e) {
    yield put(
      weatherActions.onGetWeatherFail({
        errorMessage: e
      })
    );
  }
}

function mapWeatherApiToState (data: any): IWeatherState {
  return {
    city: data.name,
    weather: {
      main: data.weather[0].main,
      description: data.weather[0].description
    },
    temp: {
      temp: data.main.temp,
      feelsLike: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity
    }
  };
}
