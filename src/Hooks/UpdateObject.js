
import React, { useState } from 'react'

const UpdateObject = () => {
    const [name,setName]= useState({id:1 , name:"Gajanan", mobile:7387223660})
    function UpdateName(e)
    {
        setName({...name, name:"Gaurava ", mobile:6566665313635})
    }
  return (
    <div>
        <h2>{name.id} {name.name} {name.mobile}</h2>
        <button onClick={UpdateName}>Update</button>
    </div>
  )
}

export default UpdateObject