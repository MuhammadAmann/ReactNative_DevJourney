/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const ScreenOne = ({navigation}) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.Back}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.Stack}>Screen One</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ScreenTwo")} style={styles.startButton}>
        <Text style={styles.let}>Screen Two</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ScreenOne