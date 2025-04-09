import React from 'react'
import { Component3 } from './Component3'
import { useContext } from 'react'
import { newContext } from './Component1'

export const Component2 = () => {
  let {location}=useContext(newContext);
  return (
    <div>
        <h1>This is from Component2</h1> 
        <h1>The location is {location}</h1><hr />
        <Component3/>
    </div>
  )
}
