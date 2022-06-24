import React from 'react';

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
        const [storageChange, setStorageChange] = React.useState(false);

        React.useEffect(() => {
            window.addEventListener('storage', (change) => {
                if(change.key === 'TODOS_V1') {
                    console.log('Changes in TODOS_V1');
                    setStorageChange(true);
                }
            });
        }, []);

        const toggleShow = () => {
            props.synchronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange} 
                toggleShow={toggleShow}
            />
        );
    }
}

export { withStorageListener };
