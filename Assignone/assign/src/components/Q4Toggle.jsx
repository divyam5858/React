import React, { Component } from 'react'

class Q4Toggle extends Component {

    toggle=()=>{

        this.setState({body:"Good Bye"})

    }

    state={body:"Welcome"}

  render() {
    return (
      <div className='card'>

        <h2>4 Toggle</h2>

        <h1>{this.state.body}</h1>

        <button onClick={this.toggle}>
          Toggle
        </button>

      </div>
    )
  }
}

export default Q4Toggle