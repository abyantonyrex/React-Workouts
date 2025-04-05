import React, { useState } from 'react'

export const InputMapUsingUsestate1 = () => {

    let userDetails = [
        {name: "abyrex",userName:'abyrex@123',password:'123',location:'medavakkam' },
        {name: "bom",userName:'bom@123',password:'345',location:'perumbakkam' },
        {name: "hak",userName:'hak@123',password:'567',location:'velachery' },
        {name: "dhanush",userName:'dhanush@123',password:'789',location:'guduvanchery' },
    ]

    let [database,setDatatbase] = useState([...userDetails]);
    let [searchName,setSearchName] = useState("");

    function searchHandeler(){
        setDatatbase(database.filter((value, index) => {
            return (
                value.name === searchName ||
                value.userName === searchName ||
                value.password === searchName ||
                value.location === searchName
            );
        }));
    }
  return (
    <>
      <input type="text"   placeholder='Enter to Search' onChange={(e)=> setSearchName(e.target.value)}/> 
      <button  onClick={()=> searchHandeler()}>Search</button>
      {
        database.map((value,index)=> {
            return(
                <>
                <p>the name is <b>{value.name}</b></p>
                <p>the userName is <b>{value.userName}</b></p>
                <p>the password is <b>{value.password}</b></p>
                <p>the location is <b>{value.location}</b></p> <hr />
                </>
            )
        })
      }
    </>
  )
}


export const InputMapUsingUsestate2 = () => {
    let userDetails = [
        {name: "abyrex",userName:'abyrex@123',password:'123',location:'medavakkam' },
        {name: "bom",userName:'bom@123',password:'345',location:'perumbakkam' },
        {name: "hak",userName:'hak@123',password:'567',location:'velachery' },
        {name: "dhanush",userName:'dhanush@123',password:'789',location:'guduvanchery' },
    ]
    
    let [database,setDatatbase] = useState([...userDetails]);
    let [searchName,setSearchName] = useState("");
    let [searchuserName,setSearchuserName] = useState("");
    let [searchpassword,setSearchpassword] = useState("");
    let [searchlocation,setSearchlocation] = useState("");
    
    function searchHandeler(){
        setDatatbase(database.filter((value, index) => {
            return (
                value.name === searchName 
            );
        }));
    }

    function addHandeler(){
        setDatatbase([...database,{name:searchName,userName:searchuserName,password:searchpassword,location:searchlocation}])
        setSearchName('')
        setSearchuserName('')
        setSearchpassword('')
        setSearchlocation('')
        
    }
  return (
    <>
        <input type="text"   placeholder='Enter to Search' onChange={(e)=> setSearchName(e.target.value)}/> 
        <button  onClick={()=> searchHandeler()}>Search</button> <br /> <br /> <hr /> <br />

        <input type="text" value={searchName}  placeholder='Enter to name' onChange={(e)=> setSearchName(e.target.value)}/> 
        <input type="text" value={searchuserName}  placeholder='Enter to username' onChange={(e)=> setSearchuserName(e.target.value)}/> 
        <input type="text" value={searchpassword}  placeholder='Enter to password' onChange={(e)=> setSearchpassword(e.target.value)}/> 
        <input type="text" value={searchlocation}  placeholder='Enter to location' onChange={(e)=> setSearchlocation(e.target.value)}/> 
      <button  onClick={()=> addHandeler()}>add</button>
      {
        database.map((value,index)=> {
            return(
                <>
                <p>the name is <b>{value.name}</b></p>
                <p>the userName is <b>{value.userName}</b></p>
                <p>the password is <b>{value.password}</b></p>
                <p>the location is <b>{value.location}</b></p> <hr />
                </>
            )
        })
      }
    </>
  )
}

 


 
