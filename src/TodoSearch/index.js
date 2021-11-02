import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <section className="TodoSearch">
            <input 
                placeholder="Busca un todo" 
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </section>
    );
}

export { TodoSearch };
