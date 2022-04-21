import logo from './logo.svg';
import React, { Component } from 'react';
import AddTask from './components/addTask';
import TasksToDo from './components/tasksToDo';
import './App.css';

function App() {
  return (
      <>
      <div className="App">
        <AddTask/>
        <TasksToDo/>
      </div>
      </>
    
  );
}

export default App;
