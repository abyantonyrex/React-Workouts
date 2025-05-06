import React from "react";
import { Link } from "react-router-dom";
import "../NavPages/css/Login.css";
export const Register = () => {
  return (
    <div className="login-form-container">
      <div className="login-form-wrapper">
      <div className="login-form">
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Name" /> <br />
          <input type="text" placeholder="Username" /> <br />
          <input type="password" placeholder="Password" /> <br />
          <button type="submit">Register</button> <br />
          <Link to="/login">Already have an account</Link>
        </form>
      </div>
    </div>
    </div>
  );
};
