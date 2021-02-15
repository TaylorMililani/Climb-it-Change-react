import React from 'react';
import './Day.css'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Day = (props) => {
    return (
        <div className="day">
            <Droppable>
                <h3>{props.name}</h3>
            </Droppable>
        </div>
    )
}



export default Day;