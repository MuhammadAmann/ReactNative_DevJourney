/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fontRef, heightRef, widthRef} from '../../Config/screenSizes';
import {AppColors} from '../../Assets/AppColors';

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
    marginTop: 30 * heightRef,
    flex: 1,
    
  },
  buttonStyles: {
    backgroundColor: "#FFF",
    marginVertical: 10 * heightRef,
    marginHorizontal: 24 * heightRef,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: AppColors.primaryLightColor,
    borderWidth: 0.5,
    elevation: 4,
    padding:15,
    flexDirection: 'row'
  },
  componentName: {
    color: AppColors.secondaryColor,
    fontSize: 24 * fontRef,
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
  iconView:{
    height: 50 * widthRef,
    width: 50 * widthRef,
    borderRadius: 100,
    backgroundColor: AppColors.primaryLightColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent:{
    flex: 1,
    marginHorizontal: 14 * widthRef,

  },
  description:{
    fontSize: 14 * fontRef,
    color: "#121212",
    textAlign: 'justify'
  }
});
