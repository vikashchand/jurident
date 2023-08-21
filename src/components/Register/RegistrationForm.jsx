import React from "react";
import { Link } from "react-router-dom";

const RegistrationForm = () => {
  let validator = true;
  const login = async (e) => {
    e.preventDefault();

    let user = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const isValid = await userSchema.isValid(user);
    validator = isValid;
    console.log(validator);
  };
  return (
    <div id="form">
      <div className="w-full max-w-xs">
        <form className="bg-white px-8 pt-6 pb-8 mb-4 login" onSubmit={login}>
          <h3 id="login-intro">Create an account</h3>
          <br />
          <button className="googleLog">Continue with Google</button>
          <button className="facebookLog">Continue with Facebook</button>
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
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
          </div>
          <div className="pl-2 mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Last Name"
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
          </div>
    </div>

          
          
          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email"
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
          </div>
          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Password"
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
          </div>
          <div className="mb-4">
            <input
              className="border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Confirm Password"
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
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
  );
};

export default RegistrationForm;
