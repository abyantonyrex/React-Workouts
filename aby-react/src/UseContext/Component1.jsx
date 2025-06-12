import React, { createContext } from "react";
import { Component2 } from "./Component2";

export let newContext = createContext();
export const Component1 = () => {
  let name = "Aby";
  let UserName = "Aby Rex";
  let age = 22;
  let color = ["red", "blue", "green", "yellow", "white", "black"];
  let location = "chennai";
  return (
    <div>
      <newContext.Provider value={{name, age, color,location,UserName}}>
        <h1>This is from Component1</h1> <hr />
        <Component2 />
      </newContext.Provider>
    </div>
  );
};
