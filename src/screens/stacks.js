import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import tabs from './tabs'
import IndexView from '../views/IndexView'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import LoginFail from '../views/LoginFail'
import HomeScreen from '../views/HomeScreen'
import Main from '../views/Main'

const Stack = createStackNavigator();

export default class stacks extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName="IndexView" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="IndexView" component={IndexView} />
          <Stack.Screen name="tabs" component={tabs} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="LoginFail" component={LoginFail} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>

    )
  }
}
