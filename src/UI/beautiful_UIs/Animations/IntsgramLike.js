import React, {useCallback, useState} from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';

const IntsgramLike = ({navigation}) => {
  const [like, setLike] = useState(false);
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const scale = useSharedValue(0);
  const translateY = useSharedValue(0);
  const opacity = useSharedValue(1);
  const doubleTap = useCallback(() => {
    setLike(true);
    (scale.value = 0),
      (translateY.value = 0),
      (opacity.value = 1),
      (scale.value = withSpring(1, undefined, inFinished => {
        if (inFinished) {
          translateY.value = withDelay(100, withTiming(-150, {duration: 800}));
          scale.value = withDelay(
            200,
            withTiming(0, {
              duration: 800,
            }),
          );
          opacity.value = withDelay(250, withTiming(0, {duration: 500}));
        }
      }));
  }, [like]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [
        {
          translateY: translateY.value,
        },
        {
          scale: Math.max(scale.value, 0),
        },
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
        <View
          style={{
            width: '100%',
            // backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 200,
              height: 70,
            }}
            source={Assets.Instagram}
          />
          <Text
            style={{
              fontSize: 24 * fontRef,
              fontWeight: '600',
            }}>
            Like Animation
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}>
          <View style={styles.userDetail}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image style={styles.profile} source={Assets.Profile} />
              <Text
                style={{
                  fontSize: 16 * fontRef,
                  fontWeight: '600',
                  marginLeft: 10,
                }}>
                user_name
              </Text>
            </View>
            <Icon name="ellipsis-horizontal" type={IconType.Ionicons} />
          </View>
          <TapGestureHandler
            maxDelayMs={100}
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
          <View style={styles.likeDetail}>
            <View style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
              <TapGestureHandler
                numberOfTaps={1}
                maxDelayMs={100}
                onActivated={() => {
                  setLike(!like), doubleTap;
                }}>
                <View
                // onPress={() => {
                //   doubleTap;
                //   setLike(!like);
                // }}
                >
                  <Icon
                    name={like ? 'heart' : 'hearto'}
                    type={IconType.AntDesign}
                    size={24 * heightRef}
                    color={like ? 'red' : AppColors.primaryColor}
                  />
                </View>
              </TapGestureHandler>
              <Icon
                name="comment-o"
                type={IconType.FontAwesome}
                size={26 * heightRef}
                color={AppColors.primaryColor}
                style={styles.comment}
              />
            </View>
            <Icon
              name="bookmark"
              type={IconType.Octicons}
              size={24 * heightRef}
            />
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default IntsgramLike;

const styles = StyleSheet.create({
  profile: {
    width: 45,
    height: 45,
    borderRadius: 30 * widthRef,
    borderWidth: 2,
    borderColor: 'white',
    overflow: 'hidden',
    marginLeft: 10,
    // marginTop: 10,
    // marginBottom: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDetail: {
    flexDirection: 'row',
    marginTop: 20 * heightRef,
    paddingTop: 10 * heightRef,
    alignItems: 'center',
    borderTopColor: 'gray',
    borderTopWidth: 0.2,
    paddingBottom: 6 * heightRef,
    justifyContent: 'space-between',
    paddingLeft: 4,
    paddingRight: 18 * widthRef,
  },
  likeDetail: {
    flexDirection: 'row',
    paddingTop: 10 * heightRef,
    alignItems: 'center',

    paddingBottom: 6 * heightRef,
    justifyContent: 'space-between',
    paddingHorizontal: 14 * widthRef,
    // backgroundColor: 'red',
  },
  comment: {
    transform: [{rotateY: '-210deg'}],
  },
});
