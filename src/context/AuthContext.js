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
    case 'signout':
      return {errorMessage:'', token: null}
    default:
      return state;
  }
}

const signin = dispatch => {
  return async({email, password}) => {
    await auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      alert('User account created & signed in!');
      AsyncStorage.setItem('token', data.user.uid)
      dispatch({type:'signin', payload:data.user.uid})
      navigate('main',{ screen: 'homeScreen' })
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
        dispatch({type:'signup', payload:data.user.uid})
        alert(`User account created & signed in! email is ${email}`);
        navigate('SignIn')
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

const signout = dispatch => {
  return async () => {
    await AsyncStorage.removeItem('token');
    dispatch({type:'signout'})
    navigate('login',{ screen:'index'})
  }
}

const autosignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token')
  try{
    if(token){
      dispatch ({type:'signin', payload: token})
      navigate('main',{ screen: 'homeScreen' })
    } else {
      navigate('login',{ screen:'index'})
    }
  }catch(error){
    console.log(error)
  }
}

const applesign = dispatch => async () => {
  try {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME]
    })
  
    const {identityToken, nonce } = appleAuthRequestResponse;
  
    if(identityToken) {
      const appleCredential = firebase.auth.AppleAuthProvider.credential(identityToken, nonce);
  
      const userCredetital = await firebase.auth().signInWithCredential(appleCredential).then(AsyncStorage.setItem('token',userCredential.user.uid))
      console.log(`Firebase authenticated via Apple, UID: ${userCredential.user.uid}`);
    } else {
      
    }
  }catch (error){
    console.log(error)
  }

}

export const {Provider, Context} = createDataContext(
  authReducer,
  { signin, signup,signout, autosignin, applesign },
  { token:null, errorMessage:'' }
)