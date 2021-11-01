import React from 'react';

function TodoSearch({ searchValue, setSearchValue }) {
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
