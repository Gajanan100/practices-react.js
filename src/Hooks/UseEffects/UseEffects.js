
import React, { useEffect, useState } from 'react'

const UseEffects = () => {

     const [count,setCount] = useState(0)
 
    useEffect(()=>{
      // console.log("UseEffects O Inner Side");
        if(count>=1)
        {
          document.title= `React(${count})`
        }
        else{
          document.title= `React`

        }
        
    },[count])
    // console.log("Useffects Outer Sides");

    // function IncreaseCount()
    // {
    //     setCount(count+1)
    // }

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Onclick</button>
    </div>
  )
}

export default UseEffects