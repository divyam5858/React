import React, { useState } from "react";
import "./App.css";
const App = () => {



const submithandler=(e)=>{
    e.preventDefault()
    
    const copytask=[...task] //to hold old notes
    copytask.push({title,details}) //adds new data
    settask(copytask) //replace copy for every new data
    
    //clears the old values
    setTitle('')
    setDetails('')
}

const deletenote=(i)=>{
// console.log("note deleted")
  const copytask = [...task]
  // console.log(copytask)
  copytask.splice(i,1) //removes the element to be deleted 
  settask(copytask)
}

const [title, setTitle]=useState('')
const [details,setDetails]=useState('')

const [task,settask]=useState([])

  return (
    <div className="Container">

      <div className="addnote">
        <h1>Add Notes</h1>
        <form onSubmit={submithandler}>

          <div className="inp">
            <input
              className="head"
              type="text"
              placeholder="Enter Notes Heading"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
            />
          </div>

          <div className="inpp">
            <input className="con" type="text" placeholder="Write Details" value={details} onChange={(e)=>{
                setDetails(e.target.value)
            }} />
          </div>
          <button>Add Note</button>

        </form>
      </div>

      <div className="notes">
        <h1>Recent Notes</h1>
        {task.map((e,i)=>{
            return <div key={i} className="card">
                <h2>{e.title}</h2>
                <h4>{e.details}</h4>
                <button onClick={()=>{ deletenote(i)}
                 } >Delete</button>
            </div>
        })}  
      </div>

    </div>
  );
};

export default App;
