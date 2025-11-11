import React, {useState} from 'react';
import './App.css';
import Todoitem from "./components/TodoItem";
import NewTodoForm from "./components/NewTodoForm";

type ITodo = {
  id: string,
  title: string,
  completed: boolean,
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<string[]>([]);
  const [] = useState<ITodo | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const addTodo = () => {
    setTodos([text, ...todos]);
    setText('');
  }

  return (
    <div className="App">
      <NewTodoForm value={text} onChange={handleInput} handleClick={addTodo}/>
      <Todoitem id='111' completed={false} title='firsttodo' style={{border: '1px solid white'}}/>
    </div>
  );
}

export default App;
