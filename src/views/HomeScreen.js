import React, { useState, useEffect } from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native'
import auth from '@react-native-firebase/auth';
import SignOut from './SignOut'
import SignApi from '../api/SignApi' 
import FirebaseList from './FirebaseList/FirebaseList'
export default function HomeScreen({ navigation }) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  console.log('userinfo',user)
  
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>you need Login</Text>
      </View>
    );
  }

  return (
    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome {user.email}</Text>

        <FirebaseList {...navigation} />

      <SignOut {...navigation}/>
    </View>
  );
}