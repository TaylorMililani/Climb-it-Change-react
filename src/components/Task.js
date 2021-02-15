import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Task = (props) => {
    return (
        <div className="task-cards">
            <Draggable>
                {props.name}
            </Draggable>
        </div>
    )
}

export default Task;