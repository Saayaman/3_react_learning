import uuid from 'uuid';

const initialState = {
  todos: [],
  activeFilter: 'all',
};


export default function todos (state = initialState, action){
  switch (action.type) {
   case 'GET_TODOS':
    return getTodos(state, action);
   case 'ADD_TODO':
    return addTodo(state, action);
   case 'CLICK_TODO':
    return clickTodo(state, action);
   default:
    return state
  }
 }

 function getTodos(state, action){

  const { payload } = action;
   return {
     ...state,
   }
 }

 function addTodo(state, action){

   const { payload } = action;

   console.log("hiii", payload.payload);

   return {
    ...state,
    todos: [
      ...state.todos,
      {
        id: uuid.v1(),
        text: payload.payload,
        completed: false,
      }
    ],
   }
  }

  function clickTodo(state, action) {
    const { payload } = action;
    const { todos } = state;

    const todoData = todos.find(todo => todo.id === payload.id);
    const newTodos = todos.filter(todo => todo.id !== payload.id);
    
    //新しいTodo オブジェクトを作って・・・、
    const newTodo = {
      ...todoData,
      completed: !todoData.completed,
    };

    newTodos.push(newTodo)

    return {
      ...state,
      todos: [
        ...newTodos,
      ]
    }

  }
