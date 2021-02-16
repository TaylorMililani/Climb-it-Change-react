import React from 'react';
import './Task.css'

const Task = (props) => {
    
    // const completed = props.complete ? <button onClick={props.markComplete}>Mark Complete</button> :
    // <p>Completed!</p>

    return (
        <div className="task-card">
            <p className="card__content">{props.name}</p>
            {/* {completed} */}
        </div>
    )
}

export default Task;