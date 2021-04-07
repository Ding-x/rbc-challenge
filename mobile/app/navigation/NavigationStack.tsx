import * as React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import City from 'app/screens/City';
import Weather from 'app/screens/Weather';
import { StatusBar } from 'react-native';
import { navigationRef } from './NavigationService';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();

interface IProps {
  theme: Theme;
}

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <Stack.Screen name="City" component={City} />
    <Stack.Screen name="Weather" component={Weather} />
  </AuthStack.Navigator>
);

const App: React.FC<IProps> = (props: IProps) => {
  const { theme } = props;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <StatusBar barStyle="light-content" />
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="City" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
