// import React, { Component } from 'react'
// import { View, Text, Button,TextInput } from 'react-native';
// import auth from '@react-native-firebase/auth';

// export default class SignIn extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       email: '',
//       password:''
//     }
//   }

//   onChangeEmail(text){
//     this.setState({
//       email:text
//     })
//   }

//   onChangePassword(text){
//     this.setState({
//       password:text
//     })
//   }

//   signIn(){
//     auth()
//     .signInWithEmailAndPassword(this.state.email, this.state.password)
//     .then(() => {
//       console.log('signin status props',this.props)
//       alert('User account created & signed in!');
//       this.props.navigation.navigate('HomeScreen',{ screen: 'HomeScreen' })
//     })
//     .catch(error => {
//       if (error.code === 'auth/email-already-in-use') {
//         alert('That email address is already in use!');
//       }

//       if (error.code === 'auth/invalid-email') {
//         alert('That email address is invalid!');
//       }

//       console.error(error);
//     });
//   }

//   render() {
//     return (
//       <View style={{flex:1, flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{fontSize:40, fontWeight:'bold', color:'gray'}}>Plz Sign in</Text>
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{paddingHorizontal:10}}>
//             E-mail :
//           </Text>
//           <TextInput
//             style={{ height: 40, width: 250}}
//             onChangeText={(text) => this.onChangeEmail(text)}
//             maxLength = {20}
//           />
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{paddingHorizontal:10}}>
//             Password :
//           </Text>
//           <TextInput
//             style={{ height: 40, width: 250}}
//             onChangeText={(text) => this.onChangePassword(text)}
//             secureTextEntry={true}
//             maxLength = {20}
//           />
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Button title='Cancel' onPress={() => this.props.navigation.goBack()}
//           />
//           <Button title='Submit' onPress={() => this.signIn()}/>
//         </View>
//        </View>
//     )
//   }
// }


import React, {useContext,useState} from 'react'
import { View, Text,TextInput,Button } from 'react-native'
import {navigate} from '../RootNavigation'
import {Context as AuthContext} from '../context/AuthContext'
const SignIn = () => {
  const {state, signin} =useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (

      <View style={{flex:1, flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:40, fontWeight:'bold', color:'gray'}}>Plz Sign in</Text>
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{paddingHorizontal:10}}>
            E-mail : 
          </Text>
          <TextInput
            style={{ height: 40, width: 250}}
            onChangeText={setEmail}
            maxLength = {20}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{paddingHorizontal:10}}>
            Password :
          </Text>
          <TextInput
            style={{ height: 40, width: 250}}
            onChangeText={setPassword}
            secureTextEntry={true}
            maxLength = {20}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Button title='Cancel' onPress={() => navigate('index')}
          />
          <Button title='Submit' onPress={() => signin({email, password})}/>
        </View>
      </View>
  )
}


export default SignIn