import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <h3>{todo.name}</h3>
      <p>{todo.desc}</p>
    </div>
  )
}

export default Todo;