import counterTypes from '../actions/counterTypes'

const count = 0;
export default function counterReducer(state= count, action){
  switch (action.type) {
    case counterTypes.counterTypesUp:
      return state + action.payload;
    case counterTypes.counterTypesDown:
      return state - action.payload;
    default:
      return state
  }
};