import React, { useEffect, useState } from 'react'
import Header from './Header'
import UserList from './UserList'
import axios from 'axios'

const UserFeed = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios
        .get('https://randomuser.me/api/?results=10')
        .then(response=>{
            const data=response.data.results;
            setData(data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='user-feed'>
        <Header title={'UserList'}/>
        <div className="row d-flex justify-content-center">
          {data.map((item, index) => (
            <UserList key={index} item={item} />
          ))}
        </div>
      </div>

  )
}

export default UserFeed
