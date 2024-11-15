import {FlatList, Image, Text, View} from 'react-native';
import {Colors, Restaurants} from '../assets';
import {styles} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {heightRef} from '../../../../Config/screenSizes';
import {useAppSelector} from '../../../../Redux/hooks';
import {useEffect, useState} from 'react';
import {IState, TCart} from '../../../../Interfaces';
import {useDispatch} from 'react-redux';
import {removefav} from '../../../../Redux/Features/FavouriteRestaurant';

export const FavouriteFoods = ({navigation}) => {
  const favFoods = useAppSelector(state => state?.FavouriteItemReducer?.cart);
  const [favItems, setFavItems] = useState<TCart[] | null>();
  const [update, setUpdate] = useState();
  const dispatch = useDispatch();

  const removeItemFavourite = (id: number, item: any) => {
    dispatch(removefav(id));
    console.log('item removed: ', JSON.stringify(item, null, 3));
    setUpdate;
  };

  // useEffect(() => {
  //   setFavItems(favFoods?.cart);
  // }, [update, favItems]);
  console.log('fooddd: ', JSON.stringify(favFoods, null, 3));

  return (
    <View>
      <View style={styles.head}>
        <Icon
          name={'left'}
          type={IconType.AntDesign}
          color={Colors.primaryLight}
          size={24}
          onPress={() => navigation.goBack()}
        />
        <Text>Favourite Foods</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favFoods}
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item, index}) => {
          const id = item.id;
          return (
            <View style={styles.restaurantsList}>
              <Image style={styles.RestaurantImage} source={item.image} />
              <View style={styles.listContent}>
                <View style={styles.titleView}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Icon
                    name={'cards-heart'}
                    type={IconType.MaterialCommunityIcons}
                    color={Colors.primaryLight}
                    size={24}
                    onPress={() => removeItemFavourite(id, item)}
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
    </View>
  );
};
