import React, { useState } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Picker = () => {
  const [avatar, setAvatar] = useState(null)

  const getAvatar = () => {
    launchImageLibrary({},response => {
      if(response.didCancel){
        console.log('User Cancelled');
      }else if(response.assets){
        let imageUri =response.assets[0].uri
        setAvatar(imageUri)
        console.log(imageUri);
      }
    })
  }

  const getCamAvatar = () => {
    launchCamera({
        saveToPhotos:true
    },camResponse => {
      if(camResponse.didCancel){
        console.log('User Cancelled');
      }else if(camResponse.assets){
        let imageUri =camResponse.assets[0].uri
        setAvatar(imageUri)
        console.log(camResponse.assets);
      }
    })
  }

  return (
    <View style={styles.container}>
      <Image
        source={{uri:avatar}}
        style={styles.avatar}
      />
      <Button
        title='Add your Image'
        onPress={()=>getAvatar()}
      />
      <Text>OR</Text>
      <Button
        title='Open Camera'
        onPress={()=>getCamAvatar()}
      />

    </View>
  )
}

export default Picker

const styles = StyleSheet.create({
  avatar:{
    width:'100%',
    height:400
  },
  container:{
    flex:1,
    paddingVertical:5
  }
})
