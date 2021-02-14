import React from 'react';
import './Day.css'

const Day = (props) => {
    return (
        <div className="day">
            <h3>{props.name}</h3>
        </div>
    )
}



export default Day;