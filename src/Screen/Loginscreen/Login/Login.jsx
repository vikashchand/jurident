import React from "react";



import "./Login.css";
import LoginForm from "../../../components/Loginn/LoginForm";
import LoginInfo from "../../../components/Loginn/LoginInfo";

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
      <LoginForm/>
      <LoginInfo/>
    </div>
  );
};

export default Login;
