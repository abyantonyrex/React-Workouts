import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const AddUser = () => {
  let [name,setname] = useState("")
  let [userName,setuserName] = useState("")
  let [password,setpassword] = useState("")
  let [location,setlocation] = useState("")

  let nav = useNavigate()

  function addHandeler() {
    axios.post("http://localhost:8080/manager/addSingleUser",{
      name:name,
      userName:userName,
      password:password,
      location:location
    })
    .then(() => nav("/"))
  }

  return (
    
     <div className='d-flex justify-content-start flex-column align-items-center vh-100  bg-info '>
       <h1 className='text-dark fw-bold p-4'>Add New User</h1>
     <form className=" px-5 py-3 border rounded shadow-sm bg-warning" >
        <label htmlFor="name" className="form-label p-1 fs-4 fw-bold">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
     

      
        <label htmlFor="userName" className="form-label p-1 fs-4 fw-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
        />
      

      
        <label htmlFor="password" className="form-label p-1 fs-4 fw-bold">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
     

      
        <label htmlFor="location" className="form-label p-1 fs-4 fw-bold">Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />
    

      <button type="button" className="btn btn-success m-4" width ="25px" onClick={(e) => { e.preventDefault(); addHandeler(); }}>Submit</button>
      <button type="submit" className="btn btn-danger " width ="25px" onClick={()=> {nav('/')}}>Back to Home</button>
    </form>
     </div>

  )
}
