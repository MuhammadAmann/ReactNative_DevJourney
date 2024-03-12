/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'

const ScreenTwo = ({navigation}) => {
  return (
    <View style={styles.main}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.Back}>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.Stack}>Screen Two</Text>
    
    </View>
  )
}

export default ScreenTwo