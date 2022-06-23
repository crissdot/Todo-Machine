import React from 'react';
import { useLocalStorage } from './useLocalStorage';

function useTodos() {
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1');
    const [searchValue, setSearchValue] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let searchedTodos = [];

    if (searchValue.length === 0) {
        searchedTodos = todos;
    } else {
        const searchText = searchValue.toLowerCase();
        searchedTodos = todos.filter(todo => {
            const todoText = todo.text.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodo = todos.find(todo => todo.text === text);
        if(!newTodo) {
            const newTodos = [...todos];
            newTodos.push({
                completed: false,
                text,
            });
            saveTodos(newTodos)
        } else {
            alert('Parece que ese TODO ya existe :)');
        }
    };

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos)
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos)
    };

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            addTodo,
            deleteTodo,
            openModal,
            setOpenModal,
    };
}

export { useTodos };
