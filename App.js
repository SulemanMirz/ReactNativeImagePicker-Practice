import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import Contacts from 'react-native-contacts';

import Picker from './src/picker';

const App = () => {
  return (
    <View style={styles.container}>
      <Picker/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:5
  }
})
