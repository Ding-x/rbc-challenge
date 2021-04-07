import { IWeather, ITemp } from 'app/models/reducer/weather';

export interface IWeatherRequestState {
  location: String;
}

export interface IWeatherResponseState {
  city: String;
  weather: IWeather;
  temp: ITemp;
  errorMessage: String;
}
