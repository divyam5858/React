import React, { Component } from "react";

class Q14LoginLogout extends Component {

  click = () => {

    if(this.state.content==="LogOFF"){

        this.setState({
          body:"Logged IN",
          content: "LogIN"
        });

    }

    if(this.state.content==="LogIN"){

        this.setState({
          body:"Logged Off",
          content: "LogOFF"
        });

    }

  };

  state = {
    content:"LogIN",
    body:""
  };

  render() {

    return (

      <div className='card'>

        <h2>14 Login Logout</h2>

        <h1>{this.state.body}</h1>

        <button onClick={this.click}>
          {this.state.content}
        </button>

      </div>

    );
  }
}

export default Q14LoginLogout;