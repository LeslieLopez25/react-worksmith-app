import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Login />
      <Register />
      <Footer />
    </Router>
  );
}
