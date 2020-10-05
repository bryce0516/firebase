import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import ActionCreator from '../actions';

// const uid = this.props.route.params.otherParam.uid

class Sign extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      isSigned: this.props.route.params.otherParam.uid
    }
  }
  componentDidMount(){
    if (this.state.isSigned != null) {
      this.setState({
        isSigned: true
      })
    } 
  }

 render() {
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
          onPress={() => this.props.isSign()}
        >
          <Text>Change Sign status</Text>
        </TouchableOpacity>
        {this.props.isSigned ? <Text>is signed</Text> : <Text>is not signed</Text>}
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('state',state)
  return {
    counter: state.counter,
    count : state.count,
    isSigned : state.isSigned
    // isLogged : state.isLogged
  }
}

function mapDispatchToProps(dispatch) {
  console.log(this.props)
  return {
    counterUp: (num) => {
      dispatch(ActionCreator.counterUp(num))
    },
    counterDown: (num) => {
      dispatch(ActionCreator.counterDown(num))
    },
    isSign: () => {
      dispatch(ActionCreator.isSign())
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


export default connect(mapStateToProps, mapDispatchToProps)(Sign);