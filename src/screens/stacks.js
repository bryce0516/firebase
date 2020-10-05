import React, { Component } from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import tabs from './tabs'
import IndexView from '../views/IndexView'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import LoginFail from '../views/LoginFail'
import HomeScreen from '../views/HomeScreen'
import Database from '../views/Database'
import cloudFireStore from '../views/cloudFireStore'
import Count from '../api/Count'
import Sign from '../api/Sign'

const Stack = createStackNavigator();

export default class stacks extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName="IndexView" screenOptions={{ headerShown: false}}>
          <Stack.Screen name="IndexView" component={IndexView} />
          <Stack.Screen name="tabs" component={tabs} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Database" component={Database} />
          <Stack.Screen name="LoginFail" component={LoginFail} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="cloudFireStore" component={cloudFireStore} />
          <Stack.Screen name="Count" component={Count} />
          <Stack.Screen name="Sign" component={Sign} />
        </Stack.Navigator>

    )
  }
}
