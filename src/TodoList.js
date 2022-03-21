import React from 'react';

import Todo from './Todo.js';

const TodoList = ({ tasks }) => {
  return (
    <React.Fragment>
      {
        tasks.map((task) => {
        return(
          <Todo 
            id={task.id}
            task={task}
            key={task.key}
            completed={task.completed}
          />
        )
        })
      }
    </React.Fragment>
  )
}

export default TodoList; 