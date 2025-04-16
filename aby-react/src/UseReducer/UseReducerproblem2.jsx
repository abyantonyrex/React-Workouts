import React, { useState } from 'react'

export const UseReducerproblem2 = () => {
    let [name,setName] = useState("");
    let [userName,setuserName] = useState("");
    let [password,setpassword] = useState("");
    let [location,setlocation] = useState("");
    let [submit,setsubmit] = useState(false);
  return (
    <div>
        <label htmlFor="">Enter a name</label>
        <input type="text" placeholder='Enter a name' onChange={(e)=>setName(e.target.value)}/> <br /> <br /> 
        <label htmlFor="">Enter a userName</label>
        <input type="text" placeholder='Enter a userName' onChange={(e)=>setuserName(e.target.value)}/> <br /> <br />
        <label htmlFor="">Enter a password</label>
        <input type="text" placeholder='Enter a password' onChange={(e)=>setpassword(e.target.value)}/> <br /> <br />
        <label htmlFor="">Enter a location</label>
        <input type="text" placeholder='Enter a location' onChange={(e)=>setlocation(e.target.value)}/> <br /> <br />

        <button onClick={()=>setsubmit(!submit)}>Submit</button>

       {
          submit && <div>
                       <h2>the name is {name}</h2>
                       <h2>the userName is {userName}</h2>
                       <h2>the password is {password}</h2>
                       <h2>the location is {location}</h2>
                    </div>
       }

    </div>
  )
}
