import React,{useContext} from 'react'
import { UserContext } from './UseContextA'

const UseContextD = () => {
    const user = useContext(UserContext)
  return (
    <div>
        <h1>component D</h1>
        <h2>{`Bye..!! ${user}`}</h2>
      
    </div>
  )
}

export default UseContextD
