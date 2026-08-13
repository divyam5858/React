import React, { Component } from 'react'

class Q16Temperature extends Component {

  change=(data)=>{

    let celsius=data.target.value

    let fahrenheit=(celsius*9/5)+32

    this.setState({
      celsius,
      fahrenheit
    })

  }

  state={
    celsius:"",
    fahrenheit:""
  }

  render() {

    return (

      <div className='card'>

        <h2>16 Temperature Converter</h2>

        <input
          type="text"
          placeholder='Enter Celsius'
          onChange={this.change}
        />

        <h1>{this.state.fahrenheit} °F</h1>

      </div>

    )
  }
}

export default Q16Temperature