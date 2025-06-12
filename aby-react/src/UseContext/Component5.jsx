import React, { useContext } from 'react'
import { newContext } from './Component1'

export const Component5 = () => {
  let {name} = useContext(newContext);
  let {UserName} = useContext(newContext);
 
  return (
    <div>
        <h1>This is from Component5</h1>
        <h1>The name is {name}</h1>
        <h1>The name is {UserName}</h1>
    </div>
  )
}
