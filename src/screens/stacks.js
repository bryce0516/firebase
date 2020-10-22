// import React, { Component } from 'react'

// import { createStackNavigator } from '@react-navigation/stack';

// import tabs from './tabs'
// import IndexView from '../views/IndexView'
// import SignIn from '../views/SignIn'
// import SignUp from '../views/SignUp'
// import LoginFail from '../views/LoginFail'
// import HomeScreen from '../views/HomeScreen'
// import Database from '../views/Database'
// import cloudFireStore from '../views/cloudFireStore'
// import Count from '../api/Count'
// import Sign from '../api/Sign'
// import Container from '../views/Container'

// import auth from '@react-native-firebase/auth';

// const Stack = createStackNavigator();

// export default class stacks extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isSignedIn : false
//     }
//     console.log('stacks status',this.state)
//   }
//   componentMount(){
//     if(auth().currentUser){
//       this.setState({
//         isSignedIn: true
//       })
//     }
//   }

//   render() {
//     return (
//         <Stack.Navigator initialRouteName={IndexView} screenOptions={{ headerShown: false}}>
//           <Stack.Screen name="IndexView" component={IndexView} />
//           <Stack.Screen name="HomeScreen" component={HomeScreen} />
//           <Stack.Screen name="tabs" component={tabs} />
//           <Stack.Screen name="Database" component={Database} />
//           <Stack.Screen name="LoginFail" component={LoginFail} />
//           <Stack.Screen name="cloudFireStore" component={cloudFireStore} />
//           <Stack.Screen name="Count" component={Count} />
//           <Stack.Screen name="Sign" component={Sign} />
//           <Stack.Screen name="Container" component={Container} />
//           <Stack.Screen name="SignIn" component={SignIn} />
//           <Stack.Screen name="SignUp" component={SignUp} />

//         </Stack.Navigator>

//     )
//   }
// }


// // import * as React from 'react';
// // import AsyncStorage from 'react-native';
// // import tabs from './tabs'
// // import IndexView from '../views/IndexView'
// // import SignIn from '../views/SignIn'
// // import SignUp from '../views/SignUp'
// // import LoginFail from '../views/LoginFail'
// // import HomeScreen from '../views/HomeScreen'
// // import Database from '../views/Database'
// // import cloudFireStore from '../views/cloudFireStore'
// // import Count from '../api/Count'
// // import Sign from '../api/Sign'
// // import Container from '../views/Container'
// // import { createStackNavigator } from '@react-navigation/stack';

// // const Stack = createStackNavigator();

// // export default function stacks({ navigation }) {
// //   const AuthContext = React.createContext();
// //   const [state, dispatch] = React.useReducer(
// //     (prevState, action) => {
// //       switch (action.type) {
// //         case 'RESTORE_TOKEN':
// //           return {
// //             ...prevState,
// //             userToken: action.token,
// //             isLoading: false,
// //           };
// //         case 'SIGN_IN':
// //           return {
// //             ...prevState,
// //             isSignout: false,
// //             userToken: action.token,
// //           };
// //         case 'SIGN_OUT':
// //           return {
// //             ...prevState,
// //             isSignout: true,
// //             userToken: null,
// //           };
// //       }
// //     },
// //     {
// //       isLoading: true,
// //       isSignout: false,
// //       userToken: null,
// //     }
// //   );

// //   React.useEffect(() => {
// //     // Fetch the token from storage then navigate to our appropriate place
// //     const bootstrapAsync = async () => {
// //       let userToken;

// //       try {
// //         userToken = await AsyncStorage.getItem('userToken');
// //       } catch (e) {
// //         // Restoring token failed
// //       }

// //       // After restoring token, we may need to validate it in production apps

// //       // This will switch to the App screen or Auth screen and this loading
// //       // screen will be unmounted and thrown away.
// //       dispatch({ type: 'RESTORE_TOKEN', token: userToken });
// //     };

// //     bootstrapAsync();
// //   }, []);

// //   const authContext = React.useMemo(
// //     () => ({
// //       signIn: async data => {
// //         // In a production app, we need to send some data (usually username, password) to server and get a token
// //         // We will also need to handle errors if sign in failed
// //         // After getting token, we need to persist the token using `AsyncStorage`
// //         // In the example, we'll use a dummy token

// //         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
// //       },
// //       signOut: () => dispatch({ type: 'SIGN_OUT' }),
// //       signUp: async data => {
// //         // In a production app, we need to send user data to server and get a token
// //         // We will also need to handle errors if sign up failed
// //         // After getting token, we need to persist the token using `AsyncStorage`
// //         // In the example, we'll use a dummy token

// //         dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
// //       },
// //     }),
// //     []
// //   );

// //   return (
// //     <AuthContext.Provider value={authContext}>
// //       <Stack.Navigator>
// //         {state.userToken == null ? 
// //           <>
// //             <Stack.Screen name="IndexView" component={IndexView} />
// //             <Stack.Screen name="SignIn" component={SignIn} />
// //             <Stack.Screen name="SignUp" component={SignUp} />

// //          </>
// //          :
// //          <>
// //             <Stack.Screen name="HomeScreen" component={HomeScreen} />
// //             <Stack.Screen name="tabs" component={tabs} />
// //             <Stack.Screen name="Database" component={Database} />
// //             <Stack.Screen name="LoginFail" component={LoginFail} />
// //             <Stack.Screen name="cloudFireStore" component={cloudFireStore} />
// //             <Stack.Screen name="Count" component={Count} />
// //             <Stack.Screen name="Sign" component={Sign} />
// //             <Stack.Screen name="Container" component={Container} />
// //          </>

// //         }
// //       </Stack.Navigator>
// //     </AuthContext.Provider>
// //   );
// // }