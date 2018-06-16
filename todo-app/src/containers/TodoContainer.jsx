import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTodos, addTodo, clickTodo } from '../actions/todos.js';
import TodoPage from '../components/TodoPage.jsx';

class TodoContainer extends Component {

  render() {
    return (
      <div>
        <TodoPage
          todos={this.props.todos.todos}
          addTodo={this.props.actions.addTodo}
          clickTodo={this.props.actions.clickTodo}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { todos } = state;

  return {
    todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      getTodos: getTodos,
      addTodo: addTodo,
      clickTodo: clickTodo,
    },
    dispatch,
  )
  }
}

export default 
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(TodoContainer);

