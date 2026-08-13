import React, { Component } from 'react'

class Q1Counter extends Component {

  increment = ()=>{
    this.setState({count:this.state.count+1})
  }

  state={count:0}

  render() {
    return (
      <div className='card'>

        <h2>1 Counter</h2>

        <h1>Count:{this.state.count}</h1>

        <button onClick={this.increment}>
          Increment
        </button>

      </div>
    )
  }
}

export default Q1Counter