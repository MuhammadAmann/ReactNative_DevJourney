import {View, Text} from 'react-native';
import React from 'react';
import HeaderComponent from '../../../../Components/header';

const ItemDetailScreen = ({navigation}) => {
  return (
    <View>
      <HeaderComponent />
      <Text onPress={() => navigation.goBack()}>ItemvDetail Screen</Text>
    </View>
  );
};

export default ItemDetailScreen;
