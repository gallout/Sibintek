import React from 'react';

const TodoList = (props) => {
    return(
        <li className={props.className} onClick= {props.toggleTodo} >
        {props.title} 
        </li>
        )
};

export default TodoList;