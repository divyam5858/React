import React, { Component } from 'react'

class Q9InputState extends Component {

    change=(data)=>{
        this.setState({content:data.target.value})
    }

    submitted=()=>{
        this.setState({sub:this.state.content})
    }

    state={content:'',sub:""}

  render() {
    return (

      <div className='card'>

        <h2>9 Input State</h2>

        <input
        type="text"
        placeholder='Enter your name'
        value={this.state.content}
        onChange={this.change}
        />

        <br /><br />

        <button onClick={this.submitted}>
          Submit
        </button>

        <h1>{this.state.sub}</h1>

      </div>
    )
  }
}

export default Q9InputState