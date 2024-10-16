
import React, { useState } from 'react'

const Froms = () => {

    const [email, setEmails] = useState("")
    const [password, setPassword] = useState("")
    const [allEntry, setAllEntry] = useState([])


    const submitFrom = (e) => {
        e.preventDefault();
        if(email && password){
            const newArray = {id:new Date().getTime.toString(), email: email, password: password }
            setAllEntry([...allEntry, newArray])
            console.log(newArray);
            setEmails("")
            setPassword("")
        }
        else{
            alert("Plaese fill the Data")
        }
       

    }
    

return (
    <div>
        <form action='' onSubmit={submitFrom}>
            <div>
                <label htmlFor='email'>Emails</label>
                <input type='text' name='email' id='email' placeholder='Enter A Email'
                    value={email} autoComplete='off'
                    onChange={(e) => setEmails(e.target.value)} ></input>
            </div>
            <div>
                <label htmlFor='password'>password</label>
                <input type='password' name='password' id='password' placeholder='Enter A password'
                    value={password} autoComplete='off'
                    onChange={(e) => setPassword(e.target.value)}  ></input>
            </div>
            <button type='submit'>Submit</button>
        </form>
        <div>
            {
                allEntry.map((value)=>{
                    return(
                        <div key={value.id}>
                            <p>{value.email}</p>
                            <p>{value.password}</p>

                        </div>
                    )
                    
                })
            }
        </div>

    </div>
)
}

export default Froms