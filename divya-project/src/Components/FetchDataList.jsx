import React, { useState } from 'react'
import { useEffect } from 'react';

let FetchDataList =()=>{
    const [users, setUser] =useState([])

    useEffect(()=>{
        let url = "https://jsonplaceholder.typicode.com/users"
        fetch(url)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
   

    return(
        <div className="container">
            <h1>Fetch Data</h1>
            <ul>
                {users.map((e,i)=>{
                    return <li key={i}>{e.name}</li>                     
                })}
            </ul>
            
            <h1>Fetch Data</h1>
            <ol>
                {users.map((e,i)=>{
                    return <li key={i}>{e.name} - {e.email}</li>                     
                })}
            </ol>

        </div>
    )

}

export default FetchDataList;