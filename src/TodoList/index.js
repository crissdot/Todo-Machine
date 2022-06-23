import React from 'react';
import './TodoList.css';

function TodoList(props) {
    const renderFunc = props.children || props.render;

    return (
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchValue.length && !props.searchedTodos.length) && props.onEmptyTodos()}
            {(!props.loading && !!props.searchValue.length && !props.searchedTodos.length) && props.onEmptySearchResults()}

            {!props.loading && props.searchedTodos.map(renderFunc)}
        </section>
    );
}

export { TodoList };
