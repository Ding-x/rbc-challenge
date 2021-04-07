export interface IWeather {
  main: String;
  description: String;
}

export interface ITemp {
  temp: number;
  feelsLike: number;
  pressure: number;
  humidity: number;
}

export interface IWeatherState {
  city: String | null;
  weather: IWeather | null;
  temp: ITemp | null;
}
