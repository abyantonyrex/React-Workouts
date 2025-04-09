import React from 'react'
import {Component2}  from './Component2';

export const Component1 = () => {
    let name = "Abyrex";
    let age = 22;
  return (
    <div>
        <h1>This is from Component1</h1> <hr />
        <Component2 name={name} age={age} /> 
    </div>
  )
}
