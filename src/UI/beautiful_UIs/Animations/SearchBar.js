import React, {useState} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {fontRef, heightRef, widthRef} from '../../../Config/screenSizes';
import {AppColors} from '../../../Assets/AppColors';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SearchBar = ({navigation}) => {
  const [value, setValue] = useState(0);

  const animation = useSharedValue(0);
  const aimatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(300, {duration: 400})
          : withTiming(0, {duration: 400}),
    };
  });

  return (
    <View style={styles.mainContainer}>
      <Pressable
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          alignItems: 'center',
        }}
        onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          type={IconType.FontAwesome5}
          size={20}
          color={AppColors.secondaryColor}
        />
      </Pressable>
      <Text style={styles.heading}>Animated Search Bar</Text>
      <Animated.View
        style={[
          styles.animatedSearchBar,
          aimatedStyle,
          {
            paddingHorizontal: value == 0 ? 0 * widthRef : 14 * widthRef,
            borderWidth: value == 0 ? 0 : 1,
          },
        ]}>
        <TextInput placeholder="Search Item Here" style={styles.textInput} />
        <TouchableOpacity
          onPress={() => {
            if (animation.value == 1) {
              animation.value = 0;
              setValue(0);
            } else {
              animation.value = 1;
              setValue(1);
            }
          }}>
          {value == 0 ? (
            <Icon
              name="search1"
              type={IconType.AntDesign}
              size={30 * widthRef}
              color="red"
              style={{
                height: 50 * heightRef,
                width: 50 * widthRef,
                // backgroundColor: 'yellow',
              }}
            />
          ) : (
            <Icon
              name="circle-with-cross"
              type={IconType.Entypo}
              size={24 * widthRef}
              color="red"
              //   style={{height: 50 * heightRef, width: 50 * widthRef}}
            />
          )}
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20 * fontRef,
    fontWeight: 'bold',
    marginBottom: 20,
    color: AppColors.primaryColor,
  },
  animatedSearchBar: {
    height: 50 * heightRef,
    width: 300 * widthRef,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: AppColors.secondaryColor,
    flexDirection: 'row',
  },
});
