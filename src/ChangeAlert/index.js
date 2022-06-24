import React from 'react';
import { withStorageListener } from './withStorageListener';

function ChangeAlert({ show, toggleShow }) {
    if(!show) return null;
    return (
        <div>
            <p>Parece que hay nuevos cambios</p>
            <button onClick={toggleShow} >Volver a cargar la información</button>
        </div>
    );
}

const ChangeAlertWithStoragelListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStoragelListener };
