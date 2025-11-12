import React, {useState, useEffect} from 'react';
import './App.css';
import {Todo} from './types';
import Todoitem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: new Date().toString(),
      title: text,
      completed: false,
    }
    setTodos([newTodo, ...todos]);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((data: Todo[]) => {
        setTodos(data)
      })
  }, []);

  return (
    <div className="App">
      <NewTodoForm handleClick={addTodo}/>
      <Todoitem id='111' completed={false} title='firsttodo' style={{border: '1px solid white'}}/>
    </div>
  );
}

export default App;
