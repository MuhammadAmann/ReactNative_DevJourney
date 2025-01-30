import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../../Assets/AppColors';
import {heightRef} from '../../../../Config/screenSizes';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const One = ({navigation}) => {
  const [clicked, setClicked] = useState(false);
  const animation = useSharedValue(1);
  const animationStyle = useAnimatedStyle(() => {
    const width = interpolate(animation.value, [1, 2], [100, 300]);
    const backgroundColor = interpolateColor(
      animation.value,
      [1, 2],
      ['orange', 'red'],
    );
    const borderRadius = interpolate(animation.value, [1, 2], [20, 150]);
    return {
      width: width,
      height: width,
      backgroundColor,
      borderRadius,
    };
  });
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          type={IconType.FontAwesome5}
          size={20}
          color={AppColors.secondaryColor}
        />
      </Pressable>
      <Animated.View
        style={[
          {
            height: 140,
            width: 140,
            backgroundColor: 'orange',
            marginVertical: 50 * heightRef,
          },
          animationStyle,
        ]}></Animated.View>
      <TouchableOpacity
        onPress={() => {
          if (clicked) {
            // animation.value = withSpring(1);
            animation.value = withTiming(1, {duration: 1000});
          } else {
            animation.value = withTiming(2, {duration: 1000});
          }
          setClicked(!clicked);
        }}
        style={{
          height: 50,
          width: 200,
          //   backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 2,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          // marginTop: 40,
          position: 'absolute',
          bottom: 100,
        }}>
        <Text>Animation {clicked ? 'clicked' : 'not clicked'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default One;
