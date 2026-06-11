import React, { Component } from "react";

class Q18ArrayState extends Component {

change=(data)=>{

this.setState({
  value:data.target.value
})

}

clicked=()=>{

 this.setState({

   fruits:[

     ...this.state.fruits,

     this.state.value

   ],

   value: ""

 })

}

state={

  fruits :["Apple", "Mango"],

  value:""

}

render (){

return (

<div className='card'>

  <h2>18 Array in State</h2>

  <h1>List of Available fruits</h1>

  <ol>

  {

   this.state.fruits.map((data, index) => {

    return <li key={index}>{data}</li>

   })

  }

  </ol>

  <input
    type="text"
    placeholder="Add fruit"
    value={this.state.value}
    onChange={this.change}
  />

  <button onClick={this.clicked}>
    Add Fruit
  </button>

</div>

);

}

};

export default Q18ArrayState;