import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import User from './User'

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        axios.get(`${props.url}/api/users`)
            .then((response) => {
                const userList = response.data
                setUsers(userList);
            })
            .catch((error) => {
                setErrorMessage(error.message);
            })
    }, []);

    const userComponents = users.map((user) => {
        return (<User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            level={user.level}
            member_since={user.member_since}
            plan={user.plan}
            workout_count={user.workout_count}
            sesh_count={user.sesh_count}
            ant_count={user.ant_count}
        />)
    });

    return (
        <div>
            {errorMessage ? <p>{errorMessage}</p> : ''}
            {userComponents}
        </div>
    )
}

Users.propTypes = {
    url: PropTypes.string.isRequired
}

export default Users;