import React, { useState } from 'react';

import './Todo.css';

const Todo = ({ task, toggleTaskCompleted, deleteTask, editTask }) => {
  
  const [taskComplete, setTaskComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  }
  
  const handleDelete = (id) => {
    deleteTask(task.id);
  };

  const handleCompletionClick = (id) => {
    setTaskComplete(!taskComplete);
    toggleTaskCompleted(id);
  };
  
  const openEditModal = () => {
    setIsOpen(true);
  };
  
  const handleEdit = (id, title, desc) => {
    editTask(title, desc);
    setIsOpen(false);
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
        isOpen && 
        <div>
          <form onSubmit={handleEdit}>
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
          value={title}
          autoComplete="off"
          onChange={handleTitleChange}
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
          value={desc}
          autoComplete="off"
          onChange={handleDescChange}
        />
        </div>
        <div style={{textAlign: "center"}}>
        <button className="input-submit" type="submit">SUBMIT</button>
        </div>
      </form>
        </div>
      }
    </div>
  );
};

export default Todo;