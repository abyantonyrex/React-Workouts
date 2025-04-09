import React from 'react'
import { Component4 } from './Component4'

export const Component3 = ({name,age}) => {
  return (
    <div>
        <h1>This is from Component3</h1> <hr />
        <Component4 name={name} age={age} />
    </div>
  )
}
