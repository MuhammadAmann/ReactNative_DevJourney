/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../UI/Home';
import PressableButton from '../UI/PressableButtons';
import StacksNavigations from '../UI/StackNavigations';
import ScreenOne from '../UI/StackNavigations/Screen1';
import ScreenTwo from '../UI/StackNavigations/Screen2';

const Stack = createNativeStackNavigator();

const StackNavigations = ({}) => {
  return (
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="StacksNavigations" component={StacksNavigations} />
    <Stack.Screen name="ScreenOne" component={ScreenOne} />
    <Stack.Screen name="ScreenTwo" component={ScreenTwo} />

      </Stack.Navigator>
  );
};

export default StackNavigations;

