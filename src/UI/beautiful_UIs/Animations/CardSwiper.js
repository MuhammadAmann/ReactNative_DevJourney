import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Swiper from 'react-native-deck-swiper';
import {fontRef, heightRef, widthRef} from '../../../Config/screenSizes';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import HeaderComponent from '../../../Components/header';
import Assets from '../../../Assets';
import {AppColors} from '../../../Assets/AppColors';

const data = [
  {
    name: 'The Gourmet Spot',
    image:
      'https://plus.unsplash.com/premium_photo-1670984939096-f3cfd48c7408?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Amazing atmosphere and delicious food. The staff was friendly and attentive. Highly recommend for special dinners.',
      'The desserts were absolutely divine. Perfect spot for romantic dates with elegant interior and warm lighting.',
      'Service was prompt, and every dish exceeded expectations. Will definitely return for another amazing dining experience.',
      'Loved the fusion flavors and creative presentation. The chef clearly knows how to impress with every bite.',
      'A hidden gem with top-notch service and a delightful menu. The pasta was cooked to perfection.',
      'Ideal for family dinners or celebrations. The menu offers something for everyone, and the ambience is relaxing.',
    ],
  },
  {
    name: 'Urban Bites',
    image:
      'https://images.unsplash.com/photo-1568861743148-db325d9383bd?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Great coffee and cozy vibe. Perfect place to relax with friends or catch up on work.',
      'Their sandwiches are fresh and flavorful. The latte art was impressive and made my day even better.',
      'Best brunch spot in the city! The avocado toast and pancakes were simply outstanding.',
      'A warm, welcoming place with exceptional pastries. Ideal for afternoon breaks or casual meetups.',
      'Friendly staff and great music. Loved the outdoor seating area for a peaceful coffee experience.',
      'If you’re a coffee lover, this is the spot. Great brews, chill environment, and good service.',
    ],
  },
  {
    name: 'Sunset Grill',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'The steaks were perfectly cooked and seasoned. Beautiful sunset view from the terrace.',
      'Best place for grilled seafood. The ambiance makes it even better during sunset hours.',
      'The ribs were juicy and tender. Loved the outdoor dining experience with scenic views.',
      'Highly recommend the barbecue platter. The sauces and sides paired perfectly with the grilled meats.',
      'Service was quick, and the steak melted in my mouth. Will be back for sure!',
      'Perfect location for date nights. The live music performance added to a wonderful dining experience.',
    ],
  },
  {
    name: "Ocean's Delight",
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Fresh seafood with a stunning ocean view. The lobster was absolutely divine and perfectly prepared.',
      'Great variety of seafood options. The crab cakes were crispy and flavorful, highly recommend them!',
      'The shrimp pasta was cooked perfectly. Perfect place for seafood lovers with a relaxing view.',
      'Loved the seafood platter. The freshness of the ingredients was evident in every bite.',
      'Service was professional and the oysters were top-quality. The view makes the experience even better.',
      'This place serves the best seafood in town. The grilled salmon is a must-try for sure!',
    ],
  },
  {
    name: 'Garden Bliss Café',
    image:
      'https://images.unsplash.com/photo-1559339236-6eeb80581af0?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Love the garden-themed interior. The desserts were mouthwatering and coffee was rich and aromatic.',
      'Perfect for peaceful afternoons. The herbal teas and cakes made my day more refreshing.',
      'The green surroundings make it the ideal spot for reading or quiet conversations with friends.',
      "Try the matcha latte; it's heavenly. The garden seating provides a peaceful escape from the city.",
      'A relaxing environment with fresh pastries and delicious brews. My go-to spot for unwinding weekends.',
      'They serve the best lemon tart in the city. Highly recommend for tea lovers and dessert fans.',
    ],
  },
  {
    name: 'Spice Route',
    image:
      'https://images.unsplash.com/photo-1577056922428-a511301a562d?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Authentic flavors with a modern twist. The spicy chicken curry was incredible and bursting with flavor.',
      'Love the variety of spices used. Every bite was flavorful, and the naan was soft and warm.',
      'The masala tea was aromatic and paired well with their signature biryani. An absolute delight!',
      'Perfect spot for spice lovers. The flavors were rich without being overpowering. Highly recommend the lamb curry.',
      'The chef knows how to balance flavors perfectly. Each dish was unique and well-prepared.',
      'If you love bold flavors, this place is a must-visit. The spice levels were perfect!',
    ],
  },
  {
    name: 'Mountain View Diner',
    image:
      'https://images.unsplash.com/photo-1616362214157-f3bbe733683e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    reviewcontent: [
      'Breathtaking mountain views paired with delicious comfort food. The pancakes and hot chocolate were highlights.',
      'A classic diner experience with a view. The burgers were juicy, and fries perfectly crispy.',
      'The scenic drive was worth it. Loved the homestyle meals and warm service from the staff.',
      'Perfect stop after a long hike. The coffee was strong, and breakfast platters were filling and tasty.',
      'The best spot for mountain lovers. Delicious homemade pies and friendly staff made our visit special.',
      'Warm, comforting meals with a view that’s hard to beat. Loved the cozy ambiance and friendly service.',
    ],
  },
];

const reviews = [
  'Absolutely loved this app! Super easy to use, intuitive design, and has everything I needed for daily tasks.',
  'Great experience overall. Few minor bugs but excellent support team. Looking forward to more updates and new features.',
  'Decent functionality but lacks some customization options. Works well for basic needs, hoping future updates add improvements.',
  'Perfect app! Fast, reliable, and user-friendly. Makes my day productive and helps me manage tasks effortlessly.',
  'App is okay but needs more features. The user interface could be more engaging. Hoping for improvements soon.',
  'Very useful and practical. The interface is clean and simple. Could use more themes and notification options though.',
  'It works well for the most part, but performance slows down occasionally. Needs optimization for smoother experience.',
  'Fantastic! This app truly makes life easier. Highly recommend it for anyone looking for seamless task management.',
];

const CardSwiper = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = data[currentIndex];
  const [reviewIndex, setReviewIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 1);
    setReviewIndex(0);
  };
  const handlePrev = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  console.log('index: ' + currentIndex);
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{marginLeft: 20 * widthRef}}>
        <Icon
          name="arrow-left"
          type={IconType.Feather}
          size={50}
          style={{marginBottom: 10}}
        />
      </TouchableOpacity>
      <Text
        style={{
          marginVertical: 20 * heightRef,
          fontSize: 24 * fontRef,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        Restaurants Reviews
      </Text>
      <View style={styles.cardContainer}>
        {currentItem.image ? (
          <Image source={{uri: currentItem.image}} style={styles.profile} />
        ) : (
          <ActivityIndicator size={30} color="gray" />
        )}
        <Text style={styles.reviewsText}> Review</Text>
        <Text style={styles.subTitle}>{currentItem.name}</Text>
        <Text numberOfLines={3} style={styles.reviewBody}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </Text>
        <Swiper
          cards={currentItem.reviewcontent}
          cardIndex={reviewIndex}
          key={currentIndex}
          renderCard={(card, index) => (
            <View style={styles.card}>
              <Text>⭐⭐⭐⭐⭐</Text>
              <Text numberOfLines={3} style={styles.text}>
                {card}
              </Text>
            </View>
          )}
          onSwiped={cardIndex => {
            console.log('Swiped card index:', cardIndex);
          }}
          onSwipedAll={() => setReviewIndex(0)}
          verticalSwipe={false}
          backgroundColor={'transparent'}
          containerStyle={styles.container}
          cardStyle={styles.card2}
          disableTopSwipe={false}
          disableBottomSwipe={false}
          stackSize={2} // Only one card visible
          stackScale={0} // No scaling for extra cards
          stackSeparation={4}
        />
      </View>

      <View
        style={{
          marginTop: 50 * heightRef,
          flexDirection: 'row',
          width: '70%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={handlePrev}>
          <Icon
            name="leftcircle"
            type={IconType.AntDesign}
            size={50 * heightRef}
            color={AppColors.primaryColor}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNext}>
          <Icon
            name="rightcircle"
            type={IconType.AntDesign}
            size={50 * heightRef}
            color={AppColors.primaryColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardSwiper;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profile: {
    width: 160,
    height: 160,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  cardContainer: {
    // flex: 1,
    borderWidth: 1,
    marginHorizontal: 24 * widthRef,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(107, 78, 230, 0.4)',
    height: '60%',
    padding: 20 * widthRef,
  },
  reviewsText: {
    fontSize: 24 * widthRef,
    color: 'orange',
    marginTop: 10 * heightRef,
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 18 * widthRef,
    color: '#121212',
    marginTop: 10 * heightRef,
    fontWeight: '600',
  },
  container: {
    height: 140,
    position: 'absolute',
    bottom: 0,
    top: 276 * heightRef,
    right: 50 * heightRef,
    left: 20 * widthRef,
    // backgroundColor: 'red',
  },
  reviewBody: {
    marginTop: 10 * heightRef,
    marginBottom: 20 * heightRef,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 20 * heightRef,
    color: '#707070',
    fontSize: 14 * fontRef,
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    height: 100 * heightRef,
    width: 250 * widthRef,
    paddingVertical: 14 * widthRef,
    paddingHorizontal: 20 * widthRef,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  card2: {
    height: 100 * heightRef,
    width: 300 * widthRef,
  },
  text: {
    marginTop: 4 * heightRef,
    fontSize: 12 * fontRef,
  },
});
