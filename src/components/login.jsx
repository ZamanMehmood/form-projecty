import React from "react";
// import Home from './Home';
import { useNavigate, } from "react-router-dom";

const Login = () => {
    let navigate = useNavigate();
  

  return (
    <div>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <h2>I am login page</h2>
      <button onClick={() => navigate("/")} className="btn-success">
        Go Back{" "}
      </button>
    </div>
  );
};

export default Login;
