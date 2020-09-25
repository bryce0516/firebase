import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import Geolocation from '@react-native-community/geolocation';


export default class Loading extends Component {

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>getting weather</Text>


        </View>
        
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FDF6AA",
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 50
  },
  text: {
    color:"#2c2c2c",
    fontSize: 30
  }
})