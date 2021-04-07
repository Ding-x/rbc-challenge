import React, { useEffect } from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { ILocationState } from 'app/models/reducers/city';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { IWeatherState } from 'app/models/reducers/weather';
import * as weatherActions from 'app/store/actions/weatherActions';
import Loading from 'app/components/loading';

type RootStackParamList = {
  Location: ILocationState;
};

type Props = StackScreenProps<RootStackParamList, 'Location'>;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100
  },
  largeHeader: {
    fontSize: 40,
    textAlign: 'center'
  },
  mediumHeader: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  },
  smallHeader: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10
  }
});

interface IState {
  weatherReducer: IWeatherState;
}

const Weather = ({ route }: Props): JSX.Element => {
  const weather = useSelector((state: IState) => state.weatherReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(weatherActions.requestWeather(`${route.params.city},${route.params.country}`));
  }, [])
  return (
    <View style={styles.root}>
      {!weather.isLoading 
       ? <View>
          <Text style={styles.largeHeader}>{weather.city}</Text>
          <Text style={styles.mediumHeader}>{weather.weather.main}</Text>
          <Text style={styles.smallHeader}>Temp: {weather.temp.temp}</Text>
          <Text style={styles.smallHeader}>Feels like: {weather.temp.feelsLike}</Text>
          <Text style={styles.smallHeader}>Pressure: {weather.temp.pressure}</Text>
          <Text style={styles.smallHeader}>Humidity: {weather.temp.humidity}</Text>
        </View>
     :<Loading />
      }
    </View>
  );
};

export default Weather;
