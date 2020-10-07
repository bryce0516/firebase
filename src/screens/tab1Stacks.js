import React, { Component } from 'react'
import ChatApp from '../tab1/ChatApp'
import AddRoomScreen from '../tab1/AddRoomScreen'
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth'
import tab1 from '../tabs/tab1'
const ModalStack = createStackNavigator();

export default class tab1Stacks extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogged : false,
      user: auth().currentUser
    }
  }

  render() {
    return (
    <ModalStack.Navigator mode='modal' headerMode='none'>

      <ModalStack.Screen name='ChatApp' component={ChatApp} />
      <ModalStack.Screen name='AddRoom' component={AddRoomScreen} />


    </ModalStack.Navigator>
    )
  }
}


// function mapStateToProps(state) {

//   return {
//     counter: state.counter,
//     count : state.count,
//     isSign : state.isSign,
//     cart :state

//   }
// }

// export default (mapStateToProps)(tab1Stacks)