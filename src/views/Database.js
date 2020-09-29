import React, { Component } from 'react'
import {View, Text, StyleSheet, SafeAreaView, FlatList,Button, TouchableOpacity, TextInput} from 'react-native'
import database from '@react-native-firebase/database';

export default class Database extends Component {
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
    const itemRef = database().ref('items')
    const onLoadingListener = itemRef.on('value', snapshot => {
        let arr = []
        if(snapshot.val() != null){
          Object.values(snapshot.val()).map(function(key) {
            arr.push(key)
          })
        }
        this.setState({items : arr})
      })
    const childRemoveListener = itemRef.on('child_removed', snapshot => {
      alert('child Removed')
    })
    const childChangeListener = itemRef.on('child_changed', snapshot => {
      alert('child Changed')
    })
    return () => {
      itemRef.off('value', onLoadingListener)
      itemRef.off('child_removed', childRemoveListener)
      itemRef.off('child_changed', childChangeListener)
      console.log('renderItems',this.state.items)
    }
  }

  saveItems(){
    let key;
    if(this.state.Id != null){
      key = this.state.Id
    } else {
      this.state.Id = database()
        .ref()
        .push().key;
    }


    let dataToSave = {
      Id: this.state.Id,
      Name: this.state.name,
      Position: this.state.position
    };

    database()
      .ref(`items/${dataToSave.Id}`)
      .update(dataToSave)
      .then(() => {
        this.setState({
          name: '',
          position:'',
          Id: null,
        })
        console.log('Data updated')
      })
      .catch(err => {
        console.log(err)
      })
  }

  editItems(item){
    this.setState({
      Id:item.Id,
      name:item.Name,
      position: item.Position
    })
    //  database().
    //  ref(`items/${item.Id}`)
    //  .update()
    //  .then(()=>{})
    //  .catch(err => { 
    //    console.log(err)
    //  })
  }

  deleteItems(item){
    database()
      .ref(`items/${item.Id}`)
      .remove()
      .then(() => {

      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteAllItems(){
    database()
      .ref('items')
      .remove()
      .then(() => {
        this.setState({
          items : []
        })
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
        <View style={{height:50, borderWidth: 0.3,justifyContent:'flex-start',flexDirection:'row',alignItems:'center', marginVertical:3}}>
          <View style={{flexDirection:'column', paddingLeft:10 }}>
            <View>
              <Text style={{fontSize: 15}}>name: {item.Name}</Text>
            </View>
            <View>
              <Text style={{fontSize: 15}}>position: {item.Position}</Text>
            </View>
          </View>
          <View>
            <Button title='edit' onPress={() => this.editItems(item)}/>
          </View>
          <View>
            <Button title='delete' onPress={() => this.deleteItems(item)}/>
          </View>
        </View>
    )
  }

  render() {
    const data = this.state.items
    return (
      <SafeAreaView style={{flex:1, alignItems:'center',width:'100%',justifyContent:'center'}}>
        <View style={{flex:0.05,flexDirection:'row',width:'100%',height:'100%',alignItems:'center'}}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height:30, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize:28}}>Real Time Database</Text>
            </View>
          <View style={{ width:'20%', alignItems:'center' }}>
            <TouchableOpacity 
            onPress={() => this.props.navigation.goBack()}>
              <Text style={{color:"#841584", fontSize:15}} >go back</Text>
            </TouchableOpacity>
          </View>
        </View>

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
            <TouchableOpacity
              onPress={() => this.deleteAllItems()}
            >
              <Text style={{color:"#841584", fontSize:15}}>deleteAll</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',width:'10%'}}>
            <TouchableOpacity
              onPress={() => this.saveItems()}
            >
              <Text style={{color:"#841584", fontSize:15}}>Save</Text>
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

