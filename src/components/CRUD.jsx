import React, { useState } from 'react'

const CRUD = () => {
    const [cars,setCars]=useState([])
    const [year,setYear]=useState(new Date().getFullYear())
    const [make,setMake]=useState('')
    const [model,setModel]=useState('')

    function addCar(){
        const newcar = {y:year,mk:make,ml:model}
        setCars(c=>[...c,newcar])
        setYear(new Date().getFullYear())
        setMake("")
        setModel('')

    }

    function removecar(index){
        setCars(cars.filter((e,i)=>i!==index))
    }
    function yearChange(e){
        setYear(e.target.value)
    }
    function makeChange(e){
        setMake(e.target.value)
    }
    function modelchange(e){
        setModel(e.target.value)
    }

  return (
    <div>
        <h2>List of car objects</h2>
        <ul>
            {cars.map((e,i)=><li key={i}>{e.y} {e.mk} {e.ml}<button onClick={()=>removecar(i)}>removecar</button></li>)}
        </ul>

        <input type="number" value={year} onChange={yearChange}/> <br />
        <input type="text" value={make} onChange={makeChange} placeholder='Enter Car Make' /> <br />
        <input type="text" value={model} onChange={modelchange} placeholder='Enter Car Model' />

      <button onClick={addCar}>Add Car</button>
      
    </div>
  )
}

export default CRUD
