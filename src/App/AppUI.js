import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoForm } from '../TodoForm';
import { Modal } from '../Modal';

function AppUI() {
    const {error, loading, searchedTodos, searchValue, completeTodo, deleteTodo, openModal, setOpenModal} = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>No pudimos cargar, F</p>}
                {loading && <p>Estamos cargando, por favor espere</p>}
                {!loading && !!searchValue.length && !searchedTodos.length && <p>No pudimos encontrar lo que buscabas :(</p>}
                {!loading && !searchValue.length && !searchedTodos.length && <p>Ups, luce muy vacío, ¿por qué no creamos un TODO?</p>}

                {!loading && searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton setOpenModal={setOpenModal} />
        </React.Fragment>
    );
}

export { AppUI }
