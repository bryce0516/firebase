import React, { Component } from 'react'
import {Button} from 'react-native'
import auth from '@react-native-firebase/auth';

export default class SignOut extends Component {
  constructor(props){
    super(props)

  }
  
  signOut(props){
    auth()
    .signOut()
    .then(() => {
      alert('User signed out!')
      props.navigate('IndexView')
    });

  }
  render() {
    return (
      <Button 
        title='Sign Out'
        onPress={() => this.signOut({...this.props})}
      />
    )
  }
}
