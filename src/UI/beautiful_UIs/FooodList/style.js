/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Colors} from './assets';
import {fontRef, heightRef, widthRef} from '../../../Config/screenSizes';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    margin: 20 * heightRef,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20 * heightRef,
    marginHorizontal: 20 * heightRef,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headetText1: {
    color: 'black',
    fontSize: 20 * fontRef,
  },
  headetText2: {
    color: 'black',
    fontSize: 20 * fontRef,
    fontWeight: '700',
  },

  profile: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  search: {
    backgroundColor: '#FFF',
    flex: 1,
    height: 50,
    marginRight: 20 * heightRef,
    paddingHorizontal: 20 * heightRef,
    borderRadius: 10,
  },
  filter: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    height: 30 * heightRef,
    width: 30 * heightRef,
  },
  foods: {
    backgroundColor: '#fff',
    height: 40,
    paddingHorizontal: 24 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  popular: {
    fontSize: 20,
    color: '#121212',
    fontWeight: '700',
  },
  Restaurants: {
    fontSize: 20,
    color: '#121212',
    fontWeight: '700',
  },
  seeAll: {
    fontSize: 18 * fontRef,
    color: Colors.primaryColor,
  },
  popularFoods: {
    paddingHorizontal: 20 * heightRef,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15 * heightRef,
  },
  restaurantsFoods: {
    paddingHorizontal: 20 * heightRef,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5 * heightRef,
  },
  foodImage: {
    height: 200 * heightRef,
    width: 120 * widthRef,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  imageView: {
    borderRadius: 20,
    marginRight: 14 * heightRef,
    overflow: 'hidden',
    elevation: 2,
    marginBottom: 5,
  },
  title: {
    fontSize: 16 * fontRef,
  },
  RestaurantImage: {
    height: 70,
    width: 70,
    borderBottomLeftRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  restaurantsList: {
    backgroundColor: '#FFF',
    marginHorizontal: 20 * heightRef,
    marginVertical: 8 * heightRef,
    paddingVertical: 17 * heightRef,
    borderRadius: 20,
    flexDirection:'row',
    alignItems: 'center',
    paddingHorizontal: 20 * heightRef
  },
  titleView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 5 * heightRef,
    marginBottom: 2 * heightRef
  },
  listContent:{
    flex: 1,
    marginLeft: 14 * heightRef
  },
  name:{
    fontSize: 18 * fontRef,
    color: '#121212',
    fontWeight: '700'
  },
  ratings:{
    color: 'grey',
    fontSize: 16 * fontRef,
    fontWeight: '500',
    marginLeft: 5 * heightRef
  }
});
