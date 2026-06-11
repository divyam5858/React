import React, { Component } from 'react'

class Q20DisableButton extends Component {

  submit = () => {

    this.setState({

      disabled: true

    })

  }

  state = {

    disabled: false

  }

  render() {

    return (

      <div className='card'>

        <h2>20 Disable Button</h2>

        <button

          onClick={this.submit}

          disabled={this.state.disabled}

        >

          {

            this.state.disabled

            ? "Button disabled"

            : "Submit"

          }

        </button>

      </div>

    )
  }
}

export default Q20DisableButton