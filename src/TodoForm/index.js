import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext)

    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Añade un nuveo TODO</label>
            <textarea value={newTodoValue} onChange={onChange} placeholder="Comprar tacos para la cena" />
            <div>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
