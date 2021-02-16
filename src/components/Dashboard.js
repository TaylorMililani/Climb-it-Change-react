import React, {useState, useEffect} from 'react';
import SetTask from './SetTask'
import './Dashboard.css'
import axios from 'axios';

const Dashboard = (props) => {
    const [workoutCount, setWorkoutCount] = useState(props.user.workout_count)
    const [seshCount, setSeshCount] = useState(props.user.sesh_count)
    const [antCount, setAntCount] = useState(props.user.ant_count)
    const tasks = [
        {name:"Workout #1", id: 1, type: 'workout', category: "not_set", complete: false},
        {name:"Workout #2", id: 2, type: 'workout', category: "not_set", complete: false},
        {name:"Climbing Sesh #1", id: 3, type: 'sesh', category: "not_set", complete: false},
        {name:"Climbing Sesh #2", id: 4, type: 'sesh', category: "not_set", complete: false},
        {name:"Antagonist #1", id: 5, type: 'ant', category: "not_set", complete: false},
        {name:"Antagonist #2", id: 6, type: 'ant', category: "not_set", complete: false},
        {name:"Free Climb!", id: 7, type: 'sesh', category: "not_set", complete: false}
    ]
    const markComplete = (event, id) => {
        event.preventDefault();
        
        const task = tasks.find((task) => id === task.id)
        if (task.type === 'workout') {
            console.log(props.user.workout_count)
            let count = workoutCount + 1
            console.log(count)
            setWorkoutCount(count)
            console.log(workoutCount)
            task.complete = true
            console.log(task.complete)
            const data = {email: props.user.email, count: count }
            axios.patch(`${props.url}/workout-count`, {data: data})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message)
            })
        } else if (task.type === 'sesh') {
            let count = seshCount + 1
            setSeshCount(count)
            task.complete = true
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
            task.complete = true
            const data = {email: props.user.email, count: count }
            axios.patch(`${props.url}/ant-count`, {data: data})
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error.message)
            })
        }
    }



    // if (todo.length > 0) {
    //     renderedTodos = todo.map((task) => {
    //         return <Task 
    //             name={task.name}
    //             id={task.id}
    //             key={task.id}
    //             type={task.type}
    //             category={task.category}
    //             complete={task.complete}
    //             markComplete={markComplete}
    //         />
    //     })
    // }
    
    // let mon = []
    // let tues = []
    // let 
    // props.user.schedule.map((day) => {
    //     return 
    // })
    // let renderedSun = []
    // if (sun.length > 0) {
    //     renderedSun = sun.map((task) => {
    //         return <Task 
    //             name={task.name}
    //             id={task.id}
    //             key={task.id}
    //             type={task.type}
    //             category={task.category}
    //             complete={task.complete}
    //             onClickTask={onClickTask}
    //         />
    //     })
    // }
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
            />
        })
    }

    return (
        <div>
            <p>{props.user.name}'s Dashboard</p>
            <p>{props.user.workout_count}</p>
            <p>{workoutCount}</p>
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