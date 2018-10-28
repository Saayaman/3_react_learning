import React, { Component } from 'react'
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import FooterMenu from './FooterMenu.jsx';


export default class TodoPage extends Component {

  state = {
    activeFilter: [],
  }

  clickFilter = (filter) => {
    console.log(filter);

    this.setState({
      activeFilter: filter,
    });

  };

  filterTodos = (todos) => {
    const { activeFilter } = this.state;

    if(activeFilter === 'active'){
      return todos.filter(todo => !todo.completed);
    }

    if(activeFilter === 'completed'){
      return todos.filter(todo => todo.completed);
    }
    return todos;
  };

  render() {

    const { todos, addTodo, clickTodo } = this.props;

    return (
      <div>
        <AddTodo addTodo={addTodo}/>
        <TodoList todos={this.filterTodos(todos)} clickTodo={clickTodo} />
        <FooterMenu clickFilter={this.clickFilter} />
      </div>
    )
  }
}
