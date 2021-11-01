import React from 'react';

function TodoItem(props) {
    const onComplete = () => {
        alert('La tarea ' + props.text + ' ha sido completada');
    };
    const onDelete = () => {
        alert('La tarea ' + props.text + ' ha sido eliminada');
    }

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };