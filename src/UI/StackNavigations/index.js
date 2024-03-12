/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const StacksNavigations = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.Stack}>Stack Navigations</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ScreenOne")} style={styles.startButton}>
        <Text style={styles.let}>Let's Start</Text>
      </TouchableOpacity>
    </View>
  )
}

export default StacksNavigations