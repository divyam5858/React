import React, { useEffect } from 'react'

function Timer() {
    useEffect(()=>{
        setInterval(()=>{
            console.log("executing after three seconds")
        },3000)
        clearTimeout()
    },[])
  return (
    <div>Set Timer</div>
  )
}

export default Timer;
