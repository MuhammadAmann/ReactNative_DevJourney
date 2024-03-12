/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontRef, heightRef, widthRef} from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingTop: 50 * heightRef,
  },
  ReactNative: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
  },
  Dev: {
    fontSize: 30 * fontRef,
    fontWeight: 'bold',
  },
  rnImage:{
    height: 100 * heightRef,
    width: 100 * widthRef,
    marginBottom: 20 * heightRef,
  }
});
