/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigations from './src/Navigations';
import {LogBox} from 'react-native';

import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import HeaderComponent from './src/Components/header';
import {SafeAreaProvider} from 'react-native-safe-area-context';

LogBox.ignoreLogs(['Warning: ...']);

LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <HeaderComponent />
          <NavigationContainer>
            <StackNavigations />
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
