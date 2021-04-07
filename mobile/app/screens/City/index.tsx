/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as cityActions from 'app/store/actions/cityActions';
import NavigationService from 'app/navigation/NavigationService';
import { ICityState, ILocationState } from 'app/models/reducers/city';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 20,
    backgroundColor: '#fff',
    margin: 20,
    shadowColor: '#777',
    shadowOpacity: 0.8,
    shadowRadius: 8,
    shadowOffset: {
      height: 5,
      width: 3
    }
  },
  title: {
    fontSize: 20
  }
});

interface IState {
  cityReducer: ICityState;
}

const City = (): JSX.Element => {
  const cities = useSelector((state: IState) => state.cityReducer.cities);
  const dispatch = useDispatch();
  const toWeatherScreen = (location: ILocationState) => NavigationService.navigate('Weather', location);

  useEffect(() => {
    dispatch(cityActions.requestCities());
  }, []);
  return (
    <View style={styles.container}>
      {cities.map((c: ILocationState, i: number) => (
        <TouchableOpacity style={styles.box} key={i} onPress={() => toWeatherScreen(c)}>
          <Text style={styles.title}>{c.city}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default City;
