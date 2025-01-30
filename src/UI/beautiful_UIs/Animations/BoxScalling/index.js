import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import HeaderComponent from '../../../../Components/header';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function BoxScaling({navigation}) {
  const [expanded, setExpanded] = useState(false);
  const animation = useSharedValue(80); // Initial collapsed height
  const translateY = useSharedValue(0); // Moves box upwards when expanding

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animation.value, // Dynamic height based on state
      transform: [{translateY: translateY.value}],
    };
  });

  const toggleBox = () => {
    if (expanded) {
      animation.value = withTiming(80, {duration: 1000});
      translateY.value = withTiming(0, {duration: 1000});
    } else {
      animation.value = withTiming(150, {duration: 1000}); // Adjust based on content
      translateY.value = withTiming(-40, {duration: 1000}); // Moves up slightly
    }
    setExpanded(!expanded);
  };

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        type={IconType.Feather}
        size={50}
        style={{marginBottom: 10}}
        onPress={() => navigation.goBack()}
      />
      <HeaderComponent />
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
          width: '100%',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={toggleBox}>
          <Animated.View style={[styles.box, animatedStyle]}>
            <Text numberOfLines={expanded ? undefined : 2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Text>
          </Animated.View>
        </TouchableOpacity>
        <View style={{marginTop: 50}}>
          <Text>Press on Box to expand/collapse</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    paddingTop: 50,
  },
  box: {
    width: '90%',
    backgroundColor: '#ffe5d9',
    borderRadius: 8,
    padding: 16,
    alignSelf: 'center',
    // marginTop: 20,
    // overflow: 'hidden',
    position: 'absolute', // Ensures it moves upwards
    bottom: 0, // Aligns at bottom before animation
  },
});

export default BoxScaling;
