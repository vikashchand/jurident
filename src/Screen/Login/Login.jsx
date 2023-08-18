import React from "react";

import LoginForm from "../../components/Loginn/LoginForm";
import LoginInfo from "../../components/Loginn/LoginInfo";

import "./Login.css";

const Login = () => {
  return (
    <div id="main">
      <LoginForm />
      <LoginInfo />
    </div>
  );
};

export default Login;
