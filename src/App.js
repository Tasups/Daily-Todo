import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput';

import DATA from './task_data.js';


function App() {
  
  const [tasks, setTasks] = useState(DATA);

  const addTask = (name) => {
    const uniqueIdKey = "task-" + nanoid();
    const newTask = { id: uniqueIdKey, name: name, completed: false, key: uniqueIdKey }
    setTasks([...tasks, newTask]);
  }
  
  const removeTask = (id) => {
    setTasks(tasks.filter(!id))
  }
  
  return (
    <div className="App">
      <TodoInput addTasks={addTask}/>
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;
