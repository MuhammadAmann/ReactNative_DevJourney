import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../../Assets/AppColors';
import {heightRef, widthRef} from '../../../../Config/screenSizes';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export const Basic = ({navigation}) => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // {
        //   translateX: animation.value,
        // },
        // If will implement both X, Y directions it will mocing in cross
        // {
        //   translateY: animation.value,
        // },

        // For rotating
        // {
        //   rotate: animation.value + 'deg',
        // },

        // For Scaling Item
        {
          scale: animation.value,
        },
      ],
    };
  });
  return (
    <View style={{flex: 1, alignItems: 'center', marginTop: 100 * heightRef}}>
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
            backgroundColor: 'green',
            marginVertical: 50 * heightRef,
          },
          animatedStyle,
        ]}></Animated.View>
      <ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            padding: 14 * widthRef,
          }}
          onPress={() => {
            animation.value = 100;
          }}>
          <Text style={{color: 'white'}}>Start Animation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            //   backgroundColor: 'green',
            backgroundColor: 'orange',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            padding: 14 * widthRef,
          }}
          onPress={() => {
            clicked
              ? (animation.value = withSpring(100))
              : (animation.value = withSpring(-100));

            setClicked(!clicked);
          }}>
          <Text style={{color: 'white'}}>Animation With Timing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'red',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            padding: 14 * widthRef,
          }}
          onPress={() => {
            clicked
              ? (animation.value = withTiming(180, {duration: 2000}))
              : (animation.value = withTiming(0, {duration: 1000}));

            setClicked(!clicked);
          }}>
          <Text style={{color: 'white'}}>Animation With Timing</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
            padding: 14 * widthRef,
          }}
          onPress={() => {
            clicked
              ? (animation.value = withTiming(1, {duration: 2000}))
              : (animation.value = withTiming(0.5, {duration: 1000}));

            setClicked(!clicked);
          }}>
          <Text style={{color: 'white'}}>Animation With Scaling</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
