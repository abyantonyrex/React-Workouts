import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const UseFormExample = () => {
    let {register,handleSubmit,formState:{errors}} = useForm()
    let [details,setDetails] = useState()

    function submit(e) {
        setDetails(e)
    }

    let colorStyle={color:"red"}

  return (
    <div>

       <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="">Enter a name</label>
        <input type="text" placeholder='Enter a name' {...register('name',{required:"pls enter the field",
            minLength:{
                value:3,
                message:'pls enter above 3 letters'
                }})}/> 

        {errors.name && <label style={colorStyle}>{errors.name.message}</label>} <br /> <br />

        <label htmlFor="">Enter a userName</label>
        <input type="text" placeholder='Enter a userName' {...register('userName',{required:"pls enter the field",
            minLength:{
                value:5,
                message:'pls enter above 5 letters'
                }})}/>  
        {errors.userName && <label style={colorStyle}>{errors.userName.message}</label>}<br /> <br />

        <label htmlFor="">Enter a password</label>
        <input type="text" placeholder='Enter a password' {...register('password', {
            required: "pls enter the field",
            pattern: {
                value: 4,
                message: 'pls enter the correct password'
            }
        })}/>  
        {errors.password && <label style={colorStyle}>{errors.password.message}</label>}<br /> <br />
        
        <label htmlFor="">Enter a location</label>
        <input type="text" placeholder='Enter a location' {...register('location',{required:"pls enter the field",
            minLength:{
                value:3,
                message:'pls enter correct location'
                }})}/>  
        {errors.location && <label style={colorStyle}>{errors.location.message}</label>}<br /> <br />

        <button type='submit'>Submit</button>
       </form>

       {
          details && <div>
           <h2>the name is {details.name}</h2>
           <h2>the userName is {details.userName}</h2>
           <h2>the password is {details.password}</h2>
           <h2>the location is {details.location}</h2>
          </div>
        }

    </div>
  )
}
