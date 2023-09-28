import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { hydrate, render } from "react-dom";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

import { UserProvider } from "./context/user.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <UserProvider>
      <HelmetProvider>
        <App />

      </HelmetProvider>
    </UserProvider>
  </React.StrictMode>

);
