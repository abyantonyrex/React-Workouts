import React from 'react'

export const Employee = ({ Name, Age, colors , location ,Dept }) => {
  return (
    <div>
      <h1>The Employee Name is {Name}</h1>
      <h1>The Employee Age is {Age}</h1>
      <h1>The Employee Location is {location}</h1>
      <h1>The Employee Dept is {Dept}</h1>

      <h1>The Employee Colors are:
        {colors.map((color, index) => (
          <em key={index}> {index + 1}: {color}, </em>
        ))}
      </h1>
    </div>
  )
}





