
import {View, Text, Button, TouchableOpacity,AsyncStorage} from 'react-native'
import auth from '@react-native-firebase/auth';
import SignOut from './SignOut'
import PropTypes from 'prop-types';
import FirebaseList from './FirebaseList/FirebaseList'
import IndexView from './IndexView';
import { connect,useDispatch,useSelector } from 'react-redux';
import signReducer from '../reducers/signReducer';
import React, { Component } from 'react'
import isSign from '../actions/signAction'


class HomeScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      initializing:true,
      user: {}
    }
  }

  componentDidMount(){
    this.onAuthStateChanged()
  }

  onAuthStateChanged() {
    auth().onAuthStateChanged(user => {  
      if (user) { 
        this.setState({user: user});
        if (this.state.initializing) {
          this.setState({initializing: false});
          console.log('propsssss',this.state.user.creationTime)
          // AsyncStorage.setItem(JSON.stringify(this.state.user.creationTime), JSON.stringify(this.state.user.uid));
        }
        if (this.state.initializing) return null;
      } else {   
          // No user is signed in.

      }});
  }


  render() {

    return (

      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome {this.state.user.email}</Text>

        <FirebaseList {...this.props.navigation} {...this.state.user} />

        <SignOut {...this.props.navigation} />
      </View>
    );
  }
}


// function HomeScreen({ navigation,isSign }) {

//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

  
//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     isSign.user = user.uid
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;

//   if (!user) {
//     return (
//       <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
//         <IndexView {...user}/>
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Welcome {user.email}</Text>

//       <FirebaseList {...navigation} {...user} />

//       <SignOut {...navigation} />
//     </View>
//   );
// }

// function mapStateToProps(state,ownProps) {

//   console.log('mapStateToProps',state)
//   return {user:state.isSigned}
// }


// function mapDispatchToProps(dispatch,ownProps){
//  console.log('mapDispatchToProps',dispatch)
//   return {
//     isSign: () => {
//       dispatch(ActionCreator.isSign())
//     },
//   }
// }



export default HomeScreen