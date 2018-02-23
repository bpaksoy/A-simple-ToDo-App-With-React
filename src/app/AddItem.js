import React, { Component } from "react";
require("./css/AddItem.css");

class AddItem extends Component{


handleSubmit(event){
  event.preventDefault();
  let search = this.refs.newItem;
  this.props.addItem(this.refs.newItem.value);
  search.value = "";
}

  render(){
    return(
      <form id="add-todo" onSubmit={this.handleSubmit.bind(this)}>
         <input type="text" ref="newItem" required/>
         <input type="submit" value="Hit me"/>
      </form>
    );
  }
}


export default AddItem;
