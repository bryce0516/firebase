import React, { Component } from 'react'
import {View, Text} from 'react-native'
export default class LoginFail extends Component {
  render() {
    return (
<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
  <Text>
    Fail to login..
  </Text>
  <Text>
    please go back to indexview page and do login
  </Text>

</View>
    )
  }
}
