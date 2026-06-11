import React from 'react'
import './App.css'


// form handling 

const App = () => {

  const submithandler=(e)=>{
    e.preventDefault() // prevents default behaviour
    console.log("form submitted")
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }}>

        <input type="text" placeholder='enter your name'/>
        <button>Submit</button>
        
        </form>      
    </div>
  )
}

export default App
