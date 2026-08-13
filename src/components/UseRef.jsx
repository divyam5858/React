import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
  
    const ref = useRef(0)
    const inref = useRef(null)

    function handleClick(){
        ref.current++
        console.log(ref.current)

        inref.current.focus()
        inref.current.style.backgroundColor ='yellow'
        
    }

    useEffect(()=>{
        console.log('component rendered')
    })

  return (
    <div>
        <button onClick={handleClick}>click me</button>
        <input type="text" ref={inref}/>
    </div>
  )
}

export default UseRef