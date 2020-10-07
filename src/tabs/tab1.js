import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'
import PopToTop from '../buttons/popToTop'
export default class tab1 extends Component {
  constructor(props){
    super(props)
    console.log('tab1 prrops',this.props)
  }
  render() {
    return (
      <>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>
          Create a new chat room
        </Text>
        <Button 
        title='Close Modal'
        onPress={()=>this.props.navigation.goBack()}
        />
        
      </View>
      </>
    )
  }
}
