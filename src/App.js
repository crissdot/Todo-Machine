import React from 'react';
// import './App.css';

const todos = [
  { text: 'Tarea1', completed: false },
  { text: 'Tarea2', completed: false },
  { text: 'Tarea3', completed: false },
];

function App() {
  return (
    <React.Fragment>
      {/* <TodoCounter /> */}
      <h2>Has completado 2 de 3 TODOs</h2>

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
