import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const NewUserForm = (props) => {
    const [level, setLevel] = useState(props.user.level);
    
    // if (props.user) {
    //     const user = props.user
    //     user.level 
    // }

    const content = props.user ? <p>{props.user.name}</p> : <p>undefined</p>

    const change = event => {
        const newLevel = event.target.value;
        setLevel(newLevel)
    };
  
    const submit = (event) => {
        event.preventDefault();
        // props.onClickCallback(level)
        // setLevel('');
        console.log('********')
        console.log(props.user.email)
        const data = {
            level: level,
            email: props.user.email
        }
        axios.patch(`${props.url}/new-user-form`, { data: data })
        .then(res => {
            console.log('********')
            console.log(res.data)
            console.log('********')
            console.log(props.user.level)
        })
        .catch(error => {
            console.log('****error****')
            console.log(error.data)
        })
    };

    return (
        <div className="level-form">
            <h1>Set Level</h1>
            <h4>Beginner: v0-v3</h4>
            <h4>Intermediate: v4-v7</h4>
            <h4>Advanced: v7+</h4>
            <form onSubmit={submit}>
                <select 
                name="level"
                onChange={change}
                value={level}>
                    <option>Beginner</option>
                    <option>Intermediate</option>
                    <option>Advanced</option>
                </select>
                <button onSubmit={submit}>Submit</button>
            </form>
            {content}
        </div>
    )

}

NewUserForm.propTypes = {
    setLevel: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired
}

export default NewUserForm;