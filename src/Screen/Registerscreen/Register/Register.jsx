import React from "react";



import "./Register.css";
import RegistrationForm from "../../../components/Register/RegistrationForm";
import RegistrationInfo from "../../../components/Register/RegistrationInfo";


const Login = () => {
  return (
    <div id="main">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
        <RegistrationForm></RegistrationForm>
        <RegistrationInfo></RegistrationInfo>
    </div>
  );
};

export default Login;