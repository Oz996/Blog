import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <App />
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
