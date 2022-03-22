import React from 'react';

import './Todo.css';

const Todo = ({ task, toggleTaskCompleted, deleteTask }) => {
  
  const handleDelete = (id) => {
    deleteTask(task.id);
  }
  
  return (
    <div className="todo-card">
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <button className="complete-btn">EDIT</button>
      <button onClick={handleDelete} className="delete-btn">DELETE</button>
    </div>
  )
}

export default Todo;