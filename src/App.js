import React, { useState } from 'react';

import './App.css';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput';


function App() {
  
  const [name, setName] = useState('');

  const addTodo = (name) => {
    alert(name);
  }
  
  return (
    <div className="App">
      <TodoInput addTodo={addTodo}/>
      {/*<TodoList/>*/}
    </div>
  );
}

export default App;
