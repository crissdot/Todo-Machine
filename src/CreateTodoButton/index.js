import React from 'react';

function CreateTodoButton(props) {
    const addTodo = () => {
        props.setOpenModal(true);
    };

    return (
        <button onClick={addTodo} >+</button>
    );
}

export { CreateTodoButton };