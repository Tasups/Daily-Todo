import React, { useState } from 'react';

import './App.css';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput';

import DATA from './task_data.js';


function App() {
  
  const [tasks, setTasks] = useState(DATA);

  const addTask = (name) => {
    const newTask = { id: "id", name: name, completed: false }
    setTasks([...tasks, newTask]);
  }
  
  return (
    <div className="App">
      <TodoInput addTodo={addTask}/>
      <TodoList todos={tasks} />
    </div>
  );
}

export default App;
