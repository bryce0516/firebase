import {combineReducers} from 'redux'
import CountReducer from './countReducer'
import counterReducer from './counterReducer'
import signReducer from './signReducer'

const allReducers = combineReducers({
  count: CountReducer,
  counter: counterReducer,
  isSigned: signReducer

})

export default allReducers
// export default combineReducers({
//   count: CountReducer
// })