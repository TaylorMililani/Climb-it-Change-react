import React from 'react';
import './SetTask.css'

const SetTask = (props) => {

    return (
        <div className="task-card">
            {props.name}
            {props.complete ? <p>Completed!</p> : <button className="complete" onClick={(event) => props.markComplete(event, props.id)}>Mark Complete</button>}
        </div>
    )
}

export default SetTask;