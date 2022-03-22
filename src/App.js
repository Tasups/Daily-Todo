import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput';

import DATA from './task_data.js';


function App() {
  
  const [tasks, setTasks] = useState(DATA);
  
  const toggleTaskCompleted = (id) => {
    console.log(tasks[0]);
  }

  const addTask = (name) => {
    const uniqueIdKey = "task-" + nanoid();
    const newTask = { id: uniqueIdKey, name: name, completed: false, key: uniqueIdKey }
    setTasks([...tasks, newTask]);
  }
  
  const deleteTask = (id) => {
    const deleteId = id;
    const newTasks = tasks.filter(task => task.id !== deleteId);
    setTasks(newTasks);
  }
  
  return (
    <div className="App">
      <TodoInput addTasks={addTask}/>
      <button>ALL</button>
      <button>ACTIVE</button>
      <button>COMPLETED</button>
      <TodoList 
        tasks={tasks}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
