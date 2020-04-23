import React from 'react';
import './App.css';
import {TODOITEMS} from './TodoData';
import TodoItem from './TodoItem';

function App() {
  const todoitems = TODOITEMS.map( item => <TodoItem id={item.id} text={item.text} isCompleted={item.completed}/>)
    return (
      <div className="main">
          {todoitems}
      </div>
    );
  }
  
  export default App;