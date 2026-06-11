import React, { Component } from 'react'

export class Q13LightToggle extends Component {

clicktoggle=()=>{

    if(this.state.status=="BulbOFF")

    this.setState({
      src:'bulboff.jfif',
      content:"Bulb is OFF",
      status:"BulbON"
    })

   if(this.state.status=="BulbON")

    this.setState({
      src:'bulbon.jfif',
      content:"Bulb is ON",
      status:"BulbOFF"
    })

}

state={
  src:"",
  content:"",
  status:"BulbOFF"
}

  render() {

    return (

      <div className='card'>

        <h2>13 Light ON OFF</h2>

        <img src={this.state.src} alt="" />

        <h1>{this.state.content}</h1>

        <button onClick={this.clicktoggle}>
          {this.state.status}
        </button>

      </div>

    )
  }
}

export default Q13LightToggle