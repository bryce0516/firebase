import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tab1 from '../tabs/tab1'
import tab2 from '../tabs/tab2'
import Stacks from './stacks'
import tab1Stacks from './tab1Stacks'

import store from '../redux/store'

const Tab = createBottomTabNavigator();

export default class tabs extends Component {
  constructor(props){
    super(props)

    }

  render() {
    return (
        <Tab.Navigator>

          <Tab.Screen name="Sign" component={Stacks} />
          <Tab.Screen name="Chat" component={tab1Stacks} />
          <Tab.Screen name="tab2" component={tab2} />


        </Tab.Navigator>
    )
  }
}
 