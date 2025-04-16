import React, { useEffect, useRef } from "react";

export const StoreRef = () => {
    let reference = useRef(null)
    let storeRef = useRef(null)

    useEffect (() => {
        console.log("Triggered");
    }, []);
    function changeHandeler() {
        let colors = ['red', 'blue', 'green', 'purple', 'black', 'orange']
        let ref = Math.floor(Math.random()*6);
        reference.current.style.color = colors[ref];
        storeRef.current = colors[ref];
        console.log(storeRef.current);
        
    }
  return (
    <>
      <p ref={reference}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        quidem error perspiciatis tempore facilis commodi temporibus at non
        alias sint ipsam possimus, autem quibusdam quos aperiam, incidunt
        fugiat! Accusantium, perspiciatis.
      </p>
      <button onClick={() => changeHandeler()}>ColorChange</button>
    </>
  );
};
