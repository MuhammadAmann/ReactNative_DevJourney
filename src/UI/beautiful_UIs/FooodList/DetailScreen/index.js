import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HeaderComponent from '../../../../Components/header';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors, Images} from '../assets';
import FooterComponent from '../../../../Components/Footer';

const sizes = [
  {
    id: 1,
    name: 'Small',
    Title: 'S',
    price: 5,
  },
  {
    id: 2,
    name: 'Medium',
    Title: 'M',
    price: 10,
  },
  {
    id: 3,
    name: 'Large',
    Title: 'L',
    price: 15,
  },
];

const ItemDetailScreen = ({navigation, route}) => {
  const [size, setSize] = useState('');
  const foodDetail = route.params.item;
  console.log('Food Detail: ', JSON.stringify(foodDetail, null, 2));

  const restaurantsDetail = foodDetail.RestaurantDetail;
  console.log(
    'Restaurants Detail: ',
    JSON.stringify(restaurantsDetail, null, 2),
  );

  const selectSize = id => {
    setSize(id);
  };

  return (
    <View style={styles.main}>
      <HeaderComponent />
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-left"
            type={IconType.FontAwesome5}
            size={20}
            color={Colors.primaryColor}
          />
        </Pressable>
        <Pressable>
          <Icon
            name="dots-vertical"
            type={IconType.MaterialCommunityIcons}
            size={20}
            color={Colors.blacklightColor}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
        <Text style={styles.heading}>{foodDetail.foodName}</Text>
        <Text style={styles.description}>
          Description of burger here, this is the random detail of Lahore
          restaurants, Description of burger here, is the random detail of
          Lahore restaurants
        </Text>
        <View style={styles.imageBackView}>
          <Image style={styles.imageStyle} source={foodDetail.image} />
        </View>

        <View style={styles.itemSizes}>
          {sizes.map(item => {
            const id = item.id;
            return (
              <Pressable
                onPress={() => selectSize(id)}
                style={[
                  styles.sizeView,
                  {
                    backgroundColor: size === id ? Colors.primaryColor : '#fff',
                    height: size === id ? 60 : 50,
                    width: size === id ? 60 : 50,
                  },
                ]}>
                <Text
                  style={[
                    styles.size,
                    {color: size === id ? '#fff' : Colors.grayColor},
                  ]}>
                  {item.Title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
      <View style={styles.priceView}>
        <View>
          <Text style={styles.price}>Price</Text>
          <Text style={styles.Rs}>{foodDetail.price} $</Text>
        </View>
        <View style={styles.countView}>
          <TouchableOpacity>
            <Text style={styles.count}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>1</Text>
          <TouchableOpacity>
            <Text style={styles.count}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
      <FooterComponent />
    </View>
  );
};

export default ItemDetailScreen;
