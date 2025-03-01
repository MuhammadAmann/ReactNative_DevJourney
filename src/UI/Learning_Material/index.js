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
import HeaderComponent from '../../Components/header/index.js';

const componentList = [
  {
    componentName: 'Counter',
    navigationName: 'Counter',
    image: Assets.Buttons,
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
      <Text style={styles.learning}>Learning Material</Text>
      <FlatList
        style={styles.componentList}
        data={componentList}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({item}) => (
          <View>
            <View style={styles.buttonStyles}>
              <Image source={item.image} style={styles.componentThumbnail} />
            </View>
            <TouchableOpacity
              style={styles.nameView}
              onPress={() => navigation.navigate(item.navigationName)}>
              <Text style={styles.componentName}>{item.componentName}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default LearningMaterial;
