import React from 'react';
import './Task.css'

const Task = (props) => {
    
    // const completed = props.complete ? <p>Completed!</p> : <button onClick={props.markComplete}>Mark Complete</button>

    return (
        <div className="task-card">
            <button onClick={(event) => props.onClickTask(event, props.id)}>
                <p className="card__content">{props.name}</p>
                {/* {completed} */}
            </button>
        </div>
    )
}

export default Task;