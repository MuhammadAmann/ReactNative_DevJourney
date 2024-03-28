/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import Assets from '../../Assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../Assets/AppColors';

const componentList = [
  {
    componentName: 'Learning Material',
    navigationName: 'LearningMaterial',
    description:
      'Press the button to explore components, functionalities, and other valuable resources to enhance your skills',
    iconName: 'book-outline',
    iconType: 'Ionicons',
  },
  {
    componentName: 'Beautiful UIs',
    navigationName: 'Beautiful_UIs',
    description:
      'Press the button to access the page and unlock inspiration for your next project',
    iconName: 'butterfly-outline',
    iconType: 'MaterialCommunityIcons',
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
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate(item.navigationName)}
            style={styles.buttonStyles}>
            <View style={styles.iconView}>
              <Icon
                name={item.iconName}
                type={item.iconType}
                color={AppColors.secondaryColor}
                size={24}
              />
            </View>
            <View style={styles.buttonContent}>
              <Text style={styles.componentName}>{item.componentName}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Icon
              name="chevron-right"
              type={IconType.FontAwesome5}
              size={24}
              color={AppColors.secondaryColor}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

export default HomeScreen;
