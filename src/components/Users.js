import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import User from './components/User'

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [errorMessage, setErrorMessage] = ('')

    useEffect(() => {
        axios.get(`${props.url}/users`)
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
            id={user.id}
            name={user.name}
            email={user.email}
            level={user.level}
            member_since={user.member_since}
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