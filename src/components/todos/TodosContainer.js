import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
 
  renderTodos = () => {

    return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
    
  }
  
  // Previously, key was based off the index provided by map. Now its using our randomly generated ID, and is less prone to errors in the virtual DOM. We'll need both todo.id and todo.text to be passed into Todo so we pass both down as the object, todo.
  // renderTodos = () => this.props.todos.map((todo, id) => <Todo delete={this.props.delete} key={id} text={todo} />)

  render() {
  
    return(
      <div>
        {this.renderTodos()}
      
      </div>
    );

  }

};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => 
    dispatch({type:'DELETE_TODO',  todoText})
  }
}
//now this container  has access to this.props.delete because of dispatch. it can take in an argument and send
//it ass the actions payload. then we pass this.props.delete down to Todo so that 
//each component rendered will have acess to our 'DELETE_TODO' action

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
