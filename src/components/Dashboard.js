import React, {useState, useEffect} from 'react';
import SetTask from './SetTask'

const Dashboard = (props) => {
    const [workoutCount, setWorkoutCount] = useState(props.user.workout_count)
    const [seshCount, setSeshCount] = useState(props.user.sesh_count)
    const [antCount, setAntCount] = useState(props.user.ant_count)
    const markComplete = (event, id) => {
        event.preventDefault();
        
        const task = tasks.find((task) => id === task.id)
        if (task.type === 'workout') {
            console.log(props)
            console.log(props.user)
            console.log(props.member_since)
            console.log(task)
            console.log(props.user.workout_count)
            let count = workoutCount + 1
            console.log(count)
            setWorkoutCount(count)
            console.log(workoutCount)
            task.complete = true
            console.log(task.complete)
            // const data = {email: props.user.email, count: count }
            // axios.patch()
        } else if (task.type === 'sesh') {
            let count = seshCount
            setSeshCount(count += 1)
            task.complete = true
        } else {
            let count = antCount
            setAntCount(count += 1)
            task.complete = true
        }
    }


    const tasks = [
        {name:"Workout #1", id: 'workout', category: "not_set"},
        {name:"Workout #2", id: 'workout', category: "not_set"},
        {name:"Climbing Sesh #1", id: 'sesh', category: "not_set"},
        {name:"Climbing Sesh #2", id: 'sesh', category: "not_set"},
        {name:"Antagonist #1", id: 'ant', category: "not_set"},
        {name:"Antagonist #2", id: 'ant', category: "not_set"},
        {name:"Free Climb!", id: 'free_climb', category: "not_set"}
    ]

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

    const getTasks = tasks.map((task, index) => {
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
    return (
        <div>
            <p>dashboard</p>
            {getTasks}
        </div>
    )
}

export default Dashboard;