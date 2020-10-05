import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1 from '../tabs/tab1'
import tab2 from '../tabs/tab2'
import Stacks from './stacks'

const Tab = createBottomTabNavigator();

export default class tabs extends Component {
  render() {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Sign" component={Stacks} />
          <Tab.Screen name="tab1" component={tab1} />
          <Tab.Screen name="tab2" component={tab2} />
        </Tab.Navigator>
    )
  }
}
 