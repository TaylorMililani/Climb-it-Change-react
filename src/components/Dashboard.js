import React, {useState, useEffect} from 'react';
import Task from './Task'

const Dashboard = (props) => {



    const tasks = [
        {name:"Workout #1", id: 'workout', category: "not_set"},
        {name:"Workout #2", id: 'workout', category: "not_set"},
        {name:"Climbing Sesh #1", id: 'sesh', category: "not_set"},
        {name:"Climbing Sesh #2", id: 'sesh', category: "not_set"},
        {name:"Antagonist #1", id: 'ant', category: "not_set"},
        {name:"Antagonist #2", id: 'ant', category: "not_set"},
        {name:"Free Climb!", id: 'free_climb', category: "not_set"}
    ]

    const getTasks = tasks.map((task, index) => {
        return <Task 
            name={task.name}
            id={task.id}
            key={index}
        />
    })
    return (
        <div>
            <p>dashboard</p>
            {getTasks}
        </div>
    )
}

export default Dashboard;