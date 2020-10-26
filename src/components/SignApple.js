// import React, { Component } from 'react'
// import {View, StyleSheet} from 'react-native'
// import appleAuth, {
//   AppleButton,
//   AppleAuthError,
//   AppleAuthRequestScope,
//   AppleAuthRealUserStatus,
//   AppleAuthCredentialState,
//   AppleAuthRequestOperation,
// } from '@invertase/react-native-apple-authentication';
// import { firebase } from '@react-native-firebase/auth';


// export default class SignApple extends Component {

//   constructor(props) {
//     super(props);
//     this.authCredentialListener = null;
//     this.user = null;
//     this.state = {
//       credentialStateForUser: -1,
//     }

//   }
//   componentDidMount() {
//     /**
//      * subscribe to credential updates.This returns a function which can be used to remove the event listener
//      * when the component unmounts.
//      */
//     this.authCredentialListener = appleAuth.onCredentialRevoked(async () => {
//       console.warn('Credential Revoked');
//       this.fetchAndUpdateCredentialState().catch(error =>
//         this.setState({ credentialStateForUser: `Error: ${error.code}` }),
//       );
//     });

//     this.fetchAndUpdateCredentialState()
//       .then(res => this.setState({ credentialStateForUser: res }))
//       .catch(error => this.setState({ credentialStateForUser: `Error: ${error.code}` }))
//   }

//   componentWillUnmount() {
//     /**
//      * cleans up event listener
//      */
//     this.authCredentialListener();
//   }
//   async signIn(){
//     // start a login request
//     try {
//       const appleAuthRequestResponse = await appleAuth.performRequest({
//         requestedOperation: AppleAuthRequestOperation.LOGIN,
//         requestedScopes: [
//           AppleAuthRequestScope.EMAIL,
//           AppleAuthRequestScope.FULL_NAME,
//         ],
//       });

//       console.log('appleAuthRequestResponse', appleAuthRequestResponse);

//       const {
//         user: newUser,
//         email,
//         nonce,
//         identityToken,
//         realUserStatus /* etc */,
//       } = appleAuthRequestResponse;

//       this.user = newUser;

//       this.fetchAndUpdateCredentialState()
//         .then(res => this.setState({ credentialStateForUser: res }))
//         .catch(error =>
//           this.setState({ credentialStateForUser: `Error: ${error.code}` }),
//         );

//       if (identityToken) {
//         const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);

//         // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
//         //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
//         //     to link the account to an existing user
//         const userCredential = await firebase.auth().signInWithCredential(appleCredential);
    
//         // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
//         console.warn(`Firebase authenticated via Apple, UID: ${userCredential.user.uid}`);
//       } else {
//         // no token - failed sign-in?
//       }

//       if (realUserStatus === AppleAuthRealUserStatus.LIKELY_REAL) {
//         console.log("I'm a real person!");
//       }
//       console.log(`Apple Authentication Completed, ${this.user}, ${email}`);
//       this.props.navigation.navigate('HomeScreen',{ screen: 'HomeScreen' })
//     } catch (error) {
//       if (error.code === AppleAuthError.CANCELED) {
//         console.warn('User canceled Apple Sign in.');
//         // this.props.navigation.navigate('LoginFail',{ screen: 'LoginFail' })
//         this.props.navigation.navigate('HomeScreen',{ screen: 'HomeScreen' })
//       } else {
//         console.error(error);
//         this.props.navigation.navigate('LoginFail',{ screen: 'LoginFail' })
//       }
//     }

//   };

//   fetchAndUpdateCredentialState = async () => {
//     if (this.user === null) {
//       this.setState({ credentialStateForUser: 'N/A' });
//     } else {
//       const credentialState = await appleAuth.getCredentialStateForUser(this.user);
//       if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
//         this.setState({ credentialStateForUser: 'AUTHORIZED' });
//       } else {
//         this.setState({ credentialStateForUser: credentialState });
//       }
//     }
//   }

//   render() {
//     return (  
//       <View style={{alignItems: 'center'}}>
//        {appleAuth.isSupported && (
//         <AppleButton
//           style={ styles.buttonBorder }
//           buttonStyle={AppleButton.Style.WHITE}
//           buttonType={AppleButton.Type.SIGN_IN}
//           onPress={() => this.signIn()}
//         />
//        )}
//     </View>
//     )
//   }
// }

// const styles = StyleSheet.create({

//   buttonBorder: {
//     width: 200,
//     height: 80,
//   }
// })

import React, { useContext } from 'react';
import { View } from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import { appleAuth, AppleButton } from '@invertase/react-native-apple-authentication';
import AsyncStorage from '@react-native-community/async-storage';
import { Context as AuthContext } from '../context/AuthContext'

const SignApple = () => {
  const { applesign } = useContext(AuthContext)

  return (
    <View>
      <AppleButton 
        style={{width:200, height:60}}
        cornerRadius={5}
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        onPress={applesign}
      />
    </View>
  )
}

export default SignApple