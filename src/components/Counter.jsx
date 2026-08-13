import React, { useState } from 'react'


const Counter = () => {
    const [count, setCount]= useState(0)

    const updatecount =()=>{
        setCount(count+1)
    }
    const reset =()=>{
        setCount(0)
    }
    const decrement =()=>{
        setCount(c=>c-1) //updator function
    }

  return (
    <div>
      <p className='card'>Count: {count}</p><br />
      <button className='button' onClick={updatecount}>Increment count</button>
      <button className='button' onClick={reset}>Reset count</button>
      <button className='button' onClick={decrement}>Decrement count</button>
    </div>
  )
}

export default Counter
