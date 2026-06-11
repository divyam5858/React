import React, { Component } from "react";

class Q17Greeting extends Component {

  changed = (data) => {

    this.setState({
      value: data.target.value
    });

  };

  click = () => {

    this.setState({
      content: this.state.value,
      wish: "Hello "
    });

  };

  state = {
    value: "",
    wish: ""
  };

  render() {

    return (

      <div className='card'>

        <h2>17 Dynamic Greeting</h2>

        <input
          type="text"
          value={this.state.value}
          onChange={this.changed}
          placeholder="Enter Your Name"
        />

        <button onClick={this.click}>
          submit
        </button>

        <h1>
          {this.state.wish}
          {this.state.content}
        </h1>

      </div>

    );
  }
}

export default Q17Greeting;