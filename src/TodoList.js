import React from 'react';

import Todo from './Todo.js';

const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      {
        todos.map((todo) => {
        return(
          <Todo 
            id={todo.id}
            todo={todo}
            key={todo.key}
            completed={todo.completed}
          />
        )
        })
      }
    </React.Fragment>
  )
}

export default TodoList; 