import React from 'react'

const Todo = props => {
    return (
        <div>
            <span>{props.todo.text}</span>
            <button onClick={() => props.delete(props.todo.id)}>DELETE</button>
            {/* <span>{props.text} </span> */}
            {/* <button onClick={() => props.delete(props.text)}>DELETE</button> */}
        </div>
    )
}
export default Todo;

// We're providing a definition for an anonymous function. Inside the definition, we're calling props.delete, and passing in the only other prop available, props.text
// Back in our connected TodosContainer, when this delete button is clicked, the value of props.text is passed into our dispatched action as the payload