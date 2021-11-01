import React from 'react';

function TodoSearch() {
    const onSearchValueChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <input 
            placeholder="Busca un todo" 
            onChange={onSearchValueChange}
        />
    );
}

export { TodoSearch };
