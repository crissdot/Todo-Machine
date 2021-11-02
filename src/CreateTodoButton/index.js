import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton(props) {
    const addTodo = () => {
        props.setOpenModal(true);
    };

    return (
        <button className="CreateTodoButton" onClick={addTodo} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
        </button>
    );
}

export { CreateTodoButton };