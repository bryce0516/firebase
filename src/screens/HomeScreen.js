
// import {View, Text, Button, TouchableOpacity,AsyncStorage} from 'react-native'
// import auth from '@react-native-firebase/auth';
// import SignOut from './SignOut'
// import PropTypes from 'prop-types';
// import FirebaseList from './FirebaseList/FirebaseList'
// import IndexView from './IndexView';
// import { connect,useDispatch,useSelector } from 'react-redux';
// import signReducer from '../reducers/signReducer';
// import React, { Component } from 'react'
// import isSign from '../actions/signAction'
// import store from '../redux/store'
// import ActionCreator from '../actions';

// class HomeScreen extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       initializing:true,
//       user: {}
//     }
//   }

//   componentDidMount(){
//     this.onAuthStateChanged()
//   }

//   onAuthStateChanged() {
//     auth().onAuthStateChanged(user => {  
//       if (user) { 
//         this.setState({user: user});
//         this.props.isSign({type:'setUserName',uid:`${user.uid}`})
//         if (this.state.initializing) {
//           this.setState({initializing: false});
//           // AsyncStorage.setItem(JSON.stringify(this.state.user.creationTime), JSON.stringify(this.state.user.uid));
//         }
//         if (this.state.initializing) return null;
//       } else {   
//           // No user is signed in.

//       }});
//   }


//   render() {

//     return (

//       <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Welcome {this.state.user.email}</Text>

//         <FirebaseList {...this.props.navigation} {...this.state.user} />
//         <Button title='check redux' onPress={() => console.log('thisis tabs store!!',store.getState())}/>
//         <SignOut {...this.props.navigation} />
//       </View>
//     );
//   }
// }


// function mapStateToProps(state) {
//   console.log('state',state)
//   return {
//     cart :state
//     // isLogged : state.isLogged
//   }
// }


// function mapDispatchToProps(dispatch,ownProps) {


//   return {
//     isSign: (param) => {
//       console.log('mapDispatchToProps props',param)
//       dispatch(ActionCreator.isSign(param))
//     },
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)



import React, {useContext} from 'react'
import { View, Text, Button } from 'react-native'
import { navigate } from '../RootNavigation'
import {Context as AuthContext} from '../context/AuthContext'
import AsyncStorage from '@react-native-community/async-storage'
const HomeScreen = ({navigation}) => {
  const { signout } = useContext(AuthContext)
  React.useLayoutEffect(() => {
    navigation.setOptions(
      {
        headerRight: () => (
          <Button title="Sign out" onPress={signout} />
      )
    })
  },[navigation])
  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen