import React, { useEffect, useState } from "react";

export const UseEffectsExample = () => {
  let [count1, setcount1] = useState(0);
  let [count2, setcount2] = useState(0);
  let [count3, setcount3] = useState(0);

  useEffect(() => {
    console.log("useEffect is calling");
    return () => {
      console.log("the clean fn (cleanup fn) is calling");
    };
  }, [count1, count2]);
  return (
    <>
      <h1>The count1 is {count1}</h1>
      <button onClick={() => setcount1(count1 + 1)}>count1</button>

      <h1>The count2 is {count2}</h1>
      <button onClick={() => setcount2(count2 + 1)}>count2</button>

      <h1>The count3 is {count3}</h1>
      <button onClick={() => setcount3(count3 + 1)}>count3</button>
    </>
  );
};
