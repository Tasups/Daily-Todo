import React, { useState } from 'react';

import Todo from './Todo.js';
import FilterButton from './FilterButton.js';

import './TodoList.css';

import FILTER_MAP from './filter_data.js';


const TodoList = ({ tasks, toggleTaskCompleted, deleteTask, editTask }) => {
  
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
  
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map(task => (
    <Todo 
      id={task.id}
      task={task}
      key={task.key}
      completed={task.completed}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  
  return (
    <React.Fragment>
      <div className="filter-btn">
        {filterList}
      </div>
    
      {taskList}
      
    </React.Fragment>
  )
}

export default TodoList; 