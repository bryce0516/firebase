import * as countAction from './countAction'
import * as counterAction from './counterAction'
import * as signAction from './signAction'

const ActionCreators = Object.assign({},
  counterAction,countAction,signAction
);

export default ActionCreators;