/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Colors} from './assets';
import { heightRef } from '../../../Config/screenSizes';

export const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.background,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: 20 * heightRef,
    alignItems:'center',
    justifyContent: 'space-between'
  },
  profile:{
    height: 40,
    width: 40
  }
});
