import React from "react";
import { Helmet } from "react-helmet-async";
const LoginInfo = () => {
  return (
    <div id="info">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div id="login-img"></div>
      <br />
      <p id="login-info-main">Stay Organised</p>
      <p id="login-info-secondary">
        Ensure that your schedule is accurate by entering new appointments or
        events into our digital calender
      </p>
    </div>
  );
};

export default LoginInfo;
