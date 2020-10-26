import React, { useEffect, useContext } from 'react';
import { View,Text,Button, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FormButton from '../buttons/FormButton';
import Loading from '../buttons/Loading'
import auth from '@react-native-firebase/auth'
import {Context as ChatContext} from '../context/ChatContext'

const JomeScreen = ({navigation}) => {
  const { state, showchatroom } = useContext(ChatContext)

  useEffect(() => {
    showchatroom()
    const listner = navigation.addListener('focus', () => {
      showchatroom()
    })  
    return listner
  }, [])

  return (
    <>
      <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>
        <Text>
          this is chat Jome screen
        </Text>
          <FormButton
            modeValue='contained'
            title='Add Room'
            onPress={() => navigation.navigate("addroom")}
          />
      </View>
      <View style={styles.container}>


        <FlatList
          data={state.data}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <Divider />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('room', {thread:item})}
            >
              <List.Item
                title={item.name}
                description='Item description'
                titleNumberOfLines={1}
                titleStyle={styles.listTitle}
                descriptionStyle={styles.listDescription}
                descriptionNumberOfLines={1}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 0.7,
  },
  listTitle: {
    fontSize: 22,
  },
  listDescription: {
    fontSize: 16,
  },
});

export default JomeScreen