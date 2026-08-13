import React, { useContext } from 'react'
import UseContextD from './UseContextD'
import { UserContext } from './UseContextA'


const UseContextC = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>component C</h1>
        <h2>hii this is {user}</h2>
        <UseContextD/>
    </div>
  )
}

export default UseContextC
