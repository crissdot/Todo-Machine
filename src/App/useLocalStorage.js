import React from 'react';

const initialState = ({initialValue}) =>  ({
    synchronizedItem: true,
    error: false,
    loading: true,
    item: initialValue,
});

const actionTypes = {
    error: 'ERROR',
    success: 'SUCCESS',
    save: 'SAVE',
    synchronize: 'SYNCHRONIZE',
};

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
    },
    [actionTypes.success]: {
        ...state,
        loading: false,
        error: false,
        synchronizedItem: true,
        item: payload,
    },
    [actionTypes.save]: {
        ...state,
        item: payload,
    },
    [actionTypes.synchronize]: {
        ...state,
        loading: true,
        synchronizedItem: false,
    },
});

const reducer = (state, action) => {
    return reducerObject(state, action.payload)[action.type] ?? state;
}

function useLocalStorage(itemName, initialValue = [{"completed": false, "text": "¡¡¡Crea tu primer TODO!!!"}]) {
    const [state, dispatch] = React.useReducer(reducer, initialState({initialValue}));
    const {
        synchronizedItem,
        error,
        loading,
        item,
    } = state;

    const onError = (error) => dispatch({type: actionTypes.error, payload: error});
    const onSuccess = (item) => dispatch({type: actionTypes.success, payload: item});
    const onSave = (item) => dispatch({type: actionTypes.save, payload: item});
    const onSynchronize = () => dispatch({type: actionTypes.synchronize});

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName);
                let parsedItem;

                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                } else {
                    parsedItem = JSON.parse(localStorageItem);
                }

                onSuccess(parsedItem);
            } catch (error) {
                onError(error);
            }
        }, 2000)
    }, [synchronizedItem]);

    const saveItem = (newItem) => {
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            onSave(newItem);
        } catch (error) {
            onError(error);
        }
    }

    return {
        item,
        saveItem,
        synchronizeItem: onSynchronize,
        loading,
        error
    };
}

export { useLocalStorage }
