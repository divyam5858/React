import React, { Component } from 'react'

class Q8LikeButton extends Component {

    count=()=>{
        this.setState({count:this.state.count+1})
    }

    state={count:0}

  render() {
    return (
      <div className='card'>

        <h2>8 Like Button</h2>

        <h1>Likes:{this.state.count}</h1>

        <button onClick={this.count}>
          Like
        </button>

      </div>
    )
  }
}

export default Q8LikeButton