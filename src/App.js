import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {

  return (
    <div className="App">
      
      {/* ex 1 */}
      <div>
        <h1>React JS</h1>
        <u><h2>ex1</h2></u>
        <h3>get data from json file on web and print the title and description</h3>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
