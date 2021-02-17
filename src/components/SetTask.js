import React, {useState} from 'react';
import './SetTask.css'

const SetTask = (props) => {
    console.log(props.task.complete)
    console.log(props.complete)
    const [complete, setComplete] = useState(props.complete)
    const toggleComplete = (event) => {
        setComplete(!complete)
        props.markComplete(event, props.id)
    }
    return (
        <div className="task-card">
            <p>{props.name}</p>
            {complete ? <p>Completed!</p> : <button className="complete" onClick={(event) => toggleComplete(event)}>Mark Complete</button>}
        </div>
    )
}

export default SetTask;