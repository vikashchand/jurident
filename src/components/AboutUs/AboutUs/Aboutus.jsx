import React from "react";
import lawyer from "../../../assets/lawyer.jpeg";
import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="container1">
      <div className="col1">
        <img src={lawyer} alt="lawyer" className="img-lawyer" />
      </div>
      <div className="col2">
        <h1 className="heading">About Us</h1>
        <p className="para">
          Welcome to our website! We are a team of dedicated individuals
          passionate about [describe your mission or purpose]. Our goal is to
          [describe what you aim to achieve]. At [your company/organization
          name], we strive to provide [describe your products/services]. Our
          team is committed to [describe your core values or principles]. If you
          have any questions or would like to learn more about us, feel free to
          contact us at [provide contact information].
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
