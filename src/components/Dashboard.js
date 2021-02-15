import React, {useState, useEffect} from 'react';

const Dashboard = (props) => {
    const [user, setUser] = useState(null)
    const [workoutCount, setWorkoutCount] = useState([0])
    const [seshCount, setSeshCount] = useState([0])
    const [antCount, setAntCount] = useState([0])
  
    const addToWorkoutCount = () => {
       // when a workout is checked off, increase workout count.
    }
  
    const addToSeshCount = () => {
  
    }
  
    const addToAntCount = () => {
  
    }
    return (
        <div>
            <p>dashboard</p>
        </div>
    )
}

export default Dashboard;