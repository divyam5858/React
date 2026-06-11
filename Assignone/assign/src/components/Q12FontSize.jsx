import React, { Component } from 'react'

class Q12FontSize extends Component {

  size=()=>{
    this.setState({font:this.state.font+1})
  }

  state={
    content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dignissimos molestias cupiditate deleniti officiis assumenda architecto, totam quasi saepe tenetur.",
    font:16
  }

  render() {

    return (

      <div className='card'>

        <h2>12 Font Size Increase</h2>

        <p style={{fontSize:this.state.font}}>
          {this.state.content}
        </p>

        <button onClick={this.size}>
          Click
        </button>

      </div>

    )
  }
}

export default Q12FontSize