
import React, { useEffect, useState } from 'react'

const UseEffects2 = () => {

 const[widthscreen,setWidthSceen] =  useState(window.screen.width)

 const actualWidth=()=>{
    // console.log(window.innerWidth);

    setWidthSceen(window.innerWidth)
    
 }

 useEffect(()=>{
    window.addEventListener("resize",actualWidth)
    return ()=>{
        window.removeEventListener("resize",actualWidth)

    }
 })
 
 
  return (
    <div>
        <h2>Actual Width of the Screen</h2>
        <p>{widthscreen}</p>
    </div>
  )
}

export default UseEffects2