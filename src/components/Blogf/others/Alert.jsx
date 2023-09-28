import React from "react";
import { Helmet } from "react-helmet-async";
const Alert = ({ alert }) => {
  return (
    <>
    <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
        
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
    )
    </>
  );
  
};

export default Alert;
