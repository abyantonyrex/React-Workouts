import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'

export const Table = () => {
let [database,setdatabase] = useState([])
let nav = useNavigate()
let location = useLocation()
let param = new URLSearchParams(location.search)
let searchName = param.get("userSearchName")

useEffect(()=> {
  if (searchName && searchName!=="") {
axios.get(`https://abyantonyrex-springboot-project.onrender.com/manager/DisplayUser/${searchName}`)
.then(res=>{
  if(res.data.length>0){
    setdatabase(res.data)
  }
  else{
    alert(`The User ${searchName}is not Found`)
  }
})
  }
  else{
    axios.get("https://abyantonyrex-springboot-project.onrender.com/manager/displayAllUser")
  .then(res=>setdatabase(res.data))
  }
},[location,searchName])

function deleteHandeler(id) {
  axios.delete(`https://abyantonyrex-springboot-project.onrender.com/manager/deleteUser/${id}`)
  .then(()=>{
    window.location.reload()
    alert("User Deleted Successfully")})
}

  return (
   
    <div>
        <table class="table table-dark table-striped">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Password</th>
      <th scope="col">location</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
      {
        database.map((value)=> {
          return <tr key={value.id}>
          <td>{value.id}</td>
          <td>{value.name}</td>
          <td>{value.userName}</td>
          <td>{value.password}</td>
          <td>{value.location}</td>
          <td>
          <button type="button" class="btn btn-outline-primary mx-2" onClick={()=> {nav(`/view/${value.id}`)}}>View</button>
          <button type="button" class="btn btn-outline-warning mx-2" onClick={()=> {nav(`/edit/${value.id}`)}}>Edit</button>
          <button type="button" class="btn btn-outline-danger mx-2" onClick={()=>deleteHandeler(value.id)}>Delete</button>
          </td>
          </tr>
        })
      }
  </tbody>
</table>
    </div>



  )
}
