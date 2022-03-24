import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import TodoList from './TodoList.js';
import TodoInput from './TodoInput.js';
// import FilterButton from './FilterButton.js';

import DATA from './task_data.js';


//import FILTER_MAP from './filter_data.js';

function App() {
  
  const [tasks, setTasks] = useState(DATA);
  
  /*
  const [filter, setFilter] = useState('All');

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map(name => (
    <FilterButton 
      key={name} 
      name={name} 
      isPressed={name === filter}
      setFilter={setFilter}
    />
    ));
  */
  
  const addTask = (title, desc) => {
    const uniqueIdKey = "task-" + nanoid();
    const newTask = { id: uniqueIdKey, title: title, desc: desc, completed: false, key: uniqueIdKey }
    setTasks([...tasks, newTask]);
  }
  
  const editTask = (id, newTitle, newDesc) => {
    const editedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, title: newTitle, desc: newDesc }
      } 
      return task;
    })
    setTasks(editedTasks);
  }
  
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      } 
      return task;
    })
    setTasks(updatedTasks);
  }
  
  const deleteTask = (id) => {
    const deleteId = id;
    const newTasks = tasks.filter(task => task.id !== deleteId);
    setTasks(newTasks);
  }
  
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>DAILY TASKS</h1>
      <TodoInput addTasks={addTask}/>
      <div style={{textAlign: "center"}}>
      {/*
      {filter}
      {filterList}
      */}
      {/*
      <button>ALL</button>
      <button>ACTIVE</button>
      <button>COMPLETED</button>
      */}
      </div>
      <TodoList 
        tasks={tasks}
        //filter={filter}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;
