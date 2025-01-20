/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../Components/header';

const Counter = ({navigation}) => {
  return (
    <View>
      <Text onPress={() => navigation.goBack()}>PressAble Buttons</Text>
    </View>
  );
};

export default Counter;
