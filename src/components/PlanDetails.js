import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './PlanDetails.css'

const PlanDetails = (props) => {
    return (
        <div>
            <div className="section">
                <h3>Workout</h3>
                <h4>3 Sets</h4>
                <p>{props.pull}</p>
                <p>{props.push}</p>
                <p>{props.hip}</p>
                <p>{props.core}</p>
            </div>
            <div className="section">
                <h3>Structured Climbing Session</h3>
                <p>{props.warm_up}</p>
                <p>{props.projecting}</p>
                <p>{props.cool_down}</p>
            </div>
            <div className="section">
                <h3>Antagonist Workout</h3>
                <h4>2 Sets</h4>
                <p>{props.ant1}</p>
                <p>{props.ant2}</p>
                <p>{props.ant3}</p>
                <p>{props.ant4}</p>
            </div>
        </div>
    )
}

export default PlanDetails;