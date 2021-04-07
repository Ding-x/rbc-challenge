/**
 * React Native App
 * Everything starts from the entrypoint
 */
import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';

import Navigator from 'app/navigation';
import configureStore from 'app/store';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme
};

const { persistor, store } = configureStore();

const RootNavigation: React.FC = () => (
  <PaperProvider theme={PaperDefaultTheme}>
    <Navigator theme={CombinedDefaultTheme} />
  </PaperProvider>
);

const Entrypoint: React.FC = () => (
  <Provider store={store}>
    <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
      <RootNavigation />
    </PersistGate>
  </Provider>
);

export default Entrypoint;
