// import React, { Component } from 'react'
// import { View, StyleSheet,Button } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import Main from './Database'
// import 'react-native-gesture-handler';
// import SignApple from './SignApple';
// import SignWithPhone from './SignWithPhone'
// import HomeScreen from './HomeScreen';
// import firebase from '@react-native-firebase/app'

// export default class IndexView extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isSignedIn : false
//     }
//   }

//   componentDidMount(){
//     if(auth().currentUser){
//       this.setState({
//         isSignedIn: true
//       })
//     }
//   }
  
//   render() {

//     return (
//       <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
//       {
//         this.state.isSignedIn != false ? 
//       <HomeScreen />
//       :
//       <>
//         <View style={{alignItems:'center',paddingVertical:20}}>
//           <Button title='Sign In' onPress={() => this.props.navigation.navigate('SignIn',{ screen: 'SignIn' })} />
//         </View>
//         <View style={{alignItems:'center',paddingVertical:20}}>
//           <Button title='Sign Up' onPress={() => this.props.navigation.navigate('SignUp',{ screen: 'SignUp' })} />
//         </View>
//         <View style={{alignItems:'center',paddingVertical:20}} >
//         <SignApple {...this.props}/>
//         </View>
//       </>
//       }
//       </View>

//     )
//   }
// }


import React, {useContext, useEffect} from 'react'
import { View, Text, Button } from 'react-native'
import {navigate} from '../RootNavigation'
import {Context as AuthContext} from '../context/AuthContext'
const IndexView = ({navigation}) => {
  const { autosignin } = useContext(AuthContext)
  useEffect(() => {
    autosignin();
  }, [])
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
      <View style={{alignItems:'center',paddingVertical:20}}>
        <Button title='Sign In' onPress={() => navigate('login',{screen:'SignIn'})} />
      </View>
      <View style={{alignItems:'center',paddingVertical:20}}>
        <Button title='Sign Up' onPress={() => navigate('login',{screen:'SignUp'})} />
      </View>
    </View>
  )
}

export default IndexView