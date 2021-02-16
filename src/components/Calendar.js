import React, { useEffect, useState } from 'react';
import Day from './Day'
import Task from './Task'
import './Calendar.css';
import CalendarContent from './CalendarContent'
import axios from 'axios';

const Calendar = (props) => {
    const tasks = [
        {name:"Workout #1", id: 1, type: 'workout', category: "not_set", complete: false},
        {name:"Workout #2", id: 2, type: 'workout', category: "not_set", complete: false},
        {name:"Climbing Sesh #1", id: 3, type: 'sesh', category: "not_set", complete: false},
        {name:"Climbing Sesh #2", id: 4, type: 'sesh', category: "not_set", complete: false},
        {name:"Antagonist #1", id: 5, type: 'ant', category: "not_set", complete: false},
        {name:"Antagonist #2", id: 6, type: 'ant', category: "not_set", complete: false},
        {name:"Free Climb!", id: 7, type: 'sesh', category: "not_set", complete: false}
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
    
    const [currentDay, setCurrentDay] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)
    const [todo, setTodo] = useState(tasks)
    const [sun, setSun] = useState([])
    const [mon, setMon] = useState([])
    const [tues, setTues] = useState([])
    const [wed, setWed] = useState([])
    const [thurs, setThurs] = useState([])
    const [fri, setFri] = useState([])
    const [sat, setSat] = useState([])
    
    const onClickTask = (event, id) => {
        event.preventDefault();
        const task = tasks.find((task) => id === task.id)
        // console.log({id})
        
        setCurrentTask(task)
    }
    // day callback , shared code, look at current stuff and if they have values - take curretntask out of todo - set day with task added
    const onClickDay = (event, id) => {
        event.preventDefault();
        const day = days.find((day) => id === day.id)
        // console.log({id})
        // console.log(task.id)
        setCurrentDay(day)
    }

    useEffect(() => {
        if (currentTask && currentDay) {
            const index = todo.findIndex((task) => task.id === currentTask.id);
            // console.log({index})
            const newTodo = todo.slice();
            if (index > -1) {
                newTodo.splice(index, 1);
            }
            setTodo(newTodo)
            // console.log(todo)
            if (currentDay.id === 'sunday') {
                const newSun = sun.slice()
                newSun.push(currentTask)
                setSun(newSun)
            } else if (currentDay.id === 'monday') {
                const newMon = mon.slice()
                newMon.push(currentTask)
                setMon(newMon)
            } else if (currentDay.id === 'tuesday') {
                const newTues = tues.slice()
                newTues.push(currentTask)
                setTues(newTues)
            } else if (currentDay.id === 'wednesday') {
                const newWed = wed.slice()
                newWed.push(currentTask)
                setWed(newWed)
            } else if (currentDay.id === 'thursday') {
                const newThurs = thurs.slice()
                newThurs.push(currentTask)
                setThurs(newThurs)
            } else if (currentDay.id === 'friday') {
                const newFri = fri.slice()
                newFri.push(currentTask)
                setFri(newFri)
            } else if (currentDay.id === 'saturday') {
                const newSat = sat.slice()
                newSat.push(newSat)
                setSat(newSat)
            } else if (currentDay.id === 'todo') {
                const newTodo = todo.slice()
                newTodo.push(currentTask)
                setTodo(newTodo)
            }
            setCurrentDay(null)
            setCurrentTask(null)
        }
    }, [currentTask, currentDay])
    
    let renderedTodos = []
    if (todo.length > 0) {
        renderedTodos = todo.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }


    let renderedSun = []
    if (sun.length > 0) {
        renderedSun = sun.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    let renderedMon = []
    if (mon.length > 0) {
        renderedMon = mon.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }
    
    let renderedTues = []
    if (tues.length > 0) {
        renderedTues = tues.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    let renderedWed = []
    if (wed.length > 0) {
        renderedWed = wed.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    let renderedThurs = []
    if (thurs.length > 0) {
        renderedThurs = thurs.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    let renderedFri = []
    if (fri.length > 0) {
        renderedFri = fri.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    let renderedSat = []
    if (sat.length > 0) {
        renderedSat = sat.map((task) => {
            return <Task 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                onClickTask={onClickTask}
            />
        })
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const data = {
            email: props.user.email,
            schedule: [sun, mon, tues, wed, thurs, fri, sat]
        }
        axios.post(`${props.url}/set-schedule`, {data: data})
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    // join table
    // save as string - turn into array - access data -janky option
    // json aggregate table
    // list of strings



    // set up arrays for each day of the day of the week/todo from usestate
    // from the task sort them and put them into each piece of state they need to go in useEffect?
    // function sort tasks into state
    // display them .map
    // function onClick a task and then clicking on day of the week heading, grabs day of week, changes category, takes task and puts into proper array
    // multiple onClick events
    // reset button

  
    const addToWorkoutCount = () => {
       // when a workout is checked off, increase workout count.
    }
  
    const addToSeshCount = () => {
  
    }
  
    const addToAntCount = () => {
  
    }




   
    return (
        <form className="calender" onSubmit={onSubmit}>
            <div className="column">
                <button id="todo" onClick={(event) => onClickDay(event, "todo")}>Todo</button>
                {renderedTodos}
            </div>
            <div className="column">
                <button id="sunday" onClick={(event) => onClickDay(event, "sunday")}>Sunday</button>
                {renderedSun}
            </div>
            <div className="column">
            <button id="monday" onClick={(event) => onClickDay(event, "monday")}>Monday</button>
                {renderedMon}
            </div>
            <div className="column">
                <button id="tuesday" onClick={(event) => onClickDay(event, "tuesday")}>Tuesday</button>
                {renderedTues}
            </div>
            <div className="column">
                <button id="wednesday" onClick={(event) => onClickDay(event, "wednesday")}>Wednesday</button>
                {renderedWed}
            </div>
            <div className="column">
                <button id="thursday" onClick={(event) => onClickDay(event, "thursday")}>Thursday</button>
                {renderedThurs}
            </div>
            <div className="column">
                <button id="friday" onClick={(event) => onClickDay(event, "friday")}>Friday</button>
                {renderedFri}
            </div>
            <div className="column">
                <button id="saturday" onClick={(event) => onClickDay(event, "saturday")}>Saturday</button>
                {renderedSat}
            </div>
            <button type="submit">Save Schedule</button>
        </form>
    )
}

export default Calendar;

