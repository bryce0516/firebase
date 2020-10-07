import * as countAction from './countAction'
import * as counterAction from './counterAction'
import * as signAction from './signAction'
import * as cartAction from './cartAction';

const ActionCreators = Object.assign({},
  counterAction,countAction,cartAction
);

export default ActionCreators;