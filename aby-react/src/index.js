import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Test3,{ Test1,Test2 } from './components/ClassBased';
// import {FunctionTest} from './components/FunctionBased';
import reportWebVitals from "./reportWebVitals";
// import { InputUseState } from "./components/InputUseState";
import { InputMapUsingUsestate2 } from "./components/InputMapUsingUsestate";
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
    <InputUseState />*/}
    <InputMapUsingUsestate2/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
