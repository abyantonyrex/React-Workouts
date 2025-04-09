import React from 'react'
import { Component3 } from './Component3'

export const Component2 = ({name,age}) => {
  return (
    <div>
        <h1>This is from Component2</h1> <hr />
        <Component3 name={name} age={age} />
    </div>
  )
}
