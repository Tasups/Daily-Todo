import React, { useState } from 'react';

import './TodoInput.css';


const TodoInput = ({ addTasks }) => {
  
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }
  
  const handleDescChange = (e) => {
    setDesc(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    title.length > 0 && desc.length > 0 && addTasks(title, desc);
    setTitle("");
    setDesc("");
  }
  
   return (
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
        cols={40}
        rows={5}
        id="new-todo-desc"
        type="text"
        desc="text"
        value={desc}
        autoComplete="off"
        onChange={handleDescChange}
      />
      </div>
      <div style={{textAlign: "center"}}>
      <button className="input-submit" type="submit">ADD</button>
      </div>
    </form>
  )
}

export default TodoInput;