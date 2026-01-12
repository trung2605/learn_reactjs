import './App.css';

import { useStore, action } from './store';

function App() {
  const [state, dispatch] = useStore(); //dùng để lấy state và dispatch từ context
  const { todo, todoInput } = state;

  const handleAdd = () => {
    dispatch(action.addTodo(todoInput));
  }

  console.log('todo:', todo);
  console.log('todoInput:', todoInput);

  return (
    <div className="App">
      <h1>To do list</h1>
      <input
        value={todoInput}
        placeholder='Add a new task'
        onChange={(e) => dispatch(action.setTodoInput(e.target.value))}
      />
      <button onClick={handleAdd}>Add</button>
      <h2>Tasks:</h2>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
