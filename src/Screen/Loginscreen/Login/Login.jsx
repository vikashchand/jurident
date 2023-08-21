import React from "react";



import "./Login.css";
import LoginForm from "../../../components/Loginn/LoginForm";
import LoginInfo from "../../../components/Loginn/LoginInfo";

const Login = () => {
  return (
    <div id="main">
      <LoginForm/>
      <LoginInfo/>
    </div>
  );
};

export default Login;
