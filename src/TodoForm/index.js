import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const { addTodo, setOpenModal } = React.useContext(TodoContext);
    const textAreaTodo = React.useRef();

    React.useEffect(() => {
        textAreaTodo.current.focus();
    }, [])

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
        <form className="TodoForm" onSubmit={onSubmit}>
            <label>Añade un nuevo TODO</label>
            <textarea ref={textAreaTodo} value={newTodoValue} onChange={onChange} placeholder="Comprar tacos para la cena" />
            <div className="TodoForm__buttons">
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button className="TodoForm__addButton" type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };
