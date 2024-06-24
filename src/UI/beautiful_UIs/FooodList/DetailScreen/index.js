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

// Important Notes
// Original price with addition of smalll, medium, larger price will calculate when press Buy Now button
// also show the size wise proce when select the size, show a small size proce uder the size latter
// show a popup when user buy the food with an animation(now apply animation on it)

const ItemDetailScreen = ({navigation, route}) => {
  const [size, setSize] = useState(sizes[1].id);
  const [item, setItem] = useState(true); // true means show Food image, and false to show restaurant image
  const [count, setCount] = useState(0);

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

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      console.log(count);
    }
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
        <Text style={styles.heading}>
          {item ? foodDetail.foodName : restaurantsDetail.name}
        </Text>
        <Text style={styles.description}>
          Description for Food here, this is the random detail of Lahore
          restaurants, Description of food here, is the random detail of Lahore
          restaurants
        </Text>
        <TouchableOpacity
          onPress={() => setItem(!item)}
          style={styles.imageBackView}>
          <Image
            style={styles.imageStyle}
            source={item ? foodDetail.image : restaurantsDetail.image}
          />
        </TouchableOpacity>

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
                <Text
                  style={[
                    styles.sizePrice,
                    {color: size === id ? '#fff' : Colors.grayColor},
                  ]}>
                  ${item.price}
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
          <TouchableOpacity onPress={decrement}>
            <Text style={styles.count}>-</Text>
          </TouchableOpacity>
          <Text style={styles.itemCount}>{count}</Text>
          <TouchableOpacity onPress={increment}>
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
