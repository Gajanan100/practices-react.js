
import React, { useState } from 'react'

const UseStateHook = () => {

    const [change,setChange]=useState("This Is React Hooks")
    
    function changename(){
        // if(change === "This Is React Hooks") 
        //     setChange("I am Greate Aman")
        // else
        //     setChange("This Is React Hooks")

        setChange(change==="This Is React Hooks" ? "I am Greate Aman ":"This Is React Hookss")


    }

  return (
    <div>
        <h4 >{change}</h4>
        <button onClick={changename}>Click me</button>
    </div>
  )
}

export default UseStateHook