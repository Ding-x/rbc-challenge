/* eslint-disable import/extensions */
/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './app/Entrypoint';
import { name as appName } from './app.json';

enableScreens();

AppRegistry.registerComponent(appName, () => App);
