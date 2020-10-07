import {combineReducers} from 'redux'
import CountReducer from './countReducer'
import counterReducer from './counterReducer'
import signReducer from './signReducer'
import cartReducer from './cartReducer'

const allReducers = combineReducers({
  count: CountReducer,
  counter: counterReducer,
  cart : cartReducer
})

export default allReducers
// export default combineReducers({
//   count: CountReducer
// })