import React, {useState, useEffect} from 'react';
import Day from './Day'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const Calender = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dayCards = days.map((day, index) => {
            return {name: day,
                    id: index,
                    workout: '',
                    sesh: '',
                    ant: ''}
        })

    const generateDays = dayCards.map(day => {
        return <Day
            name={day.name}
            id={day.id}
            workout={day.workout}
            sesh={day.sesh}
            ant={day.ant}
            key={day.id}
        />
    })

    return (
        <div className="days">
            <DragDropContext>
                {generateDays}
            </DragDropContext>
        </div>
    )
}

export default Calender;