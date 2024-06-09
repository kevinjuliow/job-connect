import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ContextProvider from "./context/ContextProvider.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="401822909317-ei0bjaa78c9f93lavusc8q3ihv5mgnl6.apps.googleusercontent.com">
      <ContextProvider>
        <App />
      </ContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
