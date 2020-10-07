import { login, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/signAction';

const defaultState = {
  isLoggedIn: false,
  user: {}
};

export default function signReducer(state= defaultState, action){
  switch (action.type) {
    case defaultState.user != null:
      return defaultState.user + action.payload
    case defaultState.user == null:
      return state.isLoggedIn
    default:
      return state
  }
};