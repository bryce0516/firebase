export const LOGIN = 'LOGIN'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
const defaultState = {
  isLoggedIn: false,
  user: {}
};

export function isSign(param){
  return {
    type: defaultState.isLoggedIn,
    payload: param
  }
} 

export function notSign(){
  return {
    type: defaultState.isLoggedIn,

  }
}