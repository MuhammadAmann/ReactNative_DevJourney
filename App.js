/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/UI/Home';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/Navigations';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
  );
};

export default App;
