import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Task from './Task'

const CalendarContent = () => {
    const tasks = ['Workout #1', 'Workout #2', 'Antagonist #1', 'Antagonist #2', 'Climbing Sesh #1', 'Climbing Sesh #2', 'Free Climb!']

    const taskCards = tasks.map((task, index) => {
        return {name: task,
                id: index
                }
    })

    const generateTasks = taskCards.map(day => {
        return <Task
            name={day.name}
            id={day.id}
            key={day.id}
        />
    })

    return (
        <div>
            {generateTasks}
        </div>
    )
}

export default CalendarContent;