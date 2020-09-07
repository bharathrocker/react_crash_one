import React, { Component } from 'react';
import { BrowserRouter as Rounter, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './components/layout/Header';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: []
  };
  componentDidMount() {
    axios.get('http://localhost:3000/todos').then(res => {
      console.log(res.data);
      this.setState({ todos: res.data });
    });
  }

  markChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`http://localhost:3000/todos/${id}`).then(res =>
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));

  }
  addNewTodo = (title) => {
    axios.post('http://localhost:3000/todos', {
      title,
      completed: false
    }).then(res => this.setState({ todos: [...this.state.todos, res.data] }));
  }
  render() {
    return (
      <div className="App">

        <Rounter>
          <div className="Container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo onSubmit={this.addNewTodo} />
                <TodoList todos={this.state.todos} markChange={this.markChange} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About}></Route>
          </div>
        </Rounter>

      </div>
    );
  }

}

export default App;
