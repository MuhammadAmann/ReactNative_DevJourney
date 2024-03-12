/* eslint-disable prettier/prettier */
import {View, Text, Button, Image} from 'react-native';
import React from 'react';
import { styles } from './style';
import Assets from '../../Assets';



const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Image style={styles.rnImage} source={Assets.ReactNative}/>
      <Text style={styles.ReactNative}>React Native </Text>
      <Text style={styles.Dev}>Dev Journey </Text>
<Button title='Go' onPress={()=> navigation.navigate("StacksNavigations")}/>      
    </View>
  );
};

export default HomeScreen;
