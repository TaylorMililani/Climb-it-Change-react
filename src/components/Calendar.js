import React, { useState } from 'react';
import Day from './Day'
import Task from './Task'
import './Calendar.css';
import CalendarContent from './CalendarContent'

const Calendar = (props) => {
    // set up arrays for each day of the day of the week/todo from usestate
    // from the task sort them and put them into each piece of state they need to go in useEffect?
    // function sort tasks into state
    // display them .map
    // function onClick a task and then clicking on day of the week heading, grabs day of week, changes category, takes task and puts into proper array
    // multiple onClick events
    // reset button
    const [workoutCount, setWorkoutCount] = useState(props.user.workout_count)
    const [seshCount, setSeshCount] = useState(props.user.sesh_count)
    const [antCount, setAntCount] = useState(props.user.ant_count)
  
    // const addToWorkoutCount = () => {
    //    // when a workout is checked off, increase workout count.
    // }
  
    // const addToSeshCount = () => {
  
    // }
  
    // const addToAntCount = () => {
  
    // }

    const markComplete = (event) => {
        if (task.id === 'workout') {
            let count = workoutCount
            setWorkoutCount(count += 1)
        } else if (task.id === 'sesh') {
            let count = seshCount
            setSeshCount(count += 1)
        } else {
            let count = antCount
            setAntCount(count += 1)
        }
    }

    const [todo, setTodo] = useState([
        {name:"Workout #1", id: 'workout', category: "not_set"},
        {name:"Workout #2", id: 'workout', category: "not_set"},
        {name:"Climbing Sesh #1", id: 'sesh', category: "not_set"},
        {name:"Climbing Sesh #2", id: 'sesh', category: "not_set"},
        {name:"Antagonist #1", id: 'ant', category: "not_set"},
        {name:"Antagonist #2", id: 'ant', category: "not_set"},
        {name:"Free Climb!", id: 'sesh', category: "not_set"}
    ])
    const [sun, setSun] = useState([])
    const [mon, setMon] = useState([])
    const [tues, setTues] = useState([])
    const [wed, setWed] = useState([])
    const [thurs, setThurs] = useState([])
    const [fri, setFri] = useState([])
    const [sat, setSat] = useState([])

    const tasks = [
        {name:"Workout #1", id: 'workout', category: "not_set"},
        {name:"Workout #2", id: 'workout', category: "not_set"},
        {name:"Climbing Sesh #1", id: 'sesh', category: "not_set"},
        {name:"Climbing Sesh #2", id: 'sesh', category: "not_set"},
        {name:"Antagonist #1", id: 'ant', category: "not_set"},
        {name:"Antagonist #2", id: 'ant', category: "not_set"},
        {name:"Free Climb!", id: 'sesh', category: "not_set"}
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

    const getTasks = tasks.map((task, index) => {
        return <Task 
            name={task.name}
            id={task.id}
            key={index}
            markComplete={markComplete}
        />
    })
   
    return (
        <div className="calender">
            <div className="column">
                <h3>Todo</h3>
                {getTasks}
            </div>
            <div className="column">
                <h3>Sunday</h3>
            </div>
            <div className="column">
                <h3>Monday</h3>
            </div>
            <div className="column">
                <h3>Tusday</h3>
            </div>
            <div className="column">
                <h3>Wednesday</h3>
            </div>
            <div className="column">
                <h3>Thursday</h3>
            </div>
            <div className="column">
                <h3>Friday</h3>
            </div>
            <div className="column">
                <h3>Saturday</h3>
            </div>
        </div>
    )
}




export default Calendar;

