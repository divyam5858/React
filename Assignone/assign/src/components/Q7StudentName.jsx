import React, { Component } from 'react'

class Q7StudentName extends Component {

    updating=()=>{
        this.setState({
          name:"Divyashree Mallarapu",
          status:"Your full name is updated"
        })
    }

    state={
      name:"Divya",
      status:""
    }

  render() {
    return (
      <div className='card'>

        <h2>7 Student Name</h2>

        <h1>{this.state.name}</h1>

        <h4>{this.state.status}</h4>

        <button onClick={this.updating}>
          Update
        </button>

      </div>
    )
  }
}

export default Q7StudentName