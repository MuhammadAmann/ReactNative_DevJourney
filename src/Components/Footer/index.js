import {View, Text} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './style';

const FooterComponent = () => {
  const insets = useSafeAreaInsets();
  return <View style={{paddingBottom: insets.bottom}}></View>;
};

export default FooterComponent;
