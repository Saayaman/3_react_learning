import React, { Component } from 'react';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import FooterMenu from './components/FooterMenu.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <TodoList />
        <FooterMenu />
      </div>
    );
  }
}

export default App;
