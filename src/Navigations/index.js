/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../UI/Home';
import PressableButton from '../UI/PressableButtons';

const Stack = createNativeStackNavigator();

const StackNavigations = ({}) => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PressableButton" component={PressableButton} />
    </Stack.Navigator>
  );
};

export default StackNavigations;
