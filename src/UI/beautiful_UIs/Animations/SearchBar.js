import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  ActivityIndicator,
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
import {dummyData} from '../../../Assets/RealEstateData/DumyRealEstate';

// Keep this data in seperate File
// const RealEstateData = dummyData;

const SearchBar = ({navigation}) => {
  const [value, setValue] = useState(false);
  const [data, SetData] = useState([]);
  const [search, setSearch] = useState('');
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

  useEffect(() => {
    SetData(dummyData);
  }, []);

  const FilteredData = useMemo(() => {
    console.log('memo');
    if (!search.trim()) {
      console.log('empty');
      return data;
    } else {
      console.log('searching...');
      return data.filter(data =>
        data.title.toLowerCase().includes(search.toLowerCase()),
      );
    }
  }, [search, data]);
  const handleChangeText = useCallback(text => {
    console.log('Text');
    return setSearch(text);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <View>
          <Text onPress={() => navigation.goBack()} style={styles.headerText1}>
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
            onChangeText={handleChangeText}
            value={search}
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
      {FilteredData.length === 0 ? (
        <View>
          <Text style={{textAlign: 'center', marginTop: 100 * heightRef}}>
            No property found!
          </Text>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.itemsList}
          data={FilteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.listTile}>
                {item.image ? (
                  <Image source={{uri: item.image}} style={styles.listImage} />
                ) : (
                  <ActivityIndicator color={'red'} size={24} />
                )}
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
      )}
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
    justifyContent: 'flex-end',
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
    paddingBottom: 30 * heightRef,
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
