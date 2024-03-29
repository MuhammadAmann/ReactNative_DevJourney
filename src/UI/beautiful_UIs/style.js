/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {AppColors} from '../../Assets/AppColors';
import {fontRef, heightRef, widthRef} from '../../Config/screenSizes';

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
    elevation: 10,
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
    marginTop: 10 * heightRef,
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  buttonStyles: {
    backgroundColor: '#FFF',
    width: 160 * widthRef,
    height: 150 * heightRef,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: AppColors.primaryLightColor,
    elevation: 4,
    // padding: 10,
    marginTop: 15,
    marginBottom: 5,
    overflow: 'hidden',
  },
  componentName: {
    color: AppColors.halfWhite,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  homeScreen: {
    color: AppColors.halfWhite,
    fontSize: 14 * fontRef,
    position: 'absolute',
    bottom: 10,
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  Dev_Inventive: {
    height: 20,
    width: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80 * heightRef,
    marginHorizontal: 24,
    justifyContent: 'space-between',
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
  componentThumbnail: {
    width: 160,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  nameView: {
    backgroundColor: AppColors.primaryColor,
    marginHorizontal: 5,
    marginTop: 2,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: AppColors.primaryLightColor,
    borderWidth: 0.5,
    elevation: 4,
    padding: 10,
  },
  learning: {
    fontSize: 24,
    fontWeight: '700',
    color: '#121212',
    textAlign: 'center',
  },
});
