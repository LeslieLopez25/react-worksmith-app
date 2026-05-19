import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Register />
      <Footer />
    </Router>
  );
}
