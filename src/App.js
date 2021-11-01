import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Tarea1', completed: false },
  { text: 'Tarea2', completed: false },
  { text: 'Tarea3', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [todos, setTodos] = React.useState(defaultTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {todos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed={todo.completed} 
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
