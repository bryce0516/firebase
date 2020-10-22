
import 'react-native-gesture-handler';
import Drawers from './src/screens/drawers'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import {createStore, applyMiddleware} from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux'
import reducers from './src/reducers'

import AsyncStorage from '@react-native-community/async-storage';
import store from './src/redux/store'





import React, { Component, createContext,useReducer,useContext } from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {View, Button, Text} from 'react-native'
import { withNavigation, createSwitchNavigator, createCompatNavigatorFactory } from '@react-navigation/compat';
import HomeScreen from './src/screens/HomeScreen';
import IndexView from  './src/screens/IndexView'
import SignIn from './src/views/SignIn'
import SignUp from './src/views/SignUp'
import {Provider as AuthProvider} from './src/context/AuthContext'
import {navigationRef} from './src/RootNavigation'
// const firebaseConfig = {
//   apiKey: "AIzaSyABtKYGtN4W_nSdKRVF3KFk180Evtk8lMI",
//   authDomain: "net-ninja-marioplan-6d101.firebaseapp.com",
//   databaseURL: "https://net-ninja-marioplan-6d101.firebaseio.com",
//   projectId: "net-ninja-marioplan-6d101",
//   storageBucket: "net-ninja-marioplan-6d101.appspot.com",
//   messagingSenderId: "12123624491",
//   appId: "1:12123624491:web:4c6516f29617e1addac66e",
//   measurementId: "G-C1QDY6NPK8"
// };
// if(!firebase.apps.len gnth) {firebase.initializeApp(firebaseConfig) ;}

// export {firebase, Auth}


// const AppContext = createContext({});
// const DispatchContext = createContext(()=>{});

// export default function App(){
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//   return (
//       <Provider store={store}>
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//           <User />
//           <Product />
//           {/* <Drawers /> */}
//         </View>
//       </Provider>


//   )
// }

// const INITIAL_STATE = {
//   user:{name:'mike'},
//   product:{name:'iphone'}
// }

// function reducer(state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case 'setUserName':
//       return {
//         ...state,
//         user: {...state.user, name:action.name},
//       };
//     default:
//       return state
//   }
// }

// const store = createStore(reducer);

// function User() {
//   console.log('user render')
//   const user = useSelector(state => state.user)
//   const dispatch = useDispatch();
//   return (
//     <>
//       <Text>
//         {`Hi,${user.name}`}
//       </Text>
//       <Button title="change username"  onPress={() => dispatch({ type:'setUserName', name:'john'})}/>
//     </>
//   )
// }
// function Product(){
//   const product = useSelector(state => state.product)
//   return <Text>{`product name is ${product.name}`}</Text>
// }
const loginFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    index: {screen: IndexView },
    SignIn: {screen: SignIn},
    SignUp: {screen: SignUp},
  }
)

const mainFlow = createCompatNavigatorFactory(createStackNavigator)(
  {
    home: {screen: HomeScreen}
  }

)
const App = createSwitchNavigator(
  {
    login: loginFlow,
    main: mainFlow
  }
)


export default () => {
  return (
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <App />
      </NavigationContainer>
    </AuthProvider>

  )
}

//before
// class App extends Component {
//   constructor(props){
//     super(props)
//     if (!firebase.apps.length) {
//       firebase.initializeApp({});
//     }
//   }
//   render(){
//     return (
//       <Provider store={store}>
//         {/* <Count /> */}
//         <Drawers />
//         {/* <Home /> */} 
//       </Provider>

//     )
//   }
// }

// export default App






// const saveToLocalStorage = store => next => action => {
//   if(action.meta?.localStorageKey) {
//     AsyncStorage.setItem(action.meta?.localStorageKey, JSON.stringify(action));
//   }
//   return next(action)
// }

// const myReducer = (state = { name: 'mike'}, action) => {
//   console.log('myreducer');
//   if(action.type === 'someActin'){
//     return {name: 'mike2',meta: { localStorageKey : 'myKey'}}
//   }
//   return state;
// }
// const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));
// store.subscribe(() =>{
// const state = store.getState();
// console.log(state)

// })
// store.dispatch({
//   type:'someActin',
//   title: 'asdf',
//   meta: { localStorageKey : 'myKey'}

// })
