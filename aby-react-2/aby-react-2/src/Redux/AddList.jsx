import React, { useState } from 'react'
// import { ListView } from './ListView'
import { useDispatch } from 'react-redux'
import { addEmployee } from './Slice/EmployeeSlice'

export const AddList = () => {
  let [empname,setEmpName] = useState("")
  let dispatch = useDispatch()
  // let [database,setDatbase] = useState([])

  function addHandeler() {
    dispatch(addEmployee(empname))
  }

  return (
    <div>
      <input type="text" placeholder='enter a name' onChange={(e)=> setEmpName(e.target.value)}/> <br /> <br />
      <button onClick={()=>addHandeler()}>add</button>
      {/* <button onClick={()=>setDatbase([...database,empname])}>add</button> */}
      {/* <button onClick={()=>setDatbase([])}>delete</button>  */}
      {/* <ListView userName={database}/> */}
    </div>
  )
}
