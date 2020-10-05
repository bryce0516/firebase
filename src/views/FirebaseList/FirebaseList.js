import React, { Component } from 'react'
import {TouchableOpacity, Text,View} from 'react-native'
import { TapGestureHandler } from 'react-native-gesture-handler'
export default class FirebaseList extends Component {
  constructor(props){
    super(props)

  }

  render() {

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
        <TouchableOpacity style={{padding:2}}
          onPress={() => this.props.navigate('Count',{ screen: 'Count' })}
        >
          <Text style={{fontSize:20, color:'#586fb0'}}>
            Go to Counting App
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding:2}}
          onPress={() => this.props.navigate('Sign',{ screen: 'Sign', otherParam: this.props._user})}
        >
          <Text style={{fontSize:20, color:'#586fb0'}}>
            Go to Sign
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
