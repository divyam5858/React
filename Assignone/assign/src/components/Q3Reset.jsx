import React, { Component } from 'react'

class Q3Reset extends Component {

  increment = ()=>{
    this.setState({count:this.state.count+1})
  }

  decrement = ()=>{
    this.setState({count:this.state.count-1})
  }

  reset =()=>{
    this.setState({count:0})
  }

  state={count:0}

  render() {
    return (
      <div className='card'>

        <h2>3 Increment Decrement Reset</h2>

        <h1>Count:{this.state.count}</h1>

        <button onClick={this.increment}>Increment</button>

        <button onClick={this.decrement}>Decrement</button>

        <button onClick={this.reset}>Reset</button>

      </div>
    )
  }
}

export default Q3Reset