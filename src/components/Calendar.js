import React, { useCallback, useReducer } from 'react';
import Day from './Day'
import Task from './Task'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Calendar.css';
import CalendarContent from './CalendarContent'
import produce from "immer";



const Calendar = () => {


const dragReducer = produce((draft, action) => {
    switch (action.type) {
      case "MOVE": {
        draft[action.from] = draft[action.from] || [];
        draft[action.to] = draft[action.to] || [];
        const [removed] = draft[action.from].splice(action.fromIndex, 1);
        draft[action.to].splice(action.toIndex, 0, removed);
      }
    }
  });

    const  tasks = [
        {name:"Workout #1", id: 1, category: "not_set"},
        {name:"Workout #2", id: 2, category: "not_set"},
        {name:"Climbing Sesh #1", id: 3, category: "not_set"},
        {name:"Climbing Sesh #2", id: 4, category: "not_set"},
        {name:"Antagonist #1", id: 5, category: "not_set"},
        {name:"Antagonist #2", id: 6, category: "not_set"},
        {name:"Free Climb!", id: 7, category: "not_set"}
    ]

    const days = [
        {name: "Todo", id: 'todo', tasks: []},
        {name: "Sunday", id: 'sunday', tasks: []},
        {name: "Monday", id: 'monday', tasks: []},
        {name: "Tuesday", id: 'tuesday', tasks: []},
        {name: "Wednesday", id: 'wednesday', tasks: []},
        {name: "Thursday", id: 'thursday', tasks: []},
        {name: "Friday", id: 'friday', tasks: []},
        {name: "Saturday", id: 'saturday', tasks: []}
    ]
   
      const [state, dispatch] = useReducer(dragReducer, {
        tasks
      });
    
      const onDragEnd = useCallback((result) => {
        if (result.reason === "DROP") {
          if (!result.destination) {
            return;
          }
          dispatch({
            type: "MOVE",
            from: result.source.droppableId,
            to: result.destination.droppableId,
            fromIndex: result.source.index,
            toIndex: result.destination.index,
          });
        }
      }, []);
    

    return (
        // <div className="calendar">
        //     <DragDropContext>
        //         <Droppable>
        //             <div className="calendar-content">
        //                 <Draggable>
        //                     {generateTasks}
        //                 </Draggable>
        //             </div>
        //             <div className="days">
        //                 {generateDays}
        //             </div>
        //         </Droppable>
        //     </DragDropContext>
        // </div>
            <div className="calender">
            
              <h1>Make your Weekly Schedule!</h1>
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="sunday" type="day">
                  {(provided) => (
                    <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                      {state.tasks?.map(({id, name}, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <p>
                                  { name }
                                </p>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable>
                {/* <Droppable droppableId="monday">
                  {(provided) => (
                    <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef}>
                      {tasks.map(({id, name}, index) => {
                        return (
                          <Draggable key={id} draggableId={id} index={index}>
                            {(provided) => (
                              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                <p>
                                  { name }
                                </p>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  )}
                </Droppable> */}
              </DragDropContext>
          </div>
    )
}




export default Calendar;

