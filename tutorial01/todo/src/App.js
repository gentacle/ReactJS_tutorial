import React, { Component } from 'react';
// import { connect } from 'react-redux'

import Header from './features/event/components/header';
import TodoInput from './features/event/components/todoInput';
import TodoItem from './features/event/components/todoItem';

import { hot } from 'react-hot-loader';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Make some dinner"},
        {id: 1, text: "plaay gameee!!"},
        {id: 2, text: "ee.....solo....party..."},
        {id: 3, text: "empty~"}
      ],
      nextId: 4
    };

    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextId, text: todoText});
    this.setState(
      {
        todos: todos,
        nextId: ++this.state.nextId
      }
    );
  }

  removeTodo(id){
    this.setState(
      {
        todos: this.state.todos.filter((todo, index)=> todo.id !== id)
      }
    );
  }
  
  render(){
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo}/>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default hot(module)(App)
