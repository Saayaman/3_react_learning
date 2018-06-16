import React, { Component } from 'react'
import TodoList from './TodoList.jsx';
import AddTodo from './AddTodo.jsx';
import FooterMenu from './FooterMenu.jsx';


export default class TodoPage extends Component {

  state = {
    activeFilter: [],
  }


  // todoClick = (id) => {
  //   const { todos } = this.props;
  //   const todoData = todos[id];


  //   //新しいTodo オブジェクトを作って・・・、
  //   const newTodo = {
  //     ...todoData,
  //     completed: !todoData.completed,
  //   };

  //   todos[id] = newTodo

  //   this.setState({
  //       todos
  //   });
  // }

  // addTodo = (todoText) => {
  //   const { todos } = this.state;

  //   const newTodo = {
  //     id: todos.length,
  //     text: todoText,
  //     completed: false,
  //   }

  //   const newTodos = [
  //     ...todos,
  //     newTodo,
  //   ];

  //   this.setState({
  //      todos: newTodos,
  //   });

  // };

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
