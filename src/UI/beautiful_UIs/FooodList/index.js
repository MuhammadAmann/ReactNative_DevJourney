/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, FlatList, Pressable} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors, Images} from './assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import { heightRef } from '../../../Config/screenSizes';

const foods = [
  {
    id: 1,
    title: 'All',
    image: Images.BeefBurger,
  },
  {
    id: 2,
    title: 'Burger',
    image: Images.pizza2,
  },
  {
    id: 3,
    title: 'Pasta',
    image: Images.Pasta,
  },
  {
    id: 4,
    title: 'Pizza',
    image: Images.ZingerBurger,
  },
  {
    id: 5,
    title: 'Starters',
    image: Images.pizza,
  },
];

const FoodList = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.headetText1}>
          Hello
          <Text style={styles.headetText2}> Rocky</Text>
        </Text>
        <Image style={styles.profile} source={Images.profileImage} />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          placeholder="Search Foods"
          placeholderTextColor={Colors.grey}>
          <Icon
            name="search"
            type={IconType.Ionicons}
            size={20}
            color={Colors.primaryColor}
          />
        </TextInput>
        <View style={styles.filter}>
          <Image style={styles.filterIcon} source={Images.Filter} />
        </View>
      </View>
      <View style={{marginBottom: 20* heightRef}}>
      <FlatList
        data={foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginRight: 20, marginLeft: 20}}
        renderItem={({item, index}) => (
          <Pressable style={[styles.foods ]}>
            <Text style={styles.title}>{item.title}</Text>
          </Pressable>
        )}
      />
      </View>
      <View style={styles.popularFoods}>
      <Text style={styles.popular}>Popular foods</Text>
      <Text style={styles.seeAll}>See All</Text>
      </View>
      <View style={{marginBottom: 15 * heightRef}}>
        <FlatList
        data={foods}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle ={{marginHorizontal: 20 * heightRef}}
        
        renderItem={({item})=> 
        <View style={styles.imageView}>
        <Image style={styles.foodImage} source={item.image}/>
        </View>
        }
        />
      </View>
      <View style={styles.restaurantsFoods}>
      <Text style={styles.popular}>Restaurants</Text>
      <Text style={styles.seeAll}>See All</Text>
      </View>
    </View>
  );
};

export default FoodList;
