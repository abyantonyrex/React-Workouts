import React from 'react'
import { Component5 } from './Component5'
import { useContext } from 'react'
import { newContext } from './Component1'

export const Component4 = () => {
  let {age} = useContext(newContext);
  return (
    <div>
        <h1>This is from Component4</h1> 
        <h1>The age is {age}</h1><hr />
        <Component5/>
    </div>
  )
}
