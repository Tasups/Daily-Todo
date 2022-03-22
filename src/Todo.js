import React, { useState } from 'react';

import './Todo.css';

const Todo = ({ task, toggleTaskCompleted, deleteTask }) => {
  
  const [taskComplete, setTaskComplete] = useState(false);
  
  const handleDelete = (id) => {
    deleteTask(task.id);
  }
  
  return (
    <div className={`task-card ${taskComplete && "task-completed"}`}>
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <div style={{textAlign: "center"}}>
        <button className="edit-btn">EDIT</button>
        <button className="completed-btn" onClick={() => setTaskComplete(!taskComplete)}>COMPLETED</button>
        <button className="delete-btn" onClick={handleDelete}>DELETE</button>
      </div>
    </div>
  )
}

export default Todo;