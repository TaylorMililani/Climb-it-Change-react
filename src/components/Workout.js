import React from 'react';
import PropTypes from 'prop-types';
import './Workout.css'

const Workout = (props) => {
        return (
            <div className="workouts">
                <h1>{props.level}</h1>
                <h3>{props.pull}</h3>
            </div>
        )
}

Workout.propTypes = {
    id: PropTypes.number.isRequired,
    pull: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    push: PropTypes.string.isRequired,
    hip: PropTypes.string.isRequired,
    core: PropTypes.string.isRequired
}

export default Workout;