import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {

    // todosをあとでReduxから読みとる
    const { todos, clickTodo } = this.props;

    console.log(todos);
    return (
      <ul>
        {todos.map((todo) =>
          <li
            key={todo.id}
            onClick={() => clickTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none'
            }}
          >
            {todo.text}
          </li>
        )}
      </ul>
    )
  }
}
