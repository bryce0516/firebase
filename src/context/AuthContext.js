import AsyncStorage from '@react-native-community/async-storage'
import createDataContext from './createDataContext'
import auth from '@react-native-firebase/auth';
import {navigate} from '../RootNavigation'
const authReducer = (state, action) => {
  switch(action.type){
    case 'signin':
      return {errorMessage:'', token: action.payload}
    case 'signup':
      return {errorMessage:'', token: action.payload}
    default:
      return state;
  }
}

const signin = dispatch => {
  return async({email, password}) => {
    await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('User account created & signed in!');
      // navigate('HomeScreen',{ screen: 'HomeScreen' })
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }
      console.error(error);
    });
  }
}

const signup = dispatch => {
  return async ({email, password, phone, name}) => {
    await auth()
    .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const userInfo = {
          uid: data.user.uid,
          emailVerified: data.user.emailVerified,
          creationTime: data.user.metadata.creationTime,
          lastSignInTime: data.user.metadata.lastSignInTime
        }
        console.log(userInfo)
        alert(`User account created & signed in! email is ${email}`);
        // navigate('HomeScreen',{ screen: 'HomeScreen' })
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
        console.error(error);
      });
  }
}



export const {Provider, Context} = createDataContext(
  authReducer,
  { signin, signup },
  { token:null, errorMessage:'' }
)