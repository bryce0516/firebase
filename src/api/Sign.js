import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import ActionCreator from '../actions';

class Sign extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSigned: false
    }


  }
  componentDidMount(){
    if (this.state.isSigned != true) {
      this.setState({
        isSigned: true
      })
    } 
  }

 render() {
  let uid = this.props.route.params.otherParam.uid
  console.log('props~~~', typeof uid)
    return (
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
        <Text>this.props.counter,{this.props.counter}</Text>
        <TouchableOpacity
          style = {s.upButton}
          onPress={() => this.props.counterUp(1)}
        >
          <Text>up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {s.upButton}
          onPress={() => this.props.counterDown(1)}
        >
          <Text>down</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style = {s.upButton}
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>goBack</Text>
        </TouchableOpacity> 
        <TouchableOpacity
          style = {s.upButton}
          onPress={() => this.props.isSign({type:'setUserName',uid:`${uid}`})}
        >
          <Text>isSign state</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style = {s.upButton}
          onPress={() => console.log(this.props.cart.cart.uid)}
        >
          <Text>console.log</Text>

        </TouchableOpacity>
        {this.state.isSigned ? <Text>is Signed</Text> :<Text>isn't Signed</Text>}

      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('state',state)
  return {
    counter: state.counter,
    count : state.count,
    isSign : state.isSign,
    cart :state
    // isLogged : state.isLogged
  }
}

function mapDispatchToProps(dispatch,ownProps) {

  const param = ownProps.route.params.otherParam.uid
  return {
    counterUp: (num) => {
      dispatch(ActionCreator.counterUp(num))
    },
    counterDown: (num) => {
      dispatch(ActionCreator.counterDown(num))
    },
    isSign: (param) => {
      console.log('mapDispatchToProps props',param)
      dispatch(ActionCreator.isSign(param))
    },
    notSign: () => {
      dispatch(ActionCreator.notSign())
    }
  }
}

const s = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  upButton: {
    marginLeft: 20,
    backgroundColor: 'cyan',
    padding: 10,
    borderRadius: 20
  },
  downButton: {
    marginLeft: 20,
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 20
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(Sign)


// const AppContext = createContext({});
// const DispatchContext = createContext(()=>{});

// export default function App(){
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//   return (
//       <Provider store={store}>
//         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//           <User />
//           <Product />
//           {/* <Drawers /> */}
//         </View>
//       </Provider>


//   )
// }

// const INITIAL_STATE = {
//   user:{name:'mike'},
//   product:{name:'iphone'}
// }

// function User() {
//   console.log('user render')
//   const user = useSelector(state => state.user)
//   const dispatch = useDispatch();
//   return (
//     <>
//       <Text>
//         {`Hi,${user.name}`}
//       </Text>
//       <Button title="change username"  onPress={() => dispatch({ type:'setUserName', name:'john'})}/>
//     </>
//   )
// }
// function Product(){
//   const product = useSelector(state => state.product)
//   return <Text>{`product name is ${product.name}`}</Text>
// }





// const myReducer = (state = { name: 'mike'}, action) => {
//   console.log('myreducer');
//   if(action.type === 'someActin'){
//     return {name: 'mike2',meta: { localStorageKey : 'myKey'}}
//   }
//   return state;
// }

// const store = createStore(myReducer, applyMiddleware(saveToLocalStorage));

// store.dispatch({
//   type:'someActin',
//   title: 'asdf',
//   meta: { localStorageKey : 'myKey'}

// })
