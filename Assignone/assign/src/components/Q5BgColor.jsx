import React, { Component } from 'react'

class Q5BgColor extends Component {

    toggle=()=>{
        this.setState({
          body:"Good Bye",
          bgc:"yellow",
          clr:"red"
        })
    }

    state={
      body:"Welcome",
      bgc:"blue",
      clr:"white"
    }

  render() {
    return (
      <div className='card'>

        <h2>5 Background Color</h2>

        <h1
        style={{
          backgroundColor:this.state.bgc,
          color:this.state.clr
        }}
        >
          {this.state.body}
        </h1>

        <button onClick={this.toggle}>
          Toggle
        </button>

      </div>
    )
  }
}

export default Q5BgColor