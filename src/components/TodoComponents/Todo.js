import React from 'react';

const ToDo = props => {






    return (
        <div className={`todo task ${props.item.completed ? 'completed' : ''}`}  onClick={() => {props.toggleCompleted(props.item.id)}}>
            {props.item.task}
            
        </div>
    )
}
export default ToDo;