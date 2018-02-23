import React, {Component} from "react";
require("./css/TodoItem.css");

class TodoItem extends Component {

 handleDelete(){
  this.props.deleteItem(this.props.item);
 }


  render(){
    return(
      <li>
        <div className="todo-item">
          <span className="item-name">{this.props.item}</span>
          <span className="item-delete" onClick={this.handleDelete.bind(this)}> x</span>
        </div>
      </li>
    );

  }

}

export default TodoItem;
