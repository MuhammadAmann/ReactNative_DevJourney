/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import {Colors, Images, Restaurants} from './assets';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {heightRef} from '../../../Config/screenSizes';
import HeaderComponens from '../../../Components/header';
import {AppColors} from '../../../Assets/AppColors';

const foods = [
  {
    id: 1,
    title: 'All',
    foodName: 'All',
    image: Images.Mix,
    RestaurantDetail: {
      name: 'Marks Kitchen',
      location: 'Gulberg, Lahore Pakistan',
      image: Restaurants.Restaurant1,
      Ratings: '4.7',
    },
  },
  {
    id: 2,
    title: 'Burgers',
    foodName: 'Beef Burger',
    image: Images.BeefBurger,
    RestaurantDetail: {
      name: 'Marks Kitchen',
      location: 'Gulberg, Lahore Pakistan',
      image: Restaurants.Restaurant1,
      Ratings: '4.7',
    },
  },
  {
    id: 3,
    title: 'Pasta',
    foodName: 'Pasta',
    image: Images.Pasta,
    RestaurantDetail: {
      name: 'Haveli Restaurant',
      location: 'Food Street, Lahore Pakistan',
      image: Restaurants.Restaurant3,
      Ratings: '4.7',
    },
  },
  {
    id: 4,
    title: 'Pizza',
    foodName: 'Crown Crust Pizza',
    image: Images.pizza2,
    RestaurantDetail: {
      name: 'Cheezious',
      location: 'Johar Town, Lahore Pakistan',
      image: Restaurants.Restaurant4,
      Ratings: '4.8',
    },
  },
  {
    id: 5,
    title: 'Starters',
    foodName: 'Starters',
    image: Images.Starter,
    RestaurantDetail: {
      name: 'Avari Express',
      location: 'Mall Road, Lahore Pakistan',
      image: Restaurants.Restaurant2,
      Ratings: '4.5',
    },
  },
];

const RestaurantsList = [
  {
    id: 1,
    name: 'Marks Kitchen',
    location: 'Gulberg, Lahore Pakistan',
    image: Restaurants.Restaurant1,
    Ratings: '4.7',
  },
  {
    id: 2,
    name: 'Avari Express',
    location: 'Mall Road, Lahore Pakistan',
    image: Restaurants.Restaurant2,
    Ratings: '4.5',
  },
  {
    id: 3,
    name: 'Haveli Restaurant',
    location: 'Food Street, Lahore Pakistan',
    image: Restaurants.Restaurant3,
    Ratings: '4.7',
  },
];

const FoodList = ({navigation}) => {
  const [selectedType, setSelectedType] = useState(null);
  const [Favourite, setFavourite] = useState(null);

  const SelectType = id => {
    setSelectedType(id);
  };

  const FavouriteItem = id => {
    setFavourite(id);
  };

  return (
    <View style={styles.main}>
      <HeaderComponens />
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
          placeholder="Search your foods.."
          placeholderTextColor="grey">
          {/* <Icon
            name="search"
            type={IconType.Ionicons}
            size={20}
            color={Colors.primaryColor}
          /> */}
        </TextInput>
        <View style={styles.filter}>
          <Image style={styles.filterIcon} source={Images.Filter} />
        </View>
      </View>
      <View
        style={{
          marginBottom: 20 * heightRef,
          // backgroundColor: 'red',
          // paddingHorizontal: 20,
        }}>
        <FlatList
          data={foods}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingLeft: 20 * heightRef,
            paddingRight: 10,
          }}
          renderItem={({item}) => {
            const Id = item.id;
            return (
              <Pressable
                style={[
                  styles.foods,
                  {
                    backgroundColor:
                      Id === selectedType ? Colors.primaryColor : '#fff',
                  },
                ]}
                onPress={() => SelectType(Id)}>
                <Text
                  style={[
                    styles.title,
                    {color: Id === selectedType ? '#fff' : '#121212'},
                  ]}>
                  {item.title}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
      <ScrollView>
        <View style={styles.popularFoods}>
          <Text style={styles.popular}>Popular foods</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <View style={{marginBottom: 15 * heightRef}}>
          <FlatList
            data={foods}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20 * heightRef,
              paddingRight: 10,
            }}
            renderItem={({item}) => {
              return (
                <Pressable
                  onPress={() => navigation.navigate('ItemDetailScreen')}
                  style={styles.imageView}>
                  <Image style={styles.foodImage} source={item.image} />
                </Pressable>
              );
            }}
          />
        </View>
        <View style={styles.restaurantsFoods}>
          <Text style={styles.popular}>Restaurants</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={RestaurantsList}
          contentContainerStyle={{marginBottom: 50}}
          renderItem={({item, index}) => {
            const id = item.id;
            return (
              <View style={styles.restaurantsList}>
                <Image style={styles.RestaurantImage} source={item.image} />
                <View style={styles.listContent}>
                  <View style={styles.titleView}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Icon
                      name={
                        Favourite == id ? 'cards-heart' : 'cards-heart-outline'
                      }
                      type={IconType.MaterialCommunityIcons}
                      color={Colors.primaryLight}
                      size={24}
                      onPress={() => FavouriteItem(id)}
                    />
                  </View>
                  <Text style={{color: 'grey', marginVertical: 2 * heightRef}}>
                    {item.location}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="star"
                      type={IconType.MaterialIcons}
                      color={Colors.primaryLight}
                      size={16}
                    />
                    <Text style={styles.ratings}>Rating: {item.Ratings}</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default FoodList;
