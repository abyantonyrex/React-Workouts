import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Test3,{ Test1,Test2 } from './components/ClassBased';
// import {FunctionTest} from './components/FunctionBased';
import reportWebVitals from "./reportWebVitals";
// import { Component1 } from "./PropsDrilling/Component1";
// import { Component1 } from "./UseContext/Component1"
// import { ColorChange } from "./UseReference examples/ColorChange";
// import { StoreRef } from "./UseReference examples/StoreRef";
// import { SlowMemo } from "./UseMemo/SlowMemo";
// import { UseCallBackExample } from "./UseCallBack/UseCallBackExample";
// import { UseReducerProblem } from "./UseReducer/UseReducerProblem";
import { UseReducerproblem2 } from "./UseReducer/UseReducerproblem2";
// import { InputUseState } from "./components/InputUseState";
// import { InputMapUsingUsestate2 } from "./components/InputMapUsingUsestate";
// import { UseEffectsExample } from "./components/UseEffectsExample";
// import Employee from './components/Employee';
// import EmployeeDetails from './components/EmployeeDetails';
// import { UseStateExample1 } from './components/UseStateExample';
// import { UseStateExample2 } from './components/UseStateExample';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Test1/>
    <Test2/>
    <Test3/> 
    <FunctionTest/> 
    <EmployeeDetails/> 
    <UseStateExample1/>
    <UseStateExample2/> 
    <InputUseState />
    <InputMapUsingUsestate2/>
    <UseEffectsExample/>
    <Component1/>
    <Component1/>
    <ColorChange/>
    <StoreRef/>
    <SlowMemo/>
    <UseCallBackExample/>
    <UseReducerProblem/>*/}
    <UseReducerproblem2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
