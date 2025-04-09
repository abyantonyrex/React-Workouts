import React from 'react'
import { Component5 } from './Component5'

export const Component4 = ({name,age}) => {
  return (
    <div>
        <h1>This is from Component4</h1> <hr />
        <Component5 name={name} age={age} />
    </div>
  )
}
