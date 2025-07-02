import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
import { useNavigate } from 'react-router-dom'
export const NavBar = () => {
  let [searchName,setSearchName] = useState("")
  let nav = useNavigate()
  function searchHandeler(e) {
    e.preventDefault()
    let param = new URLSearchParams({userSearchName:searchName})
    nav(`/?${param.toString()}`)
  }
 

  return (
    <div className='sticky-top mb-3'>
     <nav className="navbar navbarMain" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <form className="d-flex" onSubmit={(e)=> searchHandeler(e)}>
      <input className="form-control me-2 p-1" type="search" placeholder="Search" aria-label="Search"
       onChange={(e)=> setSearchName(e.target.value)}/>
      <button className="btn btn-danger me-2 p-2" type="submit">Search</button>
      <button className="btn btn-success me-2 p-1" type="button" onClick={() => {nav("/add")}}>AddUser</button>
    </form>
  </div>
</nav>
    </div>
  )
}


