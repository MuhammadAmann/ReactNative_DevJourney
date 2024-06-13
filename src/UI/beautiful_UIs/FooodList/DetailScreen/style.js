/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Colors} from '../assets';
import {fontRef, heightRef, widthRef} from '../../../../Config/screenSizes';

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
  heading: {
    fontSize: 24 * fontRef,
    fontWeight: '700',
    color: '#121212',
    marginVertical: 10 * heightRef,
  },
  description: {
    fontSize: 14,
    color: '#919B9B',
    textAlign: 'center',
    marginHorizontal: 40 * heightRef,
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    height: 250,
    width: 250,
    borderRadius: 200,
  },
  imageBackView: {
    backgroundColor: Colors.primaryLight,
    height: 300,
    width: 300,
    marginTop: 30 * heightRef,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSizes: {
    // backgroundColor: 'red',
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 30 * widthRef,
  },
  size: {
    fontSize: 20 * fontRef,
    color: Colors.grayColor,
    fontWeight: 'bold',
  },
  sizeView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    width: 50,
    height: 50,
  },

  buttonStyle: {
    backgroundColor: Colors.primaryColor,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18 * fontRef,
    fontWeight: '700',
  },
  priceView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 20,
    // backgroundColor: 'red',
  },
  countView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3a3b3c',
    paddingHorizontal: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    height: 40,
  },
  count: {
    fontSize: 24 * fontRef,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemCount: {
    fontSize: 20 * fontRef,
    color: '#fff',
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16 * fontRef,
    fontWeight: 'bold',
    color: '#919B9B',
  },
  Rs: {
    fontSize: 20 * fontRef,
    fontWeight: 'bold',
    color: '#121212',
    marginTop: 2,
  },
});
