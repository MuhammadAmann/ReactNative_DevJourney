/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>React Native </Text>
      <Text>Dev Journey </Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate('PressableButton')}
      />
    </View>
  );
};

export default HomeScreen;
