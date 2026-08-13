import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [color,setcolor] = useState('green')
    const [width,setwidth]=useState(window.innerWidth)
    const[height,setheight]=useState(window.innerHeight)

    useEffect(()=>{
      document.title=`count:${count}`
    },[count,color])

    useEffect (()=>{
      window.addEventListener('resize',handleresize)
      console.log('event added')

      return ()=>{
        window.removeEventListener('resize',handleresize)
        console.log('event listener removed')
      }

    },[])

    function addcount(){
        setCount(c=>c+1)
    }
    function subcount(){
      setCount(c=>c-1)
    }
    function changeclr(){
      setcolor(c=>c==='green' ? 'red':'green')
    }
    function handleresize (){
      setwidth(window.innerWidth)
      setheight(window.innerHeight)
    }

  return (
    <div>
        <p style={{color:color}}>Count:{count}</p>
        <button onClick={addcount}>Add</button>    
        <button onClick={subcount}>Subtract</button>  
        <button onClick={changeclr}>Change color</button>

        <p>Window Height:{height}px</p>
        <p>Window Width:{width}px</p>
    </div>
  )
}

export default UseEffect