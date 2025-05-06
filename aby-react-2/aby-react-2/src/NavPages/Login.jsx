import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../NavPages/css/Login.css";
import { useForm } from "react-hook-form";
export const Login = () => {
  let {register,handleSubmit} = useForm()
  let nav = useNavigate()

  function submit(data){
  let param = new URLSearchParams({
  userName:data.userName,
  password:data.password
})
 nav (`/?${param.toString()}`)
  }
  return (
    <div className="login-form-container">
      <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" placeholder="Username" {...register('userName')} /> <br />
          <input type="password" placeholder="Password" {...register('password')}/> <br />
          <button type="submit">Login</button> <br />
          <Link to="/register">Create an account</Link>
        </form>
      </div>
    </div>
    </div>
  );
};
