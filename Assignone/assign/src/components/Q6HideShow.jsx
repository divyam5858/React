import React, { Component } from 'react'

class Q6HideShow extends Component {

    hiding=()=>{

        if(this.state.btn==="Show"){
            return this.setState({
              para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima!",
              btn:"Hide"
            })
        }

        if(this.state.btn==="Hide"){
            return this.setState({
              para:"",
              btn:"Show"
            })
        }

    }

    state={
      para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, minima!",
      btn:"Hide"
    }

  render() {
    return (

      <div className='card'>

        <h2>6 Hide Show</h2>

        <p>{this.state.para}</p>

        <button onClick={this.hiding}>
          {this.state.btn}
        </button>

      </div>

    )
  }
}

export default Q6HideShow