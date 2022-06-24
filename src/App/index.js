import React from 'react';
import { useTodos } from './useTodos';
import { TodoHeader } from '../TodoHeader';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { ChangeAlertWithStoragelListener } from '../ChangeAlert';

function App() {
    const {
        error, 
        loading, 
        searchedTodos, 
        completeTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal, 
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        synchronizedTodos,
    } = useTodos();

    return (
        <React.Fragment>
            <TodoHeader loading={loading}>
                <TodoCounter
                    totalTodos={totalTodos}
                    completedTodos={completedTodos}
                />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                searchValue={searchValue}
                searchedTodos={searchedTodos}
                onError={() => <p>No pudimos cargar, F</p>}
                onLoading={() => <p>Estamos cargando, por favor espere</p>}
                onEmptyTodos={() => <p>Ups, luce muy vacío, ¿por qué no creamos un TODO?</p>}
                onEmptySearchResults={() => <p>No pudimos encontrar lo que buscabas :(</p>}
            >
                {todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                )}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />

            <ChangeAlertWithStoragelListener synchronize={synchronizedTodos} />
        </React.Fragment>
    );
}

export default App;
