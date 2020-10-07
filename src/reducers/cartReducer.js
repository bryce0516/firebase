const INITIAL_STATE = {
  user:{name:'mike'},
  product:{name:'iphone'},
  uid:''
}

export default function cartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'setUserName':
      return {
        ...state,
        user: {...state.user, name:action.name, uid: action.uid},
      };
    default:
      return state
  }
}