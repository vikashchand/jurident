import React, { useState } from "react";

import './ContactPage.css'


import { MdOutlineMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";


function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [characterLimit] = useState(32);
  // event handler
  const handleChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleChange1 = (event) => {
    setLastName(event.target.value);
  };
  const handleChange2 = (event) => {
    setPhone(event.target.value);
  };
  const handleChange3 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange4 = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !feedback) {
      alert("Please fill in all the required fields.");
      return;
    }
  }

  return (
    <div className="container1" style={{ width: "100%" }}>
      <div style={{ width: "125%" }}>
        <h1 className="container title mt-10">CONTACT US </h1>
        <div className="container " style={{ width: "100%" }} >
          <div className="text" style={{ width: "80%", color:"black" }}>
            Let’s Connect: We’re here to help, and we’d love to hear from you!
          Whether you have a question, a comment, or just want to chat, you can
          reach out to us through the contact form on this page, or by phone,
          email, or social media.
          </div>
          <button type="button" class="btn1 inline-flex items-center justify-evenly sm:w-1/2 md:w-72 mt-6 text-white bg-yellow-600 hover:bg-yellow-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"><MdOutlineMessage></MdOutlineMessage>VIA SUPPORT CHAT</button>
          <button type="button" class="btn1 inline-flex items-center justify-evenly sm:w-1/2 md:w-72 mt-6 md:ml-12 text-white bg-yellow-600 hover:bg-yellow-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-gray-700"><FiPhone></FiPhone>VIA CALL</button>
          <div>
            <button type="button"  class="btn2 inline-flex items-center justify-center  mt-6 text-white bg-yellow-600 hover:bg-yellow-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700"><FiMail></FiMail>VIA EMAIL FORM</button>
            
          </div>
          
          <div className="formdiv grid md:grid-cols-2 md:gap-6 sm:grid-cols-1 sm:gap-12" >
          <form className="mb-6 group mt-4 mr-14 "style={{ width: "90%" , color:"white", fontSize:"12px"}} onSubmit={handleSubmit}>
          <div>
            <label className="text-black" htmlFor="fName"
            >
              FIRST NAME
            </label>
            <input
              type="text"
              id="fName"
              value={firstName}
              onChange={handleChange}
              placeholder="Enter your first name here"
              isInvalid={firstName.length > characterLimit}
            />
             <div>
              <div className="flex flex-col items-end">
                <span className="inline-flex justify-items-end  justify-center w-10 h-4  text-xs font-semibold text-black rounded-full">
                {firstName.length}/{characterLimit}
                </span>
             </div>
              
            </div>
          </div>
          <div className="text-black">
            <label htmlFor="lastName">LAST NAME</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              placeholder="Enter your last name here"
              onChange={handleChange1}
              isInvalid={lastName.length > characterLimit}
            />
         
              <div>
              <div className="flex flex-col items-end">
                <span className="inline-flex justify-items-end  justify-center w-10 h-4  text-xs font-semibold text-black  rounded-full">
                {lastName.length}/{characterLimit}
                </span>
             </div>
            </div>
          </div>
          <div className="text-black">
            <label htmlFor="phone">PHONE:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              placeholder="Enter your phone number here"
              onChange={handleChange2}
              isInvalid={phone.length > characterLimit}
            />
            <div>
              <div className="flex flex-col items-end">
                <span className="inline-flex justify-items-end  justify-center w-10 h-4  text-xs font-semibold text-black  rounded-full">
                {phone.length}/{characterLimit}
                </span>
             </div>
              
            </div>
            
          </div>
          <div className="text-black">
            <label htmlFor="email">EMAIL</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email here"
              value={email}
              onChange={handleChange3}
              isInvalid={email.length > characterLimit}
            />
            <div>
              <div className="flex flex-col items-end">
                <span className="inline-flex justify-items-end  justify-center w-10 h-4  text-xs font-semibold text-black  rounded-full">
                {email.length}/{characterLimit}
                </span>
             </div>
            </div>
          </div>
          <div className="text-black">
            <label htmlFor="feedback">FEEDBACK</label>
            <input
            className="h-32"
              type="text"
              id="feedback"
              value={feedback}
              rows={3}
              placeholder="Enter your feedback here"
              onChange={handleChange4}
              isInvalid={feedback.length > characterLimit}
            />
            <div>
              <div className="flex flex-col items-end">
                <span className="inline-flex justify-items-end  justify-center w-10 h-4  text-xs font-semibold text-black  rounded-full">
                {feedback.length}/{characterLimit}
                </span>
             </div>
            </div>
          </div>
          <button type="button" className="text-white bg-yellow-600 hover:bg-yellow-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-700 dark:border-yellow-700">SUBMIT</button>
        </form>
        <div className="mb-6 group map"style={{width:"40%",height:"60px"}}>
    
            
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119150.55857764366!2d79.07185615537055!3d12.925560220092514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1688713043344!5m2!1sen!2sin" width="200%" height="800%" style={{ border: "0" }}></iframe>
    
            
      </div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}
    
    export default ContactPage;
    
