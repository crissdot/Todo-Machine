import React from 'react';

function CreateTodoButton() {
    const addTodo = () => {
        alert('Test');
    };

    return (
        <button onClick={addTodo} >+</button>
    );
}

export { CreateTodoButton };