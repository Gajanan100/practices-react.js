import React,{ useRef } from 'react'

const UseRefss = () => {

     const data=  useRef(null)

     const submitUser = () =>{
                     
      const userData=  data.current.value;
      console.log(userData);
      
     }

  return (
    <form action='' onSubmit={submitUser}>
        <label htmlFor='name'>Enter A User Name :- </label>
        <input type='text' id='name' ref={data} /><br/><br/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default UseRefss