import React, { useMemo, useState } from "react";

export const SlowMemo = () => {
  let [count, setcount] = useState(0);
  let [bg, setbg] = useState("");

  let theme = {
    backgroundColor: bg ? "black" : "white",
    color: bg ? "white" : "black",
  };

  function slow(num) {
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  let memo = useMemo(() =>{
    return slow(count)
  },[count]);
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your number"
        onChange={(e) => setcount(e.target.value)}
      />
      <button onClick={(e) => setbg(!bg)}>ThemeChange</button>
      <h1 style={theme}>The count is {memo}</h1>
    </div>
  );
};
