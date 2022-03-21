import React from 'react';

import './Todo.css';

const Todo = ({ task }) => {
  return (
    <div className="todo-card">
      <h3>{task.name}</h3>
      <button className="complete-btn">EDIT</button>
      <button className="delete-btn">DELETE</button>
    </div>
  )
}

export default Todo;