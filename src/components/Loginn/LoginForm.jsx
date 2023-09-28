import React from "react";
import { userSchema } from "../../Screen/Loginscreen/validations/LoginValidation";
import { Link } from "react-router-dom";
import { signInAuthUserWithEmailAndPassword, signInWithFacebook, signInWithGooglePopup } from "../../utils/firebase.utils";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
const defaultFormFields = {
  email: '',
  password: ''
};


const LoginForm = () => {


  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };
  const signInWithFB = () => {
    signInWithFacebook();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      };
    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(name, value);
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div id="form">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="w-full max-w-xs">
        <form className="bg-white px-8 pt-6 pb-8 mb-4 login" onSubmit={handleSubmit}>
          <h3 id="login-intro">Log into your account</h3>
          <br />
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="johndoe@gmail.com"
              onChange={handleChange}
              name="email"
              value={email}
            />
            
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="* * * * *"
              onChange={handleChange}
              name="password"
              value={password}
            />
            
            <div id="rememberMe">
              <input
                className="border rounded"
                type="checkbox"
                id="rememberMe"
              />
              <div id="rememberText">
                <p id="rememberMain">Remember Me</p>
                <p id="rememberSub">Save my login details for next time</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <input className="login-btn" type="submit" value={"Log In"} />
          </div>
          <div id="seperator">
            <div id="line"></div> or <div id="line"></div>
          </div>
          <div id="signup-option">
            Don't have an account?{" "}
            <Link to={"/register"} id="signup">
              Sign Up
            </Link>
          </div>
          <button className="googleLog" onClick={signInWithGoogle}>Continue with Google</button>
          <button className="facebookLog" onClick={signInWithFB}>Continue with Facebook</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
