import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.count = this.count.bind(this);
    this.state = {
      counter: "",
    };
  }

  count(event) {
    this.setState({
      counter: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" value={this.state.counter} onChange={this.count}></textarea>
        <div className="counter">{this.state.counter.length}</div>
      </div>
    );
  }
}

export default App;
