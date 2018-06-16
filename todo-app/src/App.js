import React, { Component } from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import FooterMenu from './components/FooterMenu.jsx';
import './App.css';

class App extends Component {


  addTodo = (todo) =>{
    console.log("todo!", todo);
  };


  render() {
    return (
      <div className="App">
        <AddTodo addTodo={this.addTodo}/>
        <TodoList />
        <FooterMenu />
      </div>
    );
  }
}

export default App;
