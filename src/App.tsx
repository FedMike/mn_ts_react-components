import React from 'react';
import './App.css';
import Todoitem from "./components/TodoItem";

function App() {
  return (
    <div className="App">
      <Todoitem id='111' completed={false} title='222'/>
    </div>
  );
}

export default App;
