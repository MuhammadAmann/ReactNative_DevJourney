/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import { styles } from './style';
import { Images } from './assets';

const FoodList = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text>Hello
            <Text> Rocky</Text>
        </Text>
        <Image style={styles.profile} source={Images.profileImage}/>
      </View>
    </View>
  );
};

export default FoodList;
