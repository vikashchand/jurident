import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithFacebook, signInWithGooglePopup } from "../../utils/firebase.utils";
import { Helmet } from "react-helmet-async";

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegistrationForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { firstName,lastName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { firstName , lastName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  let validator = true;
  

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const signInWithFB = () => {
    signInWithFacebook();
  };

  return (<>
  
    <Helmet>

      <title>Registeration</title>
      <meta name="description" content="registration form of Jurident Site" />
    </Helmet>

    <div id="form">
      <div className="w-full max-w-xs">
        <form className="bg-white px-8 pt-6 pb-8 mb-4 login" onSubmit={handleSubmit}>
          <h3 id="login-intro">Create an account</h3>
          <br />
          <button className="googleLog" onClick={signInWithGoogle}>Continue with Google</button>
          <button className="facebookLog" onClick={signInWithFB}>Continue with Facebook</button>
          <div id="seperator" className="mb-4">
            <div id="line"></div> or <div id="line"></div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className="pr-2 mb-4">
              <input
                className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={firstName}
              />
              
            </div>
            <div className="pl-2 mb-4">
              <input
                className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={lastName}
              />
              
            </div>
          </div>



          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={email}
            />
            
          </div>
          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Password"
              onChange={handleChange}
              name="password"
              value={password}
            />
           
          </div>
          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="confirmPassword"
              value={confirmPassword}
            />
          </div>
          <div className="flex items-center justify-between">
            <input className="login-btn" type="submit" value={"Create Account"} />
          </div>
          <div id="signup-option">
            Already have an account?{" "}
            <Link to={"/login"} id="login">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>

    </>
    
  );
};

export default RegistrationForm;
