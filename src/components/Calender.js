import React, {useState, useEffect} from 'react';
import Day from './Day'


const Calender = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const generateDays = () => {
        days.map(day => {
            return {name: day,
                    id: day.id,
                    workout: '',
                    sesh: '',
                    ant: ''}
        })
    }

    return (
        <div className="days">
            {generateDays}
        </div>
    )
}

export default Calender;