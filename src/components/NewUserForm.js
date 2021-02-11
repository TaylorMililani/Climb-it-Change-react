import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

class NewUserForm extends Component {
    constructor() {
        super();
        this.state = {
            level: ''
        }
    }

    change = (event) => {
        const updatedState = this.state
        const l = event.target.name
        const v = event.target.value
        updatedState[l] = v
        this.setState(updatedState)
    }

    submit = (event) => {
        event.preventDefault();
        this.props.setLevel({
            level: this.state.level
        })
    }

    render() {
        return (
            <div className="level-form">
                <h1>Set Level</h1>
                <h4>Beginner: v0-v3</h4>
                <h4>Intermediate: v4-v7</h4>
                <h4>Advanced: v7+</h4>
                <form onSubmit={this.submit}>
                    <select 
                    name="level"
                    onChange={this.change}
                    value={this.state.level}>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>
                </form>
            </div>
        )
    }
}

NewUserForm.propTypes = {
    setLevel: PropTypes.func.isRequired
}

export default NewUserForm;