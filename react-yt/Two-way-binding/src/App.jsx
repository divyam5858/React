import React, { useState } from 'react'
import './App.css'


// Two Data Binding

const App = () => {

  const [title,settitle]=useState('')



  const submithandler=(e)=>{
    e.preventDefault() // prevents default behaviour
    console.log("form submitted by ",title)
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>

        <input type="text" placeholder='enter your name' value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <button>Submit</button>
        
        </form>      
    </div>
  )
}

export default App
