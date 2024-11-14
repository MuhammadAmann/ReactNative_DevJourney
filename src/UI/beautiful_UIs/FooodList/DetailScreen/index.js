import {View, Text, Pressable, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../../../../Components/header';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Colors, Images} from '../assets';
import FooterComponent from '../../../../Components/Footer';
import OrderConfirmationModal from '../ModalComponent/modal';

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
  const [size, setSize] = useState(sizes[1].id);
  const [item, setItem] = useState(true); // true means show Food image, and false to show restaurant image
  const [count, setCount] = useState(1);
  const [favourite, setFavourite] = useState(false);
  const [price, setPrice] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

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
    setPrice(price + foodDetail.price);

    console.log(count);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setPrice(price - foodDetail.price);
      console.log(count);
    }
  };

  useEffect(() => {
    setPrice(foodDetail.price);
  }, []);

  return (
    <View style={styles.main}>
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
        <View style={styles.imageBackView}>
          <TouchableOpacity onPress={() => setItem(!item)}>
            <Image
              style={styles.imageStyle}
              source={item ? foodDetail.image : restaurantsDetail.image}
            />
          </TouchableOpacity>
          <View style={styles.iconView}>
            <Icon
              onPress={() => setFavourite(!favourite)}
              name={favourite ? 'cards-heart' : 'cards-heart-outline'}
              type={IconType.MaterialCommunityIcons}
              size={24}
              color="#FF474C"
            />
          </View>
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
          <Text style={styles.Rs}>{price} $</Text>
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
      <TouchableOpacity
        onPress={() => setIsVisible(true)}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
      <OrderConfirmationModal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(!isVisible)}
        confirmOrder={() => setIsVisible(!isVisible)}
        itemPrice={foodDetail.price}
        totalItems={count}
        totalBill={price}
        itemName={foodDetail.foodName}
      />
      <FooterComponent />
    </View>
  );
};

export default ItemDetailScreen;
