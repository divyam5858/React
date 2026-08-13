import React, { useState } from 'react'

const Arraystate = () => {
    const [foods, setFoods]=useState(["apple","orange","mango","banana"])

    function AddFood(){
      const newFood = document.getElementById('Food').value

      document.getElementById('Food').value=""
      setFoods(f=>[...f, newFood])

    }
    function removefood(index){
      setFoods(foods.filter((_,i)=>i!==index))
    }

  return (
    <div>
      <h1>List of food</h1>
      <ul>{foods.map((foods,index)=><li key={index} onClick={()=>removefood(index)}>{foods}</li>)}</ul>

      <input type="text" id="Food" placeholder='Enter Food Name'/>
      <button onClick={AddFood}>Add Food</button>
      
    </div>
  )
}

export default Arraystate
