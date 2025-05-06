import React from 'react'
import { useSelector } from 'react-redux'

export const ListView = () => {
  let userName = useSelector(state => state.Employee)
  return (
    <div>
       <ul>
       {
        userName.map((value,index)=>{
          return <li key={index}>{value}</li>
        })
       }
       </ul>
    </div>
  )
}
