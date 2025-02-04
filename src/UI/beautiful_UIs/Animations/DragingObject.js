import React from 'react';
import {Pressable, Text, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../Assets/AppColors';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const DragingObject = () => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);
  const startX = useSharedValue(0);
  const startY = useSharedValue(0);

  const GesturEvent = Gesture.Pan()
    .onBegin(e => {
      console.log('Tapped');
      startX.value = x.value;
      startY.value = y.value;
    })
    .onUpdate(e => {
      console.log('On Change');
      x.value = startX.value + e.translationX;
      y.value = startY.value + e.translationY;
    })
    .onEnd(e => {
      console.log('On End');
      x.value = withTiming(0, {duration: 500});
      y.value = withTiming(0, {duration: 500});
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: x.value,
        },
        {
          translateY: y.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <GestureDetector gesture={GesturEvent}>
          <Animated.View
            style={[
              {
                height: 120,
                width: 120,
                backgroundColor: 'blue',
              },
              animatedStyle,
            ]}
          />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};

export default DragingObject;
