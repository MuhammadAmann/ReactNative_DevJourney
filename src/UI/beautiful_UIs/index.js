/* eslint-disable prettier/prettier */
import {
  View,
  Text,
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
import HeaderComponent from '../../Components/header';

// Final Note :-----
// Food list has been created with dummy data and design in Hard coded
// It is basically a UI design  with basic functionalities(do not implement functionalities regarding to every scenario but basic and tricky somes have been applied) of Restautrant Items
// Design Inspiration: Behance (Link: ----> https://www.behance.net/gallery/192831105/Restaurant-Mobile-App )

const componentList = [
  {
    componentName: 'Food List',
    navigationName: 'FoodList',
    image: Assets.FoodList,
  },
  {
    componentName: 'Animations',
    navigationName: 'Animations',
    image: Assets.Animations,
  },
];
const Beautiful_UIs = ({navigation}) => {
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
      <Text style={styles.learning}>Beautiful UIs</Text>
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

export default Beautiful_UIs;
