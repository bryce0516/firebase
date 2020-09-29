import React, { Component } from 'react'
import {View, Text,SafeAreaView ,TouchableOpacity, FlatList} from 'react-native'
import firestore from '@react-native-firebase/firestore';

const userCollection = firestore().collection('Users')

export default class cloudFireStore extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : [],
      Name : '',
      Position : '',
      Location : '',
      createdData :'' ,
    }
  }
  componentDidMount(){
   this.fetchData()
  }

  addUser(){
    const dataToState = {
      Name:'happy', 
      Position: 'Software Dev.',
      Location: new firestore.GeoPoint(53.483959, -2.244644),
      createdData: new Date().getTime()
    }
    this.setState({
      Name: dataToState.Name,
      Position: dataToState.Position,
      Location: dataToState.Location,
      createdData: dataToState.createdData
    },() => userCollection.doc(`${this.state.createdData}`)
    .set({
      Name:this.state.Name, 
      Position: this.state.Position,
      Location: this.state.Location,
      createdData: this.state.createdData
    }))
    this.fetchData()
  }
  
  deleteUser() {
    if (this.state.data.length >= 1) {
      userCollection.doc(`${this.state.data[0].createdData}`)
      .delete()
      .then(() => {})
      .catch(() => {})
      console.log(this.state.data.length)
    }
    this.fetchData()
  }

  // renderItems(){
  //   userCollection.onSnapshot(documentSnapshot => {
  //     console.log(documentSnapshot.docs,'number;',documentSnapshot.size);
  //   })
  // }

  fetchData(){
     userCollection.get()
     .then(snapshot => {
      let arr = []
      snapshot.forEach(key => 
        arr.push(key.data()))
      this.setState({
        data : arr,
      })
     })
  }

  list(item){
    return(
        <View style={{height:100, borderWidth: 0.3,justifyContent:'flex-start',flexDirection:'row',alignItems:'center', marginVertical:3}}>
          <View style={{flexDirection:'column', paddingHorizontal:10 }}>
            <View>
              <Text style={{fontSize: 15}}>name: {item.Name}</Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>position: {item.Position}</Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>Location: {item.Location.latitude}</Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>createdData: {item.createdData}</Text>
            </View>
          </View>
        </View>
    )
  }

  render() {
    const data = this.state.data

    return (
      <SafeAreaView style={{flex:1, alignItems:'center',width:'100%',justifyContent:'center'}}>
        <View style={{flex:0.05,flexDirection:'row',width:'100%',height:'100%',alignItems:'center'}}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height:30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:28}}>Cloud Firestore</Text>
            </View>
          <View style={{ width:'20%', alignItems:'center' }}>
            <TouchableOpacity 
            onPress={() => this.props.navigation.goBack()}>
              <Text style={{color:"#841584", fontSize:15}} >go back</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex:0.1,flexDirection:'row', alignItems:'center'}}>
          <View style={{flexDirection:'row',width:'20%'}}>
            <TouchableOpacity
              onPress={() => this.deleteUser()}
            >
              <Text style={{color:"#841584", fontSize:15}}>delete data</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',width:'30%'}}>
            <TouchableOpacity
              onPress={() => this.addUser()}
            >
              <Text style={{color:"#841584", fontSize:15}}>Create data</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={{flex:0.8}}>
          {data != null 
            ?
            <FlatList
              data={data}
              renderItem={({item}) => this.list(item)}
              keyExtractor={item => item.Id}
            />
            :
            <Text>there is nothing in here</Text>}

        </View>
      </SafeAreaView>
    )
  }
}
