import React from "react";



import "./Register.css";
import RegistrationForm from "../../../components/Register/RegistrationForm";
import RegistrationInfo from "../../../components/Register/RegistrationInfo";


const Login = () => {
  return (
    <div id="main">
        <RegistrationForm></RegistrationForm>
        <RegistrationInfo></RegistrationInfo>
    </div>
  );
};

export default Login;