import React from "react";
import { userSchema } from "../../Screen/Loginscreen/validations/LoginValidation";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
            />
            <p className="validation">
              {validator ? "" : "Email format incorrect"}
            </p>
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
            />
            <p className="validation">
              {validator ? "" : "Password format incorrect"}
            </p>
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
          <button className="googleLog">Continue with Google</button>
          <button className="facebookLog">Continue with Facebook</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
