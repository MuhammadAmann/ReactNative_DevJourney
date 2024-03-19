/* eslint-disable prettier/prettier */
import {View, Text, Button, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import Assets from '../../Assets';

const componentList = [
  {
    componentName: 'PressAble Buttons',
    navigationName: 'PressableButton',
  },
  {
    componentName: 'Stack Navigations',
    navigationName: 'StacksNavigations',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.main}>
      <View style={styles.top}>
        <Image style={styles.rnImage} source={Assets.ReactNative} />
        <Text style={styles.ReactNative}>React Native - Dev Journey </Text>
        <Text style={styles.homeScreen}>Dev Inventive</Text>
      </View>
      <FlatList
      style={styles.componentList}
        data={componentList}
        showsHorizontalScrollIndicator = {false}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity onPress={()=>navigation.navigate(item.navigationName)} style={styles.buttonStyles}>
            <Text style={styles.componentName}>{item.componentName}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default HomeScreen;
