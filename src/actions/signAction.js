const types = {
  isSign: 'isSign',
  notSign: 'notSign'
}
const defaultState = {
  isLoggedIn: false,
  user: {}
};

export const LOGIN = 'LOGIN'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export function isSign(user){
  return {
    type: LOGIN,

  }
} 

export function notSign(){
  return {
    type: defaultState.isLoggedIn,

  }
}