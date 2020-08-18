import uuid from 'uuid'
//above gives every todo a unique id. without it it will
//delte every text that matches. so if i have two hey todos on the dom and delete one 
//it would delete both without this. cause we have playload in todoscontainer delete todoText

export default function manageTodo(state = {
  todos: [],
}, action) {
  // console.log(action) 
  //if uncommented it wont delete
  switch (action.type) {
    case 'ADD_TODO':

    const todo = {
      id: uuid(),
      text: action.payload.text
    }

    return { todos: state.todos.concat(todo) };
      // return { todos: state.todos.concat(action.payload.text) };
      // Using uuid() will generate a long random string each time a todo is created. Now, instead of just storing an array of strings in our store, we'll be storing an array of objects.
      // This causes a problem 'downstream', though: we need to update our TodosContainer to pass the correct content.Using uuid() will generate a long random string each time a todo is created. Now, instead of just storing an array of strings in our store, we'll be storing an array of objects.
      // This causes a problem 'downstream', though: we need to update our TodosContainer to pass the correct content.
    case 'DELETE_TODO':
      return {todos: state.todos.filter(todo => todo.id !== action.payload)}

    default:
      return state;
  }
}
