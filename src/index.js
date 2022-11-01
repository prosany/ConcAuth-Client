import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/Core.css";
import App from "./App";
import { UserProvider } from "./Context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
