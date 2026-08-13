import React, { Component } from 'react'

class Class extends Component {
    state ={count :0}
    change =()=>{ //always arrow function
        this.setState({count: this.state.count+1})
    }
  render() {
    return (
      <div>
        <p>Count is {this.state.count}</p>
        <button onClick={this.change}>Increment</button>
      </div>
    )
  }
}

export default Class
