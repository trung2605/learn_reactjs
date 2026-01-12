import React from 'react';
import {useStore, actions} from './store';

import './App.css';



function App() {  
  const [state, dispatch] = useStore();
  const { todos, todoInput } = state;

  console.log(todoInput);
  

  const handleSubmit = () => {
    dispatch(actions.addTodo(todoInput));
    dispatch(actions.setTodoInput(''));
  };

  return (
    <div className="App">
      <input
        type="text"
        value={todoInput}
        placeholder="Enter todo..."
        onChange={(e) => {
          dispatch(actions.setTodoInput(e.target.value));
        }}
      />

      <button onClick={handleSubmit}>ADD</button>

      {todos.map((todo, index) => (
        <div key={index}>
          {todo}
        </div>
      ))}
    </div>
  );
}

export default App;
