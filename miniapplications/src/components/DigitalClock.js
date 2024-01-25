import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const[time,setTime]=useState(new Date())
    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());
        },1000);
        return ()=>clearInterval(timer)
    },[])
  return (
    <div className='time'>
        <div className='elementcontainer'>
            <h1>Digital Clock</h1>
            <div className='timeparent'>
            <div className='timecontainer'>

                <span className='timetext'>{time.toLocaleTimeString()}</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DigitalClock
