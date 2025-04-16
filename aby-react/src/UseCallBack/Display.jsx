import React, { useEffect, useState } from 'react'

export const Display = ({items}) => {
    let [recData,setRecData] = useState([]);

useEffect(()=> {
    console.log("trigger");
    setRecData(items())    
},[items])

  return (
    <div>
      {
      recData.map((value,index)=>{
        return <p key={index}>{value}</p>
      })
      }
    </div>
  )
}
