import React, { Component } from 'react';
import 'react-native-gesture-handler';
import Drawers from './src/screens/drawers'
import firebase from '@react-native-firebase/app'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './src/reducers'
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

class App extends Component {
  constructor(props){
    super(props)
    if (!firebase.apps.length) {
      firebase.initializeApp({});
    }


  }
  render(){
    return (
      <Provider store={createStore(reducers)}>
        {/* <Count /> */}
        <Drawers />
        {/* <Home /> */}
      </Provider>

    )
  }
}

export default App