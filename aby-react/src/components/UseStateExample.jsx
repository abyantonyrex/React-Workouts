import React, { useState } from 'react'

export const UseStateExample = () => {
    let [count,setcount] = useState(0);
    function addHandeler(){
        setcount(count + 1);
    }
    function subHandeler(){
        setcount(count - 1);
    }
  return (
    <>
      <h1>Everytime you Click The button Will Increase/Decrease : {count}</h1>
      {/* <button onClick={() => setcount(count + 1)}>add</button>
      <button onClick={() => setcount(count - 1)}>sub</button> */}
      <button onClick={() => addHandeler()}>add</button>
      <button onClick={() => subHandeler()}>sub</button>
    </>
  )
}
