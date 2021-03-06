import React, { useState } from 'react';
import { View, StyleSheet,TextInput } from 'react-native';
import { IconButton, Title } from 'react-native-paper';
import FormButton from '../buttons/FormButton'
import FormInput from '../buttons/FormInput'
import firestore from '@react-native-firebase/firestore';

export default function AddRoomScreen({navigation}) {
  const [roomName, setRoomName] = useState('');
  function handleButtonPress() {
    if(roomName.length > 0) {
      firestore()
        .collection('THREADS')
        .add({
          name:roomName
        })
        .then(() => {
          
          navigation.navigate('jome')
        }).catch(error => {
          alert('YOU DID NOT SIGN IN THIS APPLICATION')
          navigation.navigate('IndexView')
          reject(error)
        })
    }
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.closeButtonContainer}>
        <IconButton
          icon='close-circle'
          size={36}
          color='#6646ee'
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.innerContainer}>
        <Title style={styles.title}>Create a new chat room</Title>
        <FormInput
          labelName='Room Name'
          value={roomName}
          onChangeText={(text) => setRoomName(text)}
          clearButtonMode='while-editing'
        />
        <FormButton
          title='Create'
          modeValue='contained'
          labelStyle={styles.buttonLabel}
          onPress={() => handleButtonPress()}
          disabled={roomName.length === 0}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  closeButtonContainer: {
    position: 'absolute',
    top: 30,
    right: 0,
    zIndex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonLabel: {
    fontSize: 22,
  },
});
