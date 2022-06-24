import React from 'react';
import { useStorageListener } from './useStorageListener';

function ChangeAlert({ synchronize }) {
    const { show, toggleShow } = useStorageListener(synchronize);

    if(!show) return null;
    return (
        <div>
            <p>Parece que hay nuevos cambios</p>
            <button onClick={toggleShow} >Volver a cargar la información</button>
        </div>
    );
}

export { ChangeAlert };
