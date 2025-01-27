import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
import Assets from '../../../Assets';
import {AppColors} from '../../../Assets/AppColors';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
// Note: In the Animation will not be focus on code, only animation implementation
export const Animations = ({navigation}) => {
  const AnimationScreen = [
    {
      componentName: 'Interpolation One',
      navigationName: 'One',
    },
    {
      componentName: 'Basic Animations',
      navigationName: 'Basic',
    },
  ];
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.headerRight}>
          <Pressable onPress={() => navigation.goBack()}>
            <Icon
              name="chevron-left"
              type={IconType.FontAwesome5}
              size={20}
              color={AppColors.secondaryColor}
            />
          </Pressable>
          <Text style={styles.headerTitle}>Welcome </Text>
          <Icon
            name="waving-hand"
            type={IconType.MaterialIcons}
            size={16}
            color="#e6bc98"
          />
        </View>
        <Image source={Assets.Dev_Inventive} style={styles.Dev_Inventive} />
      </View>
      <FlatList
        data={AnimationScreen}
        showsHorizontalScrollIndicator={false}
        renderItem={item => {
          return (
            <TouchableOpacity
              style={styles.ListStyle}
              onPress={() => navigation.navigate(item.item.navigationName)}>
              <Text style={styles.componentName}>
                {item.item.componentName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
