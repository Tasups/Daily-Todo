import React, { useState } from 'react';

import './Todo.css';

const Todo = ({ task, toggleTaskCompleted, deleteTask, editTask }) => {
  
  const [taskComplete, setTaskComplete] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  
  const handleTitleChange = (e) => {
    setNewTitle(e.target.value);
  }
  
  const handleDescChange = (e) => {
    setNewDesc(e.target.value);
  }
  
  const handleDelete = (id) => {
    deleteTask(task.id);
  };

  const handleCompletionClick = (id) => {
    setTaskComplete(!taskComplete);
    toggleTaskCompleted(id);
  };
  
  const openEditModal = () => {
    setIsEditing(true);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(task.id, newTitle, newDesc);
    setNewTitle("");
    setNewDesc("");
    setIsEditing(false);
  }
  
  return (
    <div className={`task-card ${taskComplete && "task-completed"}`}>
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <div style={{textAlign: "center"}}>
        <button className="edit-btn" onClick={openEditModal}>EDIT</button>
        <button className="completed-btn" onClick={handleCompletionClick}>COMPLETED</button>
        <button className="delete-btn" onClick={handleDelete}>DELETE</button>
      </div>
      
      {
        isEditing && 
        <div>
          <form onSubmit={handleSubmit}>
            <div className="input-div">
              <label
              className="input-label"
              htmlFor="new-todo-title"
            >
              Title
            </label>
            <input 
              id="new-todo-title"
              type="text"
              title="text"
              value={newTitle}
              autoComplete="off"
              onChange={handleTitleChange}
              required
            />
            </div>
            <div className="input-div">
              <label
              className="input-label"
              htmlFor="new-todo-desc"
            >
              Description
            </label>
            <textarea
              style={{resize: "none"}}
              id="new-todo-desc"
              type="text"
              desc="text"
              value={newDesc}
              autoComplete="off"
              onChange={handleDescChange}
              required
            />
            </div>
            <div style={{textAlign: "center"}}>
            <button 
              className="input-submit" 
              type="submit"
            >
              SUBMIT
            </button>
            <button 
              className="cancel-btn" 
              type="button" 
              onClick={() => setIsEditing(false)}
            >
              CANCEL
            </button>
            </div>
          </form>
        </div>
      }
      
    </div>
  );
};

export default Todo;