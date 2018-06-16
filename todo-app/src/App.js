import React, { Component } from 'react';
import TodoContainer from './containers/TodoContainer';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <TodoContainer />
      </div>
    );
  }
}

export default App;
