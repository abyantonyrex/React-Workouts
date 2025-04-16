import React, { useCallback, useState } from 'react'
import { Display } from './Display';

export const UseCallBackExample = () => {
    let [count,setcount] = useState(0);
    let [bg,setbg] = useState(true);

    let theme = {
        backgroundColor: bg ? 'black':'white',
        color : bg ? 'white': 'black'
    }

    let newHandeler = useCallback(()=> {
        return [count + 1 ,count + 2, count + 3,count + 4];
    },[count])

  return (
    <div style={theme}>
        <input type="text" placeholder='Enter a number' onChange={(e) => setcount(parseInt(e.target.value))} />
        <button onClick={()=> setbg(!bg)}>change</button>
        <Display items={newHandeler}/>
    </div>
  )
}
