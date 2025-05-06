// Duplicate import removed
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditUser = () => {
  let [username, setuserName] = useState("")
  let [userUserName, setuserUserName] = useState("")
  let [userpassword, setuserPassword] = useState("")
  let [userlocation, setuserLocation] = useState("")

  let nav = useNavigate()
  let {id} = useParams()

  function editHandeler() {
    axios.put(`http://localhost:8080/manager/editById/${id}`, {
      name: username,
      userName: userUserName,
      password: userpassword,
      location: userlocation
    })
    .then(() => nav('/'))
    .catch((err) => {
      console.error("PUT error:", err);
      alert("PUT request failed! Check console for more info.");
    });
  }
  

  useEffect(()=> {
    axios.get(`http://localhost:8080/manager/getById/${id}`)
    .then(res=> {
        setuserName(res.data.name)
        setuserUserName(res.data.userName)
        setuserPassword(res.data.password)
        setuserLocation(res.data.location)
    })
  },[id]);

  return (
    <div className='d-flex justify-content-start flex-column align-items-center vh-100  bg-info '>
       <h1 className='text-dark fw-bold p-4'>Edit User</h1>
     <form className=" px-5 py-3 border rounded shadow-sm bg-warning" >
        <label htmlFor="name" className="form-label p-1 fs-4 fw-bold">Full Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={username}
          onChange={(e) => setuserName(e.target.value)}
        />
     

      
        <label htmlFor="userName" className="form-label p-1 fs-4 fw-bold">Username</label>
        <input
          type="text"
          className="form-control"
          id="userName"
          value={userUserName}
          onChange={(e) => setuserName(e.target.value)}
        />
      

      
        <label htmlFor="password" className="form-label p-1 fs-4 fw-bold">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={userpassword}
          onChange={(e) => setuserPassword(e.target.value)}
        />
     

      
        <label htmlFor="location" className="form-label p-1 fs-4 fw-bold">Location</label>
        <input
          type="text"
          className="form-control"
          id="location"
          value={userpassword}
          onChange={(e) => setuserLocation(e.target.value)}
        />

      <button type="button" className="btn btn-success m-4" width ="25px" onClick={() => editHandeler()}>Edit User</button>
      <button type="button" className="btn btn-danger " width ="25px" onClick={() => {nav('/'); }}>Back to Home</button>
    </form>
    
    </div>
  )
}
