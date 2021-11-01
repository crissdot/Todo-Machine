import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            placeholder="Busca un todo" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };
