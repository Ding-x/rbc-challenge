import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  largeHeader: {
    fontSize: 40,
    textAlign: 'center'
  }
});

const Loading = (): JSX.Element => (
  <View>
    <Text style={styles.largeHeader}>Loading...</Text>
  </View>
);

export default Loading;
