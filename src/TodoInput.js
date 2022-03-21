import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  
  const [name, setName] = useState("");
  
  const handleChange = (e) => {
    setName(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(name);
    setName("");
  }
  
   return (
    <form onSubmit={handleSubmit}>
      <h2>
        <label htmlFor="new-todo-input">
          WHAT TO DO TODAY
        </label>
      </h2>
      <input 
        id="new-todo-input"
        type="text"
        name="text"
        value={name}
        autoComplete="off"
        onChange={handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  )
}

export default TodoInput;