import React, { Component } from 'react'

class Q2Decrease extends Component {

  decrement = ()=>{
    this.setState({count:this.state.count-1})
  }

  state={count:10}

  render() {
    return (
      <div className='card'>

        <h2>2 Decrease</h2>

        <h1>Count:{this.state.count}</h1>

        <button onClick={this.decrement}>
          Decrement
        </button>

      </div>
    )
  }
}

export default Q2Decrease