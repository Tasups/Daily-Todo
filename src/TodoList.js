import React from 'react';

import Todo from './Todo.js';

const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      {
        todos.map((todo) => {
        return(
          <Todo todo={todo}/>
        )
        })
      }
    </React.Fragment>
  )
}

export default TodoList; 