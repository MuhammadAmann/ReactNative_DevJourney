/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/UI/Home';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/Navigations';
import {LogBox} from 'react-native';
import {store} from 'src/Redux/store';
import {Provider} from 'react-redux';

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();
const App = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <StackNavigations />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
