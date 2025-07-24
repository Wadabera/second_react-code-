import React, { Component } from "react";

class Forma extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      comm: "",
      selection: "",
    };
  }

  handler = (event) => {
    this.setState({
      uname: event.target.value,
    });
  };

  comhandler = (event) => {
    this.setState({
      comm: event.target.value,
    });
  };

  selecthandler = (event) => {
    this.setState({
      selection: event.target.value,
    });
  };

  subhandler = (event) => {
    event.preventDefault(); // ✅ Prevent page reload
    alert(`${this.state.uname}, ${this.state.comm}, ${this.state.selection}`); // ✅ Correct access
  };

  render() {
    return (
      <div>
        <form onSubmit={this.subhandler}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.uname}
              onChange={this.handler}
            />
          </div>
          <div>
            <label>Comment</label>
            <textarea
              value={this.state.comm}
              onChange={this.comhandler}
            ></textarea>
          </div>
          <div>
            <label>Tutorial</label>
            <select value={this.state.selection} onChange={this.selecthandler}>
              <option>java script</option>
              <option>react</option>
              <option>c++</option>
              <option>java</option>
              <option>python</option>
            </select>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Forma;
