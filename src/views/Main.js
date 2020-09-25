import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList,Button, TouchableOpacity, TextInput} from 'react-native'
// import {
//   Container,
//   Content,
//   Header,
//   Body,
//   Title,
//   ListItem,
//   Text
// } from 'native-base'

import database from '@react-native-firebase/database';

export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      position:'',
      Id: null,
      items : []
      
    }
  }

  componentDidMount(){
    this.renderItems();
  }

  renderItems(){
    database()
      .ref('/items')
      .on('value', snapshot => {
        let arr = []
        if(snapshot.val() != null){
          Object.values(snapshot.val()).map(function(key) {
            arr.push(key)
          })
        }
        this.setState({items : arr})
      })
    return () => {
      console.log('renderItems',this.state.items)
      database()
        .ref('items')
        .off('value', onValueChange)
    }

  }

  saveItems(){
    let key;

    this.state.Id = database()
    .ref()
    .push().key;

    let dataToSave = {
      Id: this.state.Id,
      Name: this.state.name,
      Position: this.state.position
    };

    database()
      .ref(`items/${dataToSave.Id}`)
      .update(dataToSave)
      .then(() => {
        console.log('Data updated')
      })
      .catch(err => {
        console.log(err)
      })
  }

  editItems(){
    alert('edit')
  }

  deleteItems(){
    alert('delete')
  }

  deleteAllItems(){
    database()
      .ref('items')
      .remove()
      .then(() => {
        this.setState({
          items : []
        })
        console.log('Data removed')
      })
  }
  

  onChangeName(e){
    this.setState({
      name: e
    })
    console.log(this.state)
  }

  onChangePosition(e){
    this.setState({
      position: e
    })
    console.log(this.state)
  }
  

  list(item){
    return(
        <View style={{height:50, borderWidth: 1, borderBottomColor:'gray',justifyContent:'center',flexDirection:'row',alignItems:'center'}}>
          <View style={{flexDirection:'column'}}>
            <View>
              <Text style={{fontSize: 15}}>name: {item.Name}</Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>position: {item.Position}</Text>
            </View>
          </View>
          <View>
            <Button title='edit' onPress={() => this.editItems()}/>
          </View>
          <View>
            <Button title='delete' onPress={() => this.deleteItems()}/>
          </View>
        </View>
    )
  }

  render() {
    const data = this.state.items
    return (
      <SafeAreaView style={{flex:1, alignItems:'center',width:'100%',justifyContent:'center'}}>
        <View style={{flex:0.1,flexDirection:'row', alignItems:'center'}}>
          <View style={{flexDirection:'row',width:'25%'}}>
            <Text>name :</Text>
            <TextInput style={{width:'50%'}} onChangeText={(e) => this.onChangeName(e)} value={this.state.name}/>
          </View>
          <View style={{flexDirection:'row',width:'30%'}}>
            <Text>position :</Text>
            <TextInput style={{width:'40%'}} onChangeText={(e) => this.onChangePosition(e)} value={this.state.position}/>
          </View>
          <View style={{flexDirection:'row',width:'20%'}}>
            <TouchableOpacity style={{fontSize:15}}
              onPress={() => this.deleteAllItems()}
            >
              <Text style={{color:"#841584"}}>deleteAll</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',width:'20%'}}>
            <TouchableOpacity style={{fontSize:15}}
              onPress={() => this.saveItems()}
            >
              <Text style={{color:"#841584"}}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex:0.8}}>

          <FlatList
            data={data}
            renderItem={({item}) => this.list(item)}
            keyExtractor={item => item.Id}
          />
        </View>
      </SafeAreaView>
    )
  }
}

