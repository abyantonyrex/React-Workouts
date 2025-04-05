import React, { useState } from 'react'

export const InputUseState = () => {

    let [name,setName] = useState('');
    let [userName,setuserName] = useState('');
    let [password,setpassword] = useState('');
    let [location,setlocation] = useState('');

    function nameHandeler(e){
        setName(e.target.value)
    }
    function userNameHandeler(e){
        setuserName(e.target.value)
    }
    function passwordHandeler(e){
        setpassword(e.target.value)
    }
    function locationHandeler(e){
        setlocation(e.target.value)
    }
  return (
    <>
      
      <input type="text" placeholder='Enter your name' name='' value={name} onChange={(e)=> nameHandeler(e)} /> <br /> <br />
      <input type="text" placeholder='Enter your username' name='' value={userName} onChange={(e)=> userNameHandeler(e)} /> <br /> <br />
      <input type="text" placeholder='Enter your password' name='' value={password} onChange={(e)=> passwordHandeler(e)} /> <br /> <br />
      <input type="text" placeholder='Enter your location' name='' value={location} onChange={(e)=> locationHandeler(e)} /> <br /> <br />


      <h1> The name is {name} </h1>
      <h1> The userName is {userName} </h1>
      <h1> The password is {password} </h1>
      <h1> The location is {location} </h1>
      


      
    </>
  )
}


