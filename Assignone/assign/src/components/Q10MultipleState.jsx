import React, { Component } from "react";

class Q10MultipleState extends Component {

  change = (data) => {
    this.setState({ content: data.target.value });
  };

  update=()=>{
    this.setState({age:this.state.content})
  }

  state = {
    name: "Divyashree Mallarapu",
    age: 22,
    course: "BE in Artificail Intelligence and Machine Learning",
    content: "",
  };

  render() {

    return (
      <div className='card'>

        <h2>10 Multiple State Values</h2>

        <h2>{this.state.name}</h2>

        <h2>{this.state.age}</h2>

        <h2>{this.state.course}</h2>

        <input
          type="text"
          placeholder="Enter Age"
          value={this.state.content}
          onChange={this.change}
        />

        <button onClick={this.update}>
          Update Age
        </button>

      </div>
    );
  }
}

export default Q10MultipleState;