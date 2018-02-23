import React, { Component } from "react";
import ReactDOM from "react-dom";
import TodoComponent from "./TodoComponent";
import About from "./About";
import { BrowserRouter as Router, Route, Link, hashHistory} from "react-router-dom";

// Create a Component

class App extends Component {

  render(){
    return(
      <Router history={hashHistory}>
       <div>
         <Route exact path="/" component={TodoComponent}></Route>
         <Route path="/about" component={About}></Route>
       </div>
      </Router>
    );
  }

}


//place Component into html
ReactDOM.render(<App />, document.getElementById("root"));
