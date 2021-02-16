import React from 'react';
import './SetTask.css'

const SetTask = (props) => {

    return (
        <div className="task-card">
            <p className="card__content">{props.name}</p>
            {props.complete ? <p>Completed!</p> : <button className="complete" onClick={(event) => props.markComplete(event, props.id)}>Mark Complete</button>}
            
        </div>
    )
}

export default SetTask;