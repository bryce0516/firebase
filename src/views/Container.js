import React, { Component } from 'react'
import {View, Text, Button, AsyncStorage,TextInput,TouchableOpacity} from 'react-native'
import { connect,createStore,Provider } from 'react-redux'
import store from '../redux/store';


const incrementAction = {
  type:'INCREMENT',
  amout:123,
};

const conditionalIncrementAction = {
  type:'CONDITIONAL_INCREMENT',
  amount: 2,
  gt:10,
  lt:100
}

store.dispatch({type:'ADD', title:'영화보기', priority:'high'});
store.dispatch(conditionalIncrementAction);


class Container extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (

        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <TextInput placeholder='username'/>
        <TextInput placeholder='password'/>
          <Text children="Redux Login Example"/>
          <Text childrne="Click on login to continue" />
          <TouchableOpacity style={{ backgroundColor:'yellow', height:40, width:80, justifyContent:'center', alignItems:'center'}}
            onPress={() => console.log('current store ',store.getState())}>
            <Text style={{fontSize:20}}>
              login
            </Text>
          </TouchableOpacity>
          <Button
          title='go back'
          onPress={() => this.props.navigation.goBack()} />
        </View>

    )
  } 
}

// const mapStateToProps = (state,ownProps) => {
//   return {

//   }
// }
// const actionCreator = (type, payload=null)=> ({type, payload})

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     authSucess:(token)=>{
//       AsyncStorage.multiSet([['token',token], ['loggedin','1']])
//       dispatch(actionCreator('LOGIN_SUCCESS'))
//     }
//   }
// };

// export const authStateReducer = (state={app_stated:false, authenticated:false},{action,payload}) => {
//   switch(type){
//     case 'LOGIN_SUCCESS':
//       return {...state,authenticated:true}
//     case 'LOGGOUT':
//       return {...state,authenticated:false}
//     case 'APP_LOADED':
//       return {...state,app_started:true}
//     default:
//       return state  
//   }
// }

export default Container