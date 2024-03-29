/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../UI/Home';
import PressableButton from '../UI/Learning_Material';
import StacksNavigations from '../UI/StackNavigations';
import ScreenOne from '../UI/StackNavigations/Screen1';
import ScreenTwo from '../UI/StackNavigations/Screen2';
import Beautiful_UIs from '../UI/beautiful_UIs';
import LearningMaterial from '../UI/Learning_Material';
import PressAbleButtons from '../UI/Learning_Material/PressableButtons';
import FoodList from '../UI/beautiful_UIs/FooodList';

const Stack = createNativeStackNavigator();

const StackNavigations = ({}) => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="StacksNavigations" component={StacksNavigations} />
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
      <Stack.Screen name="Beautiful_UIs" component={Beautiful_UIs} />
      <Stack.Screen name="LearningMaterial" component={LearningMaterial} />
      <Stack.Screen name="PressAbleButtons" component={PressAbleButtons} />
      <Stack.Screen name="FoodList" component={FoodList} />
    </Stack.Navigator>
  );
};

export default StackNavigations;
