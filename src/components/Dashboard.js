import React, {useState, useEffect} from 'react';
import SetTask from './SetTask'
import './Dashboard.css'
import axios from 'axios';

const Dashboard = (props) => {
    const [workoutCount, setWorkoutCount] = useState(props.user.workout_count)
    const [seshCount, setSeshCount] = useState(props.user.sesh_count)
    const [antCount, setAntCount] = useState(props.user.ant_count)
    
    const [tasks, setTasks] = useState([
        {name:"Workout #1", id: 1, type: 'workout', category: "not_set", complete: false},
        {name:"Workout #2", id: 2, type: 'workout', category: "not_set", complete: false},
        {name:"Climbing Sesh #1", id: 3, type: 'sesh', category: "not_set", complete: false},
        {name:"Climbing Sesh #2", id: 4, type: 'sesh', category: "not_set", complete: false},
        {name:"Antagonist #1", id: 5, type: 'ant', category: "not_set", complete: false},
        {name:"Antagonist #2", id: 6, type: 'ant', category: "not_set", complete: false},
        {name:"Free Climb!", id: 7, type: 'sesh', category: "not_set", complete: false}
    ])
    const [schedule, setSchedule] = useState(props.user.schedule)
    const updateTask = (id) => {
        const task = tasks.find((task) => id === task.id)
        const updatedTask = {name: task.name, id: task.id, type: task.type, category: task.category, complete: !task.complete}
        const newTasks = [];
        tasks.forEach((task1) => {
            if (task1.id === id) {
                newTasks.push(updatedTask);
            } else {
                newTasks.push(task1);
            }
        });
        setTasks(newTasks)
        console.log(tasks)
        const data = {
            email: props.user.email,
            id: id
        }
        axios.patch(`${props.url}/mark_complete`, {data: data})
        .then(res => {
            console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    const markComplete = (event, id) => {
        event.preventDefault();
        
        const task = tasks.find((task) => id === task.id)
        if (task.type === 'workout') {
            let count = workoutCount + 1
            setWorkoutCount(count)
            // task.complete = true
            const data = {email: props.user.email, count: count }
            // useEffect(() => 
            axios.patch(`${props.url}/workout-count`, {data: data})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message)
            }) //, [workoutCount])
        } else if (task.type === 'sesh') {
            let count = seshCount + 1
            setSeshCount(count)
            // task.complete = true
            const data = {email: props.user.email, count: count }
            axios.patch(`${props.url}/sesh-count`, {data: data})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message)
            })
        } else {
            let count = antCount + 1
            setAntCount(count)
            // task.complete = true
            const data = {email: props.user.email, count: count }
            axios.patch(`${props.url}/ant-count`, {data: data})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message)
            })
        }
        updateTask(task.id)
    }
    
    let sun = props.user.schedule[0]
    if (sun.length > 0) {
        sun = sun.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                updateTask={updateTask}
                task={task}
            />
        })
    }

    let mon = props.user.schedule[1]
    if (mon.length > 0) {
        mon = mon.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                user={props.user}
            />
        })
    }

    let tues = props.user.schedule[2]
    if (tues.length > 0) {
        tues = tues.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                task={task}
            />
        })
    }

    let wed = props.user.schedule[3]
    if (wed.length > 0) {
        wed = wed.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                task={task}
            />
        })
    }

    let thurs = props.user.schedule[4]
    if (thurs.length > 0) {
        thurs = thurs.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                task={task}
            />
        })
    }

    let fri = props.user.schedule[5]
    if (fri.length > 0) {
        fri = fri.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                task={task}
            />
        })
    }

    let sat = props.user.schedule[6]
    if (sat.length > 0) {
        sat = sat.map((task) => {
            return <SetTask 
                name={task.name}
                id={task.id}
                key={task.id}
                type={task.type}
                category={task.category}
                complete={task.complete}
                markComplete={markComplete}
                task={task}
            />
        })
    }

    return (
        <div>
            <p>{props.user.name}'s Dashboard</p>
            <p>Workouts Completed: {props.user.workout_count}</p>
            <p>Climbing Sessions Completed: {props.user.sesh_count}</p>
            <p>Antagonist Workouts Completed: {props.user.ant_count}</p>
            <div className="column">
                <h4>Sunday</h4>
                {sun}
            </div>
            <div className="column">
                <h4>Monday</h4>
                {mon}
            </div>
            <div className="column">
                <h4>Tuesday</h4>
                {tues}
            </div>
            <div className="column">
                <h4>Wednesday</h4>
                {wed}
            </div>
            <div className="column">
                <h4>Thursday</h4>
                {thurs}
            </div>
            <div className="column">
                <h4>Friday</h4>
                {fri}
            </div>
            <div className="column">
                <h4>Saturday</h4>
                {sat}
            </div>
        </div>
    )
}

export default Dashboard;