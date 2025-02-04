import React, {useCallback} from 'react';
import {Image, ImageBackground, Pressable, Text, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../Assets/AppColors';
import {
  fontRef,
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../Config/screenSizes';
import Assets from '../../../Assets';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const IntsgramLike = () => {
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, inFinished => {
      if (inFinished) {
        scale.value = withDelay(200, withSpring(0));
      }
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: Math.max(scale.value, 0),
        },
        // {
        //   scaleY: Math.max(scale.value, 0),
        // },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{backgroundColor: '#fff', flex: 1}}>
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
        <Text
          style={{
            fontSize: 24 * fontRef,
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Instagram Like Animation
        </Text>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 30 * heightRef,
              alignItems: 'center',
              paddingHorizontal: 20 * widthRef,
              paddingBottom: 10 * heightRef,
            }}>
            <Icon
              name="instagram"
              type={IconType.Fontisto}
              size={32}
              color={AppColors.primaryColor}
            />
            <Text
              style={{
                fontSize: 16 * fontRef,
                fontWeight: '600',
                marginLeft: 10,
              }}>
              @example_user
            </Text>
          </View>
          <TapGestureHandler
            maxDelayMs={300}
            numberOfTaps={2}
            onActivated={doubleTap}>
            <Animated.View>
              <ImageBackground
                source={Assets.Wallpaper}
                style={{
                  width: fullWidth,
                  height: fullHeight / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <AnimatedImage
                  source={Assets.Heart}
                  style={[
                    {
                      height: 100 * heightRef,
                      width: 100 * widthRef,
                      tintColor: 'red',
                    },
                    animatedStyle,
                  ]}
                />
              </ImageBackground>
            </Animated.View>
          </TapGestureHandler>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default IntsgramLike;
