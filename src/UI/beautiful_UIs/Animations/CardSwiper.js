import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import { widthRef } from '../../../Config/screenSizes';

const CardSwiper = ({ navigation }) => {
  return (
  <View>

      <Swiper
        cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY', 
          'YOU', 'SMILING', 'AND', 'CONTENT', 'WITH', 'THIS', 'APP', '!', 'THANK', 'YOU',
          'FOR', 'USING', 'IT', 'TO', 'MAKE', 'YOUR', 'LIFE', 'EASIER', 'AND', 'MORE', 'PRODUCTIVE',
          '!', 'HAVE', 'FUN', 'AND', 'KEEP', 'USING', 'IT', 'FOR', 'A', 'WELL', 'LIVED', 'ONE',
          'DAY', '!', 'GOOD', 'LUCK', 'WITH', 'YOUR', 'NEW', 'ADVENTURES', 'WITH', 'THIS', 'APP',
          '!', 'AND', 'KEEP', 'TRAVELLING', 'WITH', 'LOVE', 'AND', 'PEACE', '!', 'HAVE', 'A',

        ]}
        renderCard={(card) => {
          return (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          );
        }}
        // useViewOverflow={true} // Ensure no overflow handling
        onSwiped={(cardIndex) => {
          console.log(cardIndex);
        }}
        onSwipedAll={() => {
          console.log('onSwipedAll');
        }}
        verticalSwipe
        cardIndex={0}
        backgroundColor={'transparent'} // Transparent background for swiper container
        containerStyle={styles.container}
        cardStyle={styles.card} // Only this card area will be swipeable
        stackSize={2}
        />
        <Button onPress={() => navigation.goBack()} title="Go Back" />
  </View>

  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  container: {
    height: 260, // Adjusted height slightly larger than the card
    width: 430, // Same as card width
    alignSelf: 'center',
    backgroundColor: 'red'
  },
  card: {
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'red',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 200, // Card height
    width: 300 * widthRef, // Card width
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
});
