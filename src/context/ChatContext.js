import createDataContext from './createDataContext'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'


const chatReducer = (state, action) => {
  switch(action.type){
    case 'showchatroom':
      return {...state, data: action.payload}
    case 'addchatroom':
      return 
    default:
      return state;
  }
} 


const showchatroom = dispatch => {
  return async () => {
    try{
      const response = await firestore().collection('THREADS').onSnapshot((querySnapshot) => {
        const array = []
        querySnapshot.forEach(documentSnapshot => {
          array.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        dispatch({type:'showchatroom', payload:array})
      })
      return () => response();
    } catch(error) {
      console.log(error)
    }
  }
}

const addchatroom = dispatch => {

}
export const {Provider, Context} = createDataContext(
  chatReducer,
  {showchatroom,addchatroom},
  []
)