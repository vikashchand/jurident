import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-aristaycue7c2tcs.us.auth0.com"
    clientId="H99jylWgI0dUhawGwWAINaE6PEgsyGzk"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <React.StrictMode> 


  <App />
  

    
  </React.StrictMode>
  </Auth0Provider>
);
