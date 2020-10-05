import counterTypes from './counterTypes'

export function counterUp(num){
  return {
    type: counterTypes.counterTypesUp,
    payload: num
  }
} 

export function counterDown(num){
  return {
    type: counterTypes.counterTypesDown,
    payload: num
  }
}