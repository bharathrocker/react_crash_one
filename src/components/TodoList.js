import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class TodoList extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markChange={this.props.markChange} delTodo={this.props.delTodo} />
        ));
    }

}

TodoList.protoTypes = {
    todos: PropTypes.array.isRequired,
    markChange: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default TodoList;
