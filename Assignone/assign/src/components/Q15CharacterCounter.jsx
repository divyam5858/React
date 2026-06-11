import React, { Component } from 'react'

class Q15CharacterCounter extends Component {

  count=(data)=>{

        this.setState({
          Count:data.target.value.length,
          value:data.target.value
        })

  }

  state={
    value:"",
    Count:0
  }

  render() {

    return (

      <div className='card'>

        <h2>15 Character Counter</h2>

        <input
          type="text"
          value={this.state.value}
          placeholder='Enter Character'
          onChange={this.count}
        />

        <h1>{this.state.Count}</h1>

      </div>

    )
  }
}

export default Q15CharacterCounter