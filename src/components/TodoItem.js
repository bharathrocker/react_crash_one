import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkBox" onChange={this.props.markChange.bind(this, id)} /> {' '}
                    {this.props.todo.title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} >X</button>
                </p>
            </div>
        )
    }
}

TodoItem.protoTypes = {
    todos: PropTypes.array.isRequired,
    markChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
const btnStyle = {
    background: '#ff0000',
    padding: '5px 9px',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}

export default TodoItem
