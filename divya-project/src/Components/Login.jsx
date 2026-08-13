import React from 'react'
import { Link } from 'react-router-dom';

let Login = () => {
  return (
    <div>
     <h1>Login PAGE</h1><br></br>
    
      <label>Username: </label><input type="text"></input> <br></br><br></br>
      <label>Password:</label><input type="text"></input><br></br><br></br>
      <button><Link to  = '/home' >Login</Link></button>
      <button><Link to  = '/Signup'>New User?</Link></button>

    </div>
  )
}

export default Login;

