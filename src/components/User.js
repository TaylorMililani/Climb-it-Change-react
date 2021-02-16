import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const User = (props) => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>level: {props.level}</p>
            <p>{props.email}</p>
            <p>{props.member_since}</p>
            <p>{props.workout_count}</p>
        </div>
    )
}

User.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    member_since: PropTypes.string.isRequired,
    plan: PropTypes.object.isRequired
}

export default User;