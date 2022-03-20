import './App.css';

import TodoList from 'TodoList.js';
import TodoInput from './TodoInput';


function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
