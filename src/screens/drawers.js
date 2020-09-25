import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import drawer1 from '../drawers/drawer1'
import drawer2 from '../drawers/drawer2'
import tabs from './tabs'

const Drawer = createDrawerNavigator();

export default class drawers extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="tabs" component={tabs} />
          <Drawer.Screen name="drawer1" component={drawer1} />
          <Drawer.Screen name="drawer2" component={drawer2} />
        </Drawer.Navigator>
      </NavigationContainer>

    )
  }
}
