import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Look over the map function in JS" },
      { id: 2, content: "Complete the react to do list app" },
      { id: 3, content: "Destructuring JS" },
    ],
  };

  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center red-text">To Do List Application</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
