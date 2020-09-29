import React, { Component } from 'react'
import {TouchableOpacity, Text,View} from 'react-native'
export default class FirebaseList extends Component {
  constructor(props){
    super(props)

  }
  render() {
    console.log('this.',this.props)
    return (
      <View style={{padding:10}}>
        <TouchableOpacity style={{padding:2}}
          onPress={() => this.props.navigate('Database',{ screen: 'Database' })}
        >
          <Text style={{fontSize:20, color:'#586fb0'}}>
            Go to Database
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:2}}
          onPress={() => this.props.navigate('cloudFireStore',{ screen: 'cloudFireStore' })}
        >
          <Text style={{fontSize:20, color:'#586fb0'}}>
            Go to cloudFireStore
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
