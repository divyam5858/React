import React from 'react'
import { useState } from 'react'

const App = () => {
  const [value,setValue]=useState(0)
  let inc=()=>{
    setValue(value+1) //async ui updtaes first but it shows earlier value
    // console.log(value)
  }
  let dec=()=>{
    setValue(value-1)
  }
  let res=()=>{
    setValue(0)
  }
  let jumpfive=()=>{
    setValue(value+5)
  }

  const [person, setname]=useState({name:"Divyashree M", age:23})
  let changename =()=>{
    const newperson={...person};
    newperson.name ='Divyashree Mallarapu'
    newperson.age =24
    setname(newperson)
  }
const [n,setn]=useState([10,20,30,40,50])
let changen =()=>{
  let newn = [...n]
  newn.push(99)
  setn(newn)
}

const [u,setu]=useState({user:"dii",age:20})
let update =()=>{
  setu(p=>({...p,age:24}))
}  

const [no,setno]=useState(10)
let change=()=>{
  // setno(no+1)
  // setno(no+1)
  // setno(no+1)
  setno(p=>(p+1)) //batch update
  setno(p=>(p+1))
  setno(p=>(p+1))
}
return (
    <div>
      <div className="update">
      <h1>{value}</h1>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
      <button onClick={res}>Reset</button>
      <button onClick={jumpfive}>Increase by 5</button>
      </div>

      <div className="updatename">
        <h1>{person.name} - {person.age}</h1>
        <button onClick={changename}>update</button>
      </div>

      <div className="arr">
        <h1>{n}</h1>
       <button onClick={changen}>click</button>
      </div>

      <div className="u">
        <h1>{u.user} - {u.age}</h1>
        <button onClick={update}>update</button>
      </div>

      <div>
        <h1>batch update</h1>
        <h1>{no}</h1>
        <button onClick={change}>click</button>
      </div>
    </div>
  )
}

export default App
