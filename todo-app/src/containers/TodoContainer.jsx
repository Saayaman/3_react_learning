import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos } from '../actions/todos.js';

class TodoContainer extends Component {

  //ただのセットアップなので、まだ何も起こらない

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { todos } = state;

  return {
    todos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getTodos: getTodos,
    },
    dispatch,
  );
}

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoContainer);

