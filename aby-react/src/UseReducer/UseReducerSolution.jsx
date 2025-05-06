import React, { useReducer } from 'react'

export const UseReducerSolution = () => {
    let initialState = {
        name:'',
        userName:'',
        password:'',
        location:'',
        submit:false
    }
    let actionprops = {
        setName:'name',
        setuserName:'userName',
        setpassword:'password',
        setlocation:'location',
        setsubmit:'submit'
    }
    
    function reducer(state,action) {
        switch (action.type) {
            case actionprops.setName:
                return {...state,name:action.payload}
            case actionprops.setuserName:
                return {...state,userName:action.payload}
            case actionprops.setpassword:
                return {...state,password:action.payload}
            case actionprops.setlocation:
                return {...state,location:action.payload}
            case actionprops.setsubmit:
                return {...state,submit:action.payload}
            default:
                return ''
        }
    }

    let [state,dispatch] = useReducer(reducer,initialState)

  return (
    <>
        <label htmlFor="">Enter a name</label>
        <input type="text" placeholder='Enter a name' onChange={(e)=>dispatch ({type:actionprops.setName,payload:e.target.value})}/> <br /> <br /> 
        <label htmlFor="">Enter a userName</label>
        <input type="text" placeholder='Enter a userName' onChange={(e)=> dispatch ({type:actionprops.setuserName,payload:e.target.value})}/> <br /> <br />
        <label htmlFor="">Enter a password</label>
        <input type="text" placeholder='Enter a password' onChange={(e)=> dispatch ({type:actionprops.setpassword,payload:e.target.value})}/> <br /> <br />
        <label htmlFor="">Enter a location</label>
        <input type="text" placeholder='Enter a location' onChange={(e)=> dispatch ({type:actionprops.setlocation,payload:e.target.value})}/> <br /> <br />

        <button onClick={()=>dispatch({type:actionprops.setsubmit,payload:true})}>Submit</button>

       
                       {
                           state.submit && <div>
                            <h2>the name is {state.name}</h2>
                            <h2>the userName is {state.userName}</h2>
                            <h2>the password is {state.password}</h2>
                            <h2>the location is {state.location}</h2>
                           </div>
                       }
                    
    </>
  )
}
