import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Workout from './Workout'
import PropTypes from 'prop-types';

const Workouts = (props) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         workouts: []
    //     }
    // }
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        axios.get(`${props.url}/api/workouts`)
        .then(response => {
            const wkList = response.data
            setWorkouts(wkList)
        })
        .catch(error => {
            console.log(error.data)
        });
    }, [])

    const getWorkouts = workouts.map(wk => {
            return (<Workout 
                id={wk.id}
                level={wk.level}
                pull={wk.pull}
                push={wk.push}
                hip={wk.hip}
                key={wk.id}
                core={wk.core}
            />)
        })
    
    return (
        <div className="workouts">
            {getWorkouts}
        </div>
    )
    
}

Workouts.propTypes = {
    url: PropTypes.string.isRequired
}

export default Workouts;