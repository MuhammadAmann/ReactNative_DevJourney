/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontRef, heightRef, widthRef} from '../../../../Config/screenSizes';
import {AppColors} from '../../../../Assets/AppColors';
import {Colors} from '../assets';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
  },
  mainView: {
    backgroundColor: '#fff',
    padding: 20 * heightRef,
    borderRadius: 10,
    elevation: 5,
    marginBottom: 20 * heightRef,
    width: '100%',
  },
  heading: {
    alignItems: 'center',
  },
  orderDetail: {
    fontSize: 24 * fontRef,
    fontWeight: '700',
    color: Colors.primaryColor,
  },
  line: {
    height: 1,
    backgroundColor: Colors.primaryColor,
  },
  item: {
    fontSize: 16 * fontRef,
    fontWeight: '600',
    color: '#121212',
  },
  itemPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10 * heightRef,
    marginTop: 30 * heightRef,
  },
  confirmButton: {
    backgroundColor: Colors.primaryColor,
    height: 50 * heightRef,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30 * heightRef,
  },
  comfirm: {
    fontSize: 18 * fontRef,
    fontWeight: '700',
    color: '#fff',
  },
});
