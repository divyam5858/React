import React, { useState } from 'react'

const ColorPicker = () => {

    const [color,setColor]=useState('#FFFFFF')

    const handlecolor =(e)=>{
        setColor(e.target.value)
    }
  return (
    <div className='colorpicker'>
        <h1>color picker</h1>
        <div className="colordisplay" style={{backgroundColor:color}}>
            <p>selected color: {color}</p>
        </div>
        <label>select color</label>
        <input type='color' value={color} onChange={handlecolor}/>
      
    </div>
  )
}

export default ColorPicker
