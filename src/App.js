import React from 'react';
// import './App.css';
import { TodoCounter } from './TodoCounter';

const todos = [
  { text: 'Tarea1', completed: false },
  { text: 'Tarea2', completed: false },
  { text: 'Tarea3', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter />

      {/* <TodoSearch /> */}
      <input placeholder="Busca un todo" />

      {/* <TodoList> */}
        {/* {todos.map(todo => (<TodoItem />))} */}
      {/* </TodoList> */}

      {/* <CreateTodoButton /> */}
      <button>+</button>
    </React.Fragment>
  );
}

export default App;
