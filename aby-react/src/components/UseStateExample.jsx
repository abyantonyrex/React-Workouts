import React, { useState } from 'react'

export const UseStateExample1 = () => {
    let [count,setcount] = useState(0);
    function addHandeler(){
        setcount(count + 1);
    }
    function subHandeler(){
        if(count>0){
          setcount(count - 1);
        }
    }
  return (
    <>
      <h1>Everytime you Click The button Will Increase/Decrease : {count}</h1>
      {/* <button onClick={() => setcount(count + 1)}>add</button>
      <button onClick={() => setcount(count - 1)}>sub</button> */}
      <button onClick={() => addHandeler()}>add</button>
      <button onClick={() => subHandeler()}>sub</button>
      <button onClick={() => setcount(count * 2)}>mulBy2</button>
      <button onClick={() => setcount(count / 2)}>divBy2</button>
      <button onClick={() => setcount(0)}>reset</button> <br /><br /> <br /> <hr />
    </>
  )
}



export const UseStateExample2 = () => {
  let [name,setName] = useState("");
  let [gender,setGender] = useState("");
  let [course,setCourse] = useState([]);
  function changeHandeler(e){
      setName(e.target.value)
  }

  function selectHandeler(e){
    let selectedOptions =[...e.target.selectedOptions].map((data,index) => {
      return data.value
    })
    setCourse(selectedOptions)
}
  return (
    <>
      <input type="text" placeholder='Enter your name' onChange={(e) => changeHandeler(e)}/>
      <h1 style={{ color: 'blue' }}>The input name is {name}</h1>

      <input type="radio" name="gender" id="male" value="male" onClick={(e) => setGender(e.target.value)}/>
      <label htmlFor="male">male</label>

      <input type="radio" name="gender" id="female" value="female" onClick={(e) => setGender(e.target.value)}/>
      <label htmlFor="female">female</label>

      <input type="radio" name="gender" id="others" value="others" onClick={(e) => setGender(e.target.value)} />
      <label htmlFor="others">others</label>

      <h1>The User Gender is {gender}</h1>
       
      <label htmlFor="">Select Your Course</label> <br />
      <select name="" id="" multiple onChange={(e) => selectHandeler(e)}>
        <option value="Html">Html</option>
        <option value="Css">Css</option>
        <option value="Js">Js</option>
        <option value="React">React</option>
        <option value="Java">Java</option>
      </select>
      
      {
        course.map((value,index) => {
          return <h1> The Selected Course is {value}</h1>
        })
      }
      
      

    </>
  )
}




