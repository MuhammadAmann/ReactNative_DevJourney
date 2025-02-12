import React, {useState} from 'react';
import {
  FlatList,
  Image,
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

const dummyData = [
  {
    id: 0,
    title: 'Rustic Bungalow',
    description:
      'Located in a prime location with easy access to public transport...',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 1,
    title: 'High-Rise Apartment',
    description: 'An affordable home in a growing and desirable community...',
    image:
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Family-Friendly Duplex',
    description: 'An exclusive property in a secure and serene environment...',
    image:
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Family-Friendly Duplex',
    description:
      'Perfect for families, with spacious rooms and a private yard...',
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Suburban Townhouse',
    description:
      'Located in a prime location with easy access to public transport...',
    image:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Classic Brownstone',
    description: 'A well-maintained home with a spacious backyard and pool...',
    image:
      'https://images.unsplash.com/photo-1593698054589-019f74f36a3d?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Elegant Penthouse',
    description: 'Luxury meets convenience in this high-end property...',
    image:
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 7,
    title: 'Minimalist Home',
    description:
      'Designed for contemporary living with top-notch facilities...',
    image:
      'https://images.unsplash.com/photo-1600607683853-0673a6418721?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 8,
    title: 'Investment Property',
    description: 'Move-in ready with high-end appliances and stylish decor...',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 9,
    title: 'Cozy Studio',
    description:
      'Perfectly situated near schools, parks, and shopping centers...',
    image:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 10,
    title: 'Mountain Cabin',
    description:
      'An ideal investment opportunity with high rental potential...',
    image:
      'https://images.unsplash.com/photo-1598228723793-52759e82b334?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 11,
    title: 'Lakefront Property',
    description:
      'Enjoy a peaceful environment with breathtaking nature views...',
    image:
      'https://images.unsplash.com/photo-1572307480813-6ae928b6da87?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 12,
    title: 'Spacious Villa',
    description: 'A beautiful home with stunning views and modern amenities...',
    image:
      'https://images.unsplash.com/photo-1600585154154-18017b6470b9?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 13,
    title: 'City Skyline View',
    description: 'Boasts a spectacular view and top-tier craftsmanship...',
    image:
      'https://images.unsplash.com/photo-1592595896551-12b38a35fc3d?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 14,
    title: 'Beachfront House',
    description: 'A dream home for those who love comfort and style...',
    image:
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd9?q=80&w=2940&auto=format&fit=crop',
  },
];

const SearchBar = ({navigation}) => {
  const [value, setValue] = useState(false);
  const animation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        animation.value == 1
          ? withTiming(280 * widthRef, {duration: 700})
          : withTiming(0, {duration: 700}),
      paddingHorizontal:
        animation.value == 1
          ? withTiming(14 * widthRef, {duration: 800})
          : withTiming(0, {duration: 500}),
      paddingVertical:
        animation.value == 1
          ? withTiming(10 * heightRef, {duration: 800})
          : withTiming(0, {duration: 500}),
      marginRight:
        animation.value == 1
          ? withTiming(8 * widthRef, {duration: 700})
          : withTiming(0, {duration: 500}),
    };
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText1}>
            Welcome Back{' '}
            <Icon
              color="#dfb088"
              name="waving-hand"
              type={IconType.MaterialIcons}
              style={styles.handIcon}
            />
          </Text>
          <Text style={styles.headerText2}>Property House</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.fvrtView}>
            <Icon name="bookmark-outline" type={IconType.Ionicons} />
          </View>
          <View style={styles.fvrtView}>
            <Icon name="notifications-outline" type={IconType.Ionicons} />
          </View>
        </View>
      </View>
      <View style={styles.searchBarView}>
        <Animated.View style={[styles.searchBar, animatedStyle]}>
          <TextInput
            placeholder="Search for your property..."
            style={styles.textInput}
            editable={value ? true : false}
          />
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            value ? (animation.value = 0) : (animation.value = 1);
            setValue(!value);
          }}
          style={styles.searchIconView}>
          <Icon
            name={value ? 'close' : 'search1'}
            type={IconType.AntDesign}
            size={20 * widthRef}
            color="#e88331"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        contentContainerStyle={styles.itemsList}
        data={dummyData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return (
            <View style={styles.listTile}>
              <Image source={{uri: item.image}} style={styles.listImage} />
              <View style={{marginLeft: 10 * widthRef, width: 240}}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.des}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.backgroundColor,
  },
  header: {
    height: 60 * heightRef,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24 * widthRef,
    paddingVertical: 8 * heightRef,
    flexDirection: 'row',
  },
  headerText1: {
    fontSize: 14 * fontRef,
    fontWeight: '400',
    color: '#393c3e',
    marginBottom: 2 * heightRef,
  },
  headerText2: {
    fontSize: 20 * fontRef,
    fontWeight: '600',
    color: '#e88331',
  },
  searchBarView: {
    marginBottom: 10 * heightRef,
    paddingHorizontal: 20 * widthRef,
    paddingVertical: 10 * heightRef,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconView: {
    backgroundColor: 'rgba(107, 78, 230, 0.1)',
    height: 50 * heightRef,
    width: 50 * widthRef,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    color: 'black',
    backgroundColor: 'rgba(107, 78, 230, 0.1)',
    width: 280 * widthRef,
    height: 50 * heightRef,
    borderRadius: 40,
    justifyContent: 'center',
  },
  textInput: {
    fontSize: 16 * fontRef,
    paddingHorizontal: 6 * widthRef,
  },
  fvrtView: {
    backgroundColor: 'rgba(107, 78, 230, 0.1)',
    height: 40 * heightRef,
    width: 40 * widthRef,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8 * widthRef,
  },
  itemsList: {
    paddingHorizontal: 24 * widthRef,
    paddingVertical: 20 * heightRef,
  },
  listTile: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10 * heightRef,
    paddingVertical: 8 * heightRef,
    paddingHorizontal: 8 * widthRef,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(207, 58, 20, 0.5)',
  },
  listImage: {
    width: 60 * widthRef,
    height: 60 * heightRef,
    borderRadius: 6,
  },
  des: {
    fontSize: 12 * fontRef,
    color: '#888888',
  },
  itemTitle: {
    fontSize: 18 * fontRef,
    fontWeight: '600',
    color: '#121212',
    marginBottom: 4,
  },
});
