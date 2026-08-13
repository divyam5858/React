import React,{useState} from 'react'


const Mycomponent = () => {
const [name,setName]=useState("Divyashree Mallarapu")
const [age, setAge]=useState(0)
const [isEmployed, setisEmployed] = useState(false)

const updatename =()=>{
    setName('diii')
}
const incage =()=>{
    setAge(age+1)
}

const toggleIsEmployed =()=>{
    setisEmployed(!isEmployed)
}
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updatename}>Update Name</button>

      <p>Age:{age}</p>
      <button onClick={incage}>inc age</button>
      
      <p>Is employed: {isEmployed? "YES" : "NO" }</p>
       <button onClick={toggleIsEmployed}>Employed</button>

      
    </div>
  )
}

export default Mycomponent
