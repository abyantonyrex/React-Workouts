// Duplicate import removed
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const ViewPage = () => {
  let [username, setuserName] = useState("")
  let [userUserName, setuserUserName] = useState("")
  let [userpassword, setuserPassword] = useState("")
  let [userlocation, setuserLocation] = useState("")

  let nav = useNavigate()
  let {id} = useParams()

  

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
        <>
         <h1>The Details of User {username}</h1>
    <div className='d-flex flex-column align-items-center justify-content-center bg-warningdark vh-full'>
     <div className='d-flex flex-column align-items-center justify-content-center mt-5 rounded bg-info border p-4 fw-bold shadow w-50 m-auto '>
        <p className='fs-3 fw-bold p-4 text-dark '>The Name is {username}</p>
        <p className='fs-3 fw-bold p-4 text-dark '>The UserName is {userUserName}</p>
        <p className='fs-3 fw-bold p-4 text-dark '>The User password is {userpassword}</p>
        <p className='fs-3 fw-bold p-4 text-dark '>The User location is {userlocation}</p>
      <button type="button" className="btn btn-danger " width ="25px" onClick={() => {nav('/'); }}>Back to Home</button>
     </div>
    </div>
        </>
  )
}
