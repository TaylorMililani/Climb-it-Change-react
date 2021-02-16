import React from 'react';
import './Task.css'

const Task = (props) => {

    return (
        <div>
            <button className="task-card" onClick={(event) => props.onClickTask(event, props.id)}>
                <p className="card__content">{props.name}</p>
            </button>
        </div>
    )
}

export default Task;