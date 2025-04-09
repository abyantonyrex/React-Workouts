import React from 'react'
import { Component4 } from './Component4'
import { useContext } from 'react'
import { newContext } from './Component1'

export const Component3 = () => {
  let {color} = useContext(newContext);
  return (
    <div>
        <h1>This is from Component3</h1> 
        {
          color.map((value)=>{
            return  <p>{value}</p>
          })
        } <hr />
        <Component4/>
    </div>
  )
}
