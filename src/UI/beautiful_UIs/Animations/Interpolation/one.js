import React from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {AppColors} from '../../../../Assets/AppColors';
import {heightRef} from '../../../../Config/screenSizes';

const One = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Icon
          name="chevron-left"
          type={IconType.FontAwesome5}
          size={20}
          color={AppColors.secondaryColor}
        />
      </Pressable>
      <View
        style={{
          height: 140,
          width: 140,
          backgroundColor: 'orange',
          marginVertical: 50 * heightRef,
        }}></View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 200,
          //   backgroundColor: 'green',
          borderColor: 'green',
          borderWidth: 2,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}>
        <Text>Start Animation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default One;
