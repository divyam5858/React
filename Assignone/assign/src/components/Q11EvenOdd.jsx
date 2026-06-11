import React, {Component} from 'react'

class Q11EvenOdd extends Component{

    change=(data)=>{

        if(data.target.value%2===0){

          this.setState({
            value:data.target.value,
            content:"Even",
            body:"is"
          })

        }else{

          this.setState({
            value:data.target.value,
            content:"Odd",
            body:"is"
          })

        }

    }

    state={content:"",value:""}

    render(){

        return (

            <div className='card'>

                <h2>11 Even Odd Checker</h2>

                <input
                  type="text"
                  placeholder="Enter Number"
                  value={this.state.value}
                  onChange={this.change}
                />

                <br /> <br />

                <h1>
                  {this.state.value}
                  {" "}
                  {this.state.body}
                  {" "}
                  {this.state.content}
                </h1>

            </div>

        )
    }
}

export default Q11EvenOdd