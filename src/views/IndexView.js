import React, { Component } from 'react'
import { View, StyleSheet,Button } from 'react-native';

import Main from './Main'
import 'react-native-gesture-handler';
import SignApple from './SignApple';
import SignWithPhone from './SignWithPhone'
import HomeScreen from './HomeScreen';
import firebase from '@react-native-firebase/app'
export default class IndexView extends Component {
  constructor(props){
    super(props)
    this.state = {
      isSignedIn :false
    }
  }
  render() {

    return (
      <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
      {
        this.state.isSignedIn ? 
      <HomeScreen />
      :
      <>
        <View style={{alignItems:'center',paddingVertical:20}}>
          <Button title='Sign In' onPress={() => this.props.navigation.navigate('SignIn',{ screen: 'SignIn' })} />
        </View>
        <View style={{alignItems:'center',paddingVertical:20}}>
          <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp',{ screen: 'SignUp' })} />
        </View>
        <View style={{alignItems:'center',paddingVertical:20}} >
        <SignApple {...this.props}/>
        </View>
      </>
      }
      </View>

    )
  }
}

