import React, {useState} from 'react';
import {
  Dimensions,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../../Assets/AppColors';
import {heightRef, widthRef} from '../../../../Config/screenSizes';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import HeaderComponent from '../../../../Components/header';

export const CarouselSlider = ({navigation}) => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const width = Dimensions.get('window').width;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 100 * heightRef,
      }}>
      <Icon
        name="arrow-left"
        type={IconType.Feather}
        size={50}
        style={{marginBottom: 10}}
        onPress={() => navigation.goBack()}
      />
      <HeaderComponent />
      <Carousel
        // loop={false}
        width={width}
        height={width}
        autoPlay={false}
        data={[1, 2, 3, 4]}
        scrollAnimationDuration={1000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};
