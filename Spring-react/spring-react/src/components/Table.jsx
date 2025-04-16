import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const Table = () => {
let [database,setdatabase] = useState([])

useEffect(()=> {
  axios.get("http://localhost:8080/manager/displayAllUser")
  .then(res=>setdatabase(res.data))
},[])

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
          <button type="button" class="btn btn-outline-primary mx-2">View</button>
          <button type="button" class="btn btn-outline-warning mx-2">Edit</button>
          <button type="button" class="btn btn-outline-danger mx-2">Delete</button>
          </td>
          </tr>
        })
      }
  </tbody>
</table>
    </div>



  )
}
