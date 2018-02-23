import React, { Component } from "react";
import TodoItem from "./TodoItem";
import AddItem from "./AddItem";
import { Link } from "react-router-dom";
require("./css/index.css");

// Create a Component

class TodoComponent extends Component {

constructor(){
  super();
  this.state = {
    todos: ["wash up", "eat cheese", "take a nap"]
  };
 }

deleteItem(item){
  const updatedTodos = this.state.todos.filter(val => {
      return item !== val
  })
  this.setState({
    todos: updatedTodos
  })
}

addItem(item){
 const updatedTodos = this.state.todos;
 updatedTodos.push(item);
 this.setState({
   todos: updatedTodos
 })

}

  render(){
    const todos = this.state.todos.map((item, index) => {
     return(
       <TodoItem deleteItem={this.deleteItem.bind(this)} item={item} key={index}/>
     )
    });
    return(
      <div id="to-do-list">
      <Link to="/about">About</Link>
       <p>The busiest people have the most pleasure</p>
       <ul>{todos}</ul>
       <AddItem addItem={this.addItem.bind(this)}/>
      </div>
    );
  }

}


export default TodoComponent;
