import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

const HeaderComponent = () => {
  const insets = useSafeAreaInsets();
  return <View style={{paddingTop: insets.top}}></View>;
};

export default HeaderComponent;
