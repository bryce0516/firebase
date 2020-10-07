import React, { useState, useEffect } from 'react';
import { View,Text,Button, StyleSheet, FlatList } from 'react-native';
import { List, Divider } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import FormButton from '../buttons/FormButton';
import Loading from '../buttons/Loading'
import auth from '@react-native-firebase/auth'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function JomeScreen({navigation}) {
  const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('this.is',loading)
    if(auth().currentUser){

      const unsubscribe = firestore()
      .collection('THREADS')
      .onSnapshot((querySnapshot) => {
        const threads = querySnapshot.docs.map((documentSnapshot) => {
          return {
            _id:documentSnapshot.id,
            name:'',
            ...documentSnapshot.data(),
          }
        })
        setThreads(threads);

        if (loading) {
          setLoading(false)
        }
      })
      return () => unsubscribe();
    }else {
      setLoading(false)
    }
  }, []);
  if (loading) {
    return <Loading />
  }

  return (
    <>
    <View style={{flex:0.3, justifyContent:'center', alignItems:'center'}}>
      <Text>
        this is chat Home screen
      </Text>
      <FormButton
        modeValue='contained'
        title='Add Room'
        onPress={() => navigation.navigate('AddRoom')}
      />

    </View>
    <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Room', {thread:item})}
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