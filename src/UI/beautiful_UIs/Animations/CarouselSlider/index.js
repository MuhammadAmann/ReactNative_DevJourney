import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../../Assets/AppColors';
import {
  fontRef,
  fullWidth,
  heightRef,
  widthRef,
} from '../../../../Config/screenSizes';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import HeaderComponent from '../../../../Components/header';
import Assets from '../../../../Assets';

export const CarouselSlider = ({navigation}) => {
  const animation = useSharedValue(1);
  const [clicked, setClicked] = useState(false);
  const width = fullWidth;
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={{marginLeft: 20 * widthRef}}>
        <Icon
          name="arrow-left"
          type={IconType.Feather}
          size={50}
          style={{marginBottom: 10}}
          onPress={() => navigation.goBack()}
        />
      </TouchableOpacity>
      <HeaderComponent />
      <Carousel
        loop={false}
        width={width}
        height={width}
        autoPlay={false}
        data={[1]}
        scrollAnimationDuration={500}
        // pagingEnabled
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View style={styles.cardContainer}>
            <Image source={Assets.Profile} style={styles.profile} />

            <Text style={styles.reviewsText}> Reviews</Text>
            <Text style={styles.subTitle}>Review about the Item</Text>
            <Swiper
              cards={[
                'DO',
                'MORE',
                'OF',
                'WHAT',
                'MAKES',
                'YOU',
                'HAPPY',
                'YOU',
                'SMILING',
                'AND',
                'CONTENT',
                'WITH',
                'THIS',
                'APP',
                '!',
                'THANK',
                'YOU',
                'FOR',
                'USING',
                'IT',
                'TO',
                'MAKE',
                'YOUR',
                'LIFE',
                'EASIER',
                'AND',
                'MORE',
                'PRODUCTIVE',
                '!',
                'HAVE',
                'FUN',
                'AND',
                'KEEP',
                'USING',
                'IT',
                'FOR',
                'A',
                'WELL',
                'LIVED',
                'ONE',
                'DAY',
              ]}
              renderCard={({item, index}) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.text}>Text</Text>
                  </View>
                );
              }}
              // useViewOverflow={true} // Ensure no overflow handling
              onSwiped={cardIndex => {
                console.log(cardIndex);
              }}
              onSwipedAll={() => {
                console.log('onSwipedAll');
              }}
              verticalSwipe
              cardIndex={0}
              backgroundColor={'transparent'} // Transparent background for swiper container
              containerStyle={styles.container}
              cardStyle={styles.card2} // Only this card area will be swipeable
              stackSize={2}
              stackScale={10}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // marginTop: 100 * heightRef,
  },
  profile: {
    width: 160,
    height: 160,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  cardContainer: {
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 24 * widthRef,
    alignItems: 'center',
    // padding: 20 * widthRef,
    borderRadius: 20,
    borderColor: 'rgba(107, 78, 230, 0.4)',
    // backgroundColor: 'red',
    height: '100%',
  },
  reviewsText: {
    fontSize: 24 * widthRef,
    color: 'orange',
    marginTop: 10 * heightRef,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 16 * widthRef,
    color: '#707070',
    marginTop: 10 * heightRef,
    fontWeight: '500',
  },
  container: {
    height: 260, // Adjusted height slightly larger than the card
    // backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    top: 180 * heightRef,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
    // justifyContent: 'center',
    backgroundColor: 'white',
    height: 100 * heightRef, // Card height
    width: 290 * widthRef, // Card width
    padding: 10 * widthRef,
    // position: 'absolute',
    // bottom: 50,
  },
  card2: {
    // borderRadius: 20,
    // borderWidth: 1,
    // borderColor: 'yellow',
    // justifyContent: 'center',
    // backgroundColor: 'yellow',
    height: 100 * heightRef, // Card height
    width: 300 * widthRef, // Card width
    // padding: 10 * widthRef
    // position: 'absolute',
    // bottom: 50,
  },
  text: {
    fontSize: 14 * fontRef,
    backgroundColor: 'transparent',
  },
});
