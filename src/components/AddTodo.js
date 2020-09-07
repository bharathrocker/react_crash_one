import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add To Do...."
                        style={{ flex: '10', padding: '5px' }}
                        value={this.state.title}
                        onChange={this.onChange}
                    ></input>
                    <input type="submit" value="submit" className="btn" style={{ flex: '1' }}></input>
                </form>
            </div>
        )
    }
}
AddTodo.protoTypes = {
    onSubmit: PropTypes.func.isRequired
}