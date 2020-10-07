import React from 'react'
import JomeScreen from './JomeScreen'
import { createStackNavigator } from '@react-navigation/stack';
import RoomScreen from './RoomScreen';
const ChatAppStack = createStackNavigator();

export default function ChatApp() {
  return (
    <ChatAppStack.Navigator
        screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22,
        },
      }}>
      <ChatAppStack.Screen name='Home' component={JomeScreen} />
      <ChatAppStack.Screen name='Room' component={RoomScreen} options={({route}) => ({
         title:route.params.thread.name
      })}/>
    </ChatAppStack.Navigator>

  )
}
