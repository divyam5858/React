import React from 'react'

const Profilepicture = () => {
    const url = "src/assets/profile.jpeg"
    const handleclick =(e)=>{
        alert('ouchhhh')
        e.target.style.display="none" //image disappears
    }
  return (
    <div>
      <img onClick={(e)=>handleclick(e)} src={url} alt="image loading...." />
    </div>
  )
}

export default Profilepicture
