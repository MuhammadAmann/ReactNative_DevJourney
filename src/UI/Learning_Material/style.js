/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import { AppColors } from '../../Assets/AppColors';
import { fontRef, heightRef, widthRef } from '../../Config/screenSizes';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
   
  },
  top: {
    backgroundColor: AppColors.primaryColor,
    height: 300,
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  ReactNative: {
    fontSize: 24 * fontRef,
    fontWeight: 'bold',
    color: AppColors.lightYellow,
  },
  Dev: {
    fontSize: 30 * fontRef,
    fontWeight: 'bold',
  },
  rnImage: {
    height: 130,
    width: 150,
    marginBottom: 30 * heightRef,
  },
  componentList: {
    marginTop: 20 * heightRef,
    flexWrap: 'wrap',
    alignSelf: 'center',
  },
  buttonStyles: {
    backgroundColor: "#FFF",
    width: 160 * widthRef,
    height: 60 * heightRef,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: AppColors.primaryLightColor,
    borderWidth: 0.5,
    elevation: 4,
  },
  componentName: {
    color: AppColors.secondaryColor,
    fontSize: 14,
    fontWeight: '600',
  },
  homeScreen:{
    color: AppColors.halfWhite,
    fontSize: 14 * fontRef,
    position: 'absolute',
    bottom: 10,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  Dev_Inventive:{
    height: 20,
    width: 20,
  },
  header:{
    flexDirection: 'row',
    alignItems:'center',
    height: 80 * heightRef,
    justifyContent: 'space-around'
  },
  headerTitle:{
    fontSize: 24 * fontRef,
    fontWeight: '700',
    color: AppColors.primaryColor
  },
});
