// import React, { Component } from 'react'
// import {View, Text, TextInput, Button} from 'react-native'
// import auth from '@react-native-firebase/auth';
// export default class SignUp extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       email: '',
//       password:'',
//       phoneNumber:'',
//       displayName:'',
//       emailVerified:false,
//       uid:'',
//       creationTime:'',
//       lastSignInTime:''
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
//   onChangePhone(text){
//     this.setState({
//       phoneNumber:text
//     })
//   }
//   onChangeName(text){
//     this.setState({
//       displayName:text
//     })
//   }

//   signUp(){
//     auth()
//     .createUserWithEmailAndPassword(this.state.email, this.state.password)
//     .then((data) => {
//       this.setState({
//         uid: data.user.uid,
//         emailVerified: data.user.emailVerified,
//         creationTime: data.user.metadata.creationTime,
//         lastSignInTime: data.user.metadata.lastSignInTime
//       })
//       console.log(this.state, 'afasf', this.state.uid)
//       alert(`User account created & signed in! email is ${this.state.email}`);
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
//           <Text style={{fontSize:40, fontWeight:'bold', color:'gray'}}>Plz Sign up</Text>
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{paddingHorizontal:10}}>
//             E-mail :
//           </Text>
//           <TextInput
//             style={{ height: 40, width: 250}}
//             onChangeText={(text) => this.onChangeEmail(text)}
//             maxLength = {12}
            
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
//             maxLength = {12}
//           />
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{paddingHorizontal:10}}>
//             Phone :
//           </Text>
//           <TextInput
//             style={{ height: 40, width: 250}}
//             onChangeText={(text) => this.onChangePhone(text)}
//             maxLength = {12}
//             keyboardType="numeric"
//           />
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Text style={{paddingHorizontal:10}}>
//             Name :
//           </Text>
//           <TextInput
//             style={{ height: 40, width: 250}}
//             onChangeText={(text) => this.onChangeName(text)}
//             maxLength = {12}
//           />
//         </View>
//         <View style={{flexDirection:'row', alignItems:'center'}}>
//           <Button title='Cancel' onPress={() => this.props.navigation.goBack()}
//           />
//           <Button title='Submit' onPress={() => this.signUp()}/>
//         </View>
//        </View>
//     )
//   }
// }



import React, {useContext, useState} from 'react'
import { View, Text,TextInput,Button } from 'react-native'
import {Context as AuthContext} from '../context/AuthContext'
import {navigate} from '../RootNavigation'
const SignUp = () => {
  const {state, signup} = useContext(AuthContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')
  console.log(state)
  return (
      <View style={{flex:1, flexDirection:'column' ,alignItems:'center', justifyContent:'center'}}>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:40, fontWeight:'bold', color:'gray'}}>Plz Sign up</Text>
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
            maxLength = {12}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{paddingHorizontal:10}}>
            Phone :
          </Text>
          <TextInput
            style={{ height: 40, width: 250}}
            onChangeText={setPhone}
            maxLength = {12}
            keyboardType="numeric"
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{paddingHorizontal:10}}>
            Name :
          </Text>
          <TextInput
            style={{ height: 40, width: 250}}
            onChangeText={setName}
            maxLength = {20}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Button title='Cancel' onPress={() => navigate('index')} />
          <Button title='Submit' onPress={() => signup({email,password,phone,name})}/>
        </View>
       </View>
  )
}


export default SignUp