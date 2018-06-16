import React, { Component } from 'react'

export default class TodoList extends Component {
  render() {

    // todosをあとえReduxから読みとる

    const fakeTodos = [
      {id: 1, text: "buy a car", completed: false,  todoClick: () => console.log("clicked!")}, 
      {id: 2, text: "play the guitar", completed: true, todoClick: () => console.log("clicked!") }, 
      {id: 3, text: "play with cat", completed:false, todoClick: () => console.log("clicked!") }
    ];
    
    return (
      <ul>
        {fakeTodos.map(todo =>
          <li
            key={todo.id}
            onClick={todo.todoClick}
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
