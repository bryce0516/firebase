import React, { Component } from 'react'
import Auth from '@react-native-firebase/auth'

export const SignUpUser = (email, password) => {
  return new Promise(function(resolve, reject) {
    Auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        resolve('Sign up Successfuly')
        this.props.navigation.navigate('Home',{ screen: 'Home' })
      })
      .catch(error => {
        reject(error)
      })
  })
}