import React from 'react';

import Todo from './Todo.js';

const TodoList = ({ tasks, toggleTaskCompleted, deleteTask, editTask }) => {
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
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        )
        })
      }
    </React.Fragment>
  )
}

export default TodoList; 