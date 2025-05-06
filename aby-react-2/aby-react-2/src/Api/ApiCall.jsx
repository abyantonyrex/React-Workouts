import React, { useEffect, useState } from 'react'
// import './ApiCss.css'
import axios from 'axios';
export const ApiCall = () => {
    let [name,SetName] = useState('')
    let [userName,SetUserName] = useState('')
    let [useremail,SetUserEmail] = useState('')
    let [userwebsite,SetWebsite] = useState('')
    let [database,SetDatabase] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((data)=> SetDatabase(data.data))
    }, [])

    function addHandeler() {
        axios.post('https://jsonplaceholder.typicode.com/users',{
                name:name,
                username:userName,
                email:useremail,
                website:userwebsite
            }) 
        .then(data=>{
            SetDatabase([...database,data.data])
            SetName('')
            SetUserName('')
            SetUserEmail('')
            SetWebsite('')
            alert('UserData Added Successfully')
        })
    }



    function changeHandeler(id,key,value) {
        SetDatabase((users)=>{
            return users.map((data)=>{
                return data.id===id?{...data,[key]:value}:data
            })
        })
    }


    function editHandeler(id) {
        let user = database.find((users)=>users.id === id)
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,{
           user
        })
        .then(alert('User Updated Successfully'))
    }

    function deletehandeler(id) {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(()=>{
           SetDatabase(database.filter((data)=>{
                return data.id !== id
           }))
        })
        .then(alert('User Deleted Successfully')
       )
    }


  return (
    <div>
       <center>
       <table border={3}>
        <thead>
           <tr>
           <th>S.No</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>website</th>
            <th>Actions</th>
           </tr>
        </thead>
        <tbody>
            {
                database.map((data)=>{
                    return <tr key={data.id}>
                        <td>{data.id} </td>
                        <td><input value={data.name} onChange={(e)=>changeHandeler(data.id,'name', e.target.value)} /></td>
                        <td><input value={data.username} onChange={(e)=>changeHandeler(data.id, 'username', e.target.value)} /></td>
                        <td><input value={data.email} onChange={(e)=>changeHandeler(data.id, 'email', e.target.value)} /></td>
                        <td><input value={data.website} onChange={(e)=>changeHandeler(data.id , 'website', e.target.value)} /></td>
                        <td>
                            <button onClick={()=>editHandeler(data.id)}>edit</button>
                            <button onClick={()=>deletehandeler(data.id)}>delete</button>
                        </td>
                    </tr>
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <td></td>
                <td><input type="text" placeholder='Enter a Name' onChange={(e)=>SetName(e.target.value) } value={name}/></td>
                <td><input type="text" placeholder='Enter a UserName' onChange={(e)=>SetUserName(e.target.value) } value={userName}/></td>
                <td><input type="text" placeholder='Enter a UserEmail' onChange={(e)=>SetUserEmail(e.target.value) } value={useremail}/></td>
                <td><input type="text" placeholder='Enter a Website' onChange={(e)=>SetWebsite(e.target.value) } value={userwebsite}/></td>
                <td><button onClick={()=>addHandeler()}>AddUser</button></td>
            </tr>
        </tfoot>
       </table>
       </center>
    </div>
  )
}
