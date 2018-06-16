import React, { Component } from 'react'
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import FooterMenu from './components/FooterMenu.jsx';


export default class TodoPage extends Component {
  state = {
    //このTODO’sが後々Reduxから読み込まれるようになります。
    todos: [
      {
        id: 0,
        text: "buy a car",
        completed: false, 
      }, 
      {
        id: 1,
        text: "write a novel",
        completed: false, 
      }, 
    ],
    activeFilter: 'all',
  };

  todoClick = (id) => {
    const { todos } = this.state;
    const todoData = todos[id];


    //新しいTodo オブジェクトを作って・・・、
    const newTodo = {
      ...todoData,
      completed: !todoData.completed,
    };

    todos[id] = newTodo

    this.setState({
        todos
    });
  }

  addTodo = (todoText) => {
    const { todos } = this.state;

    const newTodo = {
      id: todos.length,
      text: todoText,
      completed: false,
    }

    const newTodos = [
      ...todos,
      newTodo,
    ];

    this.setState({
       todos: newTodos,
    });

  };

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

    const { todos } = this.state;

    return (
      <div>
        <AddTodo addTodo={this.addTodo}/>
        <TodoList todos={this.filterTodos(todos)} clickTodo={this.todoClick} />
        <FooterMenu clickFilter={this.clickFilter} />
      </div>
    )
  }
}
