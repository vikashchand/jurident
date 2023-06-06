import React, { useState } from "react";

import './ContactPage.css'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Badge from "react-bootstrap/Badge";
import { MdOutlineMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import empty from "../../assets/empty.jpg";

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

  return (
    <div className="container" style={{ width: "100%" }}>
      <div style={{ width: "50%" }}>
        <h1 className="title">CONTACT US</h1>
        <div className="content" style={{ width: "200%" }}>
          Let’s Connect: We’re here to help, and we’d love to hear from you!
          Whether you have a question, a comment, or just want to chat, you can
          reach out to us through the contact form on this page, or by phone,
          email, or social media.{" "}
        </div>
<br></br>
<br></br>
<br></br>

        <div className="btn">
        <div className="button mt-5 mb-3">
          <Button style={{ width: "45%" }} className="mx-2" variant="dark">
            <MdOutlineMessage className="mx-1"> </MdOutlineMessage>
            VIA SUPPORT CHAT
          </Button>

          <Button style={{ width: "45%" }} className="mx-2" variant="dark">
            <FiPhone className="mx-1"></FiPhone>VIA CALL
          </Button>
        </div>

      

        <Button
          style={{ width: "100%" }}
          className="mx-2"
          variant="outline-dark"
        >
          <FiMail className="mx-1"></FiMail>
          VIA EMAIL FORM
        </Button>
        </div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">FIRST NAME</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              placeholder="lorem ipsum"
              rows={1}
              value={firstName}
              onChange={handleChange}
              isInvalid={firstName.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    firstName.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {firstName.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">LAST NAME</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              placeholder="lorem ipsum"
              rows={1}
              value={lastName}
              onChange={handleChange1}
              isInvalid={lastName.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    lastName.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {lastName.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">PHONE</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              placeholder="lorem ipsum"
              rows={1}
              value={phone}
              onChange={handleChange2}
              isInvalid={phone.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${phone.length > characterLimit ? "danger" : "primary"}`}
                >
                  {phone.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">EMAIL</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              placeholder="lorem ipsum"
              rows={1}
              value={email}
              onChange={handleChange3}
              isInvalid={email.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${email.length > characterLimit ? "danger" : "primary"}`}
                >
                  {email.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="label">FEEDBACK</Form.Label>
            <Form.Control
              className="text"
              as="textarea"
              placeholder="lorem ipsum"
              rows={3}
              value={feedback}
              onChange={handleChange4}
              isInvalid={feedback.length > characterLimit}
            />
            <div>
              <div className="countp">
                <Badge
                  className="mt-3 count"
                  bg={`${
                    feedback.length > characterLimit ? "danger" : "primary"
                  }`}
                >
                  {feedback.length}/{characterLimit}
                </Badge>
              </div>
            </div>
          </Form.Group>

          <Button className="mx-2 mb-4" variant="dark">
            SUBMIT
          </Button>
        </Form>
      </div>
      <div className="img">
        <img src={empty} alt="image" />
      </div>
    </div>
  );
}
    
    export default ContactPage;
    