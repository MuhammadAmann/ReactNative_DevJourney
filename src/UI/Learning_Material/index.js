/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../Assets/AppColors';
import {styles} from './style';
import Assets from '../../Assets';

const componentList = [
  {
    componentName: 'PressAble Buttons',
    navigationName: 'PressAbleButtons',
  },
  {
    componentName: 'Stack Navigations',
    navigationName: 'StacksNavigations',
  },
];
const LearningMaterial = ({navigation}) => {
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
          <Text style={styles.headerTitle}>Learning Material</Text>
        </View>
        <Image source={Assets.Dev_Inventive} style={styles.Dev_Inventive} />
      </View>
      <FlatList
        style={styles.componentList}
        data={componentList}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate(item.navigationName)}
            style={styles.buttonStyles}>
            <Image
              source={Assets.Stacks}
              style={styles.componentThumbnail}
            />

            <Text style={styles.componentName}>{item.componentName}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default LearningMaterial;
