import React, { useEffect, useState } from 'react'

const DomManipulation = () => {
    const[title,setTitle]=useState("dii's-Project")
    useEffect(()=>{
        document.title=title
    })
  return (
    <div>Dom Manipulation</div>
  )
}

export default DomManipulation
