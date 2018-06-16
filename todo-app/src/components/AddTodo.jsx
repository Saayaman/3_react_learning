import React, { Component } from 'react'

export default class AddTodo extends Component {

  state ={
    inputValue: "",
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.inputValue);
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form id="form1">
          <input onChange={this.handleChange} type="text" name="todo" />
          <button onClick={this.handleSubmit}>
            Add Todo
          </button>
        </form>
    </div>
    )
  }
}
