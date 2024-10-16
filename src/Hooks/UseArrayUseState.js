
import React, {  useState } from 'react'

const UseArrayUseState = () => {

    let data=[
        {id:1 , name:"Gajanan", mobile:7387223660},
        {id:2 , name:"Sanket", mobile:8983353581},
        {id:3 , name:"Ajit", mobile:8983353581}
    ]

      const[empty,SetEmpty] = useState(data);
      console.log(empty);
      

    const  emptyArrays= ()=>{
        SetEmpty([empty]);
    }

    const removeEle =(id)=>{

      const newarray=empty.filter((value)=>{
        return(value.id !== id)
      })
      SetEmpty(newarray)
    }

  return (
    <div>
        {empty.map((value,index)=>{
         return(
             <h2 key={index}>{value.id} {value.name} {value.mobile}
              <button onClick={()=>removeEle(value.id)}>remove</button>
             </h2>
           
         )}
        )}

        <div>
            <button onClick={emptyArrays} className='btn btn-secondary'>Empty Array</button>
        </div>
    </div>
  )
}

export default UseArrayUseState