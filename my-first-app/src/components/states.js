// Subscribe.js
import React, { Component } from "react";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      channel: "wada tech"
    };
  }

  changeMessage = () => {
    this.setState({
      channel: "welcome to my youtube channel"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.channel}</h1>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Subscribe;
