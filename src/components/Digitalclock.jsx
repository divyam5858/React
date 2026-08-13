import React, { useEffect, useState } from 'react'
import  '../index.css'

const Digitalclock = () => {
    const [Time ,setTime]=useState(new Date())
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(intervalId)
        }
        
    },[])

    function formatTime (){
        let hours = Time.getHours()
        const minutes = Time.getMinutes()
        const seconds=Time.getSeconds()
        const meridium = hours>=12 ? "PM": "AM"

        hours = hours%12 || 12
        return `${padzero(hours)}:${padzero(minutes)}:${padzero(seconds)} ${padzero(meridium)}`
    }

    function padzero(number){
        return (number<10 ?'0':"" )+number
    }
  return (
    <div className='clockcontainer'>

        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
      
    </div>
  )
}

export default Digitalclock
