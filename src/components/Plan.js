import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PlanDetails from './PlanDetails'


const Plan = (props) => {
    // const [workout, setWorkout] = useState({})
    // const [sesh, setSesh] = useState({})
    // const [ant, setAnt] = useState({})
    const [plan, setPlan] = useState([])
    // if (props.user) {
    //     if (props.user.level === 'Beginner') {
            
    //     }
    // }
    // const content = props.user ? <p>{props.user.name}</p> : <p>please sign in</p>
    useEffect(() => {
        const data = {email: props.user.email}
        axios.post(`${props.url}/get-plan`, {data: data})
        .then(res => {
            const planList = res.data
            setPlan(planList)
            console.log('success')
            console.log(plan)
        })
        .catch(error => {
            console.log(error.data)
            console.log('error')
        })
    }, [])

    const planComponents = 
            <PlanDetails
                key={plan.id}
                pull={plan[0]}
                push={plan[1]} 
                hip={plan[2]}
                core={plan[3]}
                warm_up={plan[4]}
                projecting={plan[5]}
                cool_down={plan[6]}
                ant1={plan[7]}
                ant2={plan[8]}
                ant3={plan[9]}
                ant4={plan[10]}
            />
        
    
    return (
        <div>
            <h3>Your Weekly Climbing Plan</h3>
            {planComponents}
        </div>
    )
}

export default Plan;