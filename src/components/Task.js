import React from 'react';
import './Task.css'

const Task = (props) => {

    return (
        <div>
            <button className="task-card" onClick={(event) => props.onClickTask(event, props.id)}>
                {props.name}
            </button>
        </div>
    )
}

export default Task;