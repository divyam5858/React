import React from "react";

let Card =(props)=>{
   
    return(
        <div className='card'>
        <h1>{props.user} {props.age}</h1>
        <img src={props.img} alt="image loading...." />
        <p>{props.p}</p>
        <button>View Profile</button>
      </div>

    )
}

export default Card;


