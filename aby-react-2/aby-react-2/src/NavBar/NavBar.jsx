import React, { useState } from 'react'
import './NavBar.css'
import { useNavigate,Link, useLocation } from 'react-router-dom'

export const NavBar = () => {
  let [searchName, setSearchName] =useState('')
  let nav = useNavigate()
  let location = useLocation()
  let param = new URLSearchParams(location.search)
  function searchHandeler(e) {
    e.preventDefault()
    let param = new URLSearchParams({userSearchName:searchName})
    nav(`/?${param.toString()}`)
  }

  return (
    <div>
        <nav className="navbar navbar-light bg-light d-flex flex-row fixed-top">
         <div>
         <img className='logo' src="/img/abycart.png" alt="AbyCart Logo" />
         </div>
         {param.get('userName') && (
            <>
              <b> welcome {param.get('userName')}</b>
              <form onSubmit={(e)=>searchHandeler(e)}>
              <div className='d-flex flex-row search'>
               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setSearchName(e.target.value)}/>
               <button className="btn btn-success" type="submit">Search</button>
               </div>
              </form>
            </>
         )}
         <div >
            <ul className='d-flex flex-row p-1 '>
                <li className='mx-2 fs-5'><Link to="/login">Login</Link></li>
                <li className='mx-2 fs-5'><Link to="/register">Register</Link></li>
                <li className='mx-2 fs-5'><Link to="/contact">Contact Us</Link></li>
                <li className='mx-2 fs-5'><Link to="/about">About Us</Link></li>
            </ul>
         </div>
        </nav>
    </div>
  )
}
