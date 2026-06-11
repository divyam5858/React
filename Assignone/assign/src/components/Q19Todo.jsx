import React, { Component } from "react";

class Q19Todo extends Component {

  WorkVal = (data) => {

    this.setState({
      work: data.target.value
    });

  };

  
  Timeval = (data) => {

    this.setState({
      Time: data.target.value
    });

  };

 addTodo=()=>{

    this.setState({

      todo:[

        ...this.state.todo,

        {

          work:this.state.work,

          Time:this.state.Time

        }

      ],

      work:"",

      Time:""

    })

  }

  state = {

    work: "",

    Time: "",

    todo: [],

  };

  render() {

    return (

      <div className='card'>

        <h2>19 Todo List</h2>

        <h1>My To-Do List</h1>

        <ol>

          {

            this.state.todo.map((e, index) => {

              return (

                <li key={index}>

                  {e.work}-{e.Time}

                </li>

              )

            })

          }

        </ol>

        <input
          type="text"
          placeholder="Add Work"
          value={this.state.work}
          onChange={this.WorkVal}
        />

        <input
          type="text"
          placeholder="Add Time"
          value={this.state.Time}
          onChange={this.Timeval}
        />

        <button onClick={this.addTodo}>
          Add To-Do
        </button>

      </div>

    );
  }
}

export default Q19Todo;