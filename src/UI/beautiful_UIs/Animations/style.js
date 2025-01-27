/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../../Assets/AppColors';
import {fontRef} from '../../../Config/screenSizes';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  Dev_Inventive: {
    height: 20,
    width: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // height: 60 * heightRef,
    marginHorizontal: 24,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20 * fontRef,
    fontWeight: '400',
    // color: AppColors.primaryColor,
    color: 'grey',
    marginLeft: 10,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ListStyle: {
    borderColor: AppColors.secondaryColor,
    borderWidth: 1,
    padding: 25,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  componentName: {
    fontSize: 16 * fontRef,
    fontWeight: '700',
    color: AppColors.primaryColor,
    textTransform: 'capitalize',
  },
});
