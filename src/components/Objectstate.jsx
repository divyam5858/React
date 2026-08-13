import React, { useState } from 'react'

const Objectstate = () => {
    const [car,setCar]=useState({year:2024,make:"ford",model:"mustang"})
    function handleyear(e){
        setCar(c=>({...c, year: e.target.value}))
    }
    function handlemake(e){
        setCar(c=>({...c,make:e.target.value}))
    }
    function handlemodel(e){
        setCar(c=>({...c,model:e.target.value}))
    }
  return (
    <div>
      <p>ur favourite car is: {car.year} {car.make} {car.model}</p>
      <input type="number" value ={car.year} onChange={handleyear}/> <br />
      <input type="text" value={car.make} onChange={handlemake}/> <br />
      <input type="text" value={car.model} onChange={handlemodel}/>
    </div>
  )
}

export default Objectstate
