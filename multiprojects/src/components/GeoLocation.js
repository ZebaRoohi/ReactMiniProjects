import React, { useState } from 'react'

const GeoLocation = () => {
    const[lat,setLat]=useState(null)
    const[lng,setLng]=useState(null)
    const[status,setStatus]=useState(null)

    const getLocation=()=>{
        if(!navigator.geolocation){
            setStatus('Geo location is not supported by browser')
        }else{
            setStatus('Locating....')
            navigator.geolocation.getCurrentPosition((pos)=>{
                setStatus(null)
                setLat(pos.coords.latitude)
                setLng(pos.coords.longitude)
            },()=>{
                setStatus('Unable to retrieve your location')
            })
        }
    }
  return (
    <div>
      <button onClick={getLocation}>Get Location</button>
      <h1>Coordinates</h1>
      <p>{status}</p>
      {lat && <p>Latitude:{lat}</p>}
      {lng &&<p>Longitude:{lng}</p>}
    </div>
  )
}

export default GeoLocation
