import { login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/signAction';



const defaultState = {
  isLoggedIn: false,
  user: {}
};

const isSign = false;
export default function signReducer(state= defaultState, action){
  switch (action.type) {
    case defaultState.user != null:
      return defaultState
    case defaultState.user == null:
      return defaultState
    default:
      return defaultState
  }
};