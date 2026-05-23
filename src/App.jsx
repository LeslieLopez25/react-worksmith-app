import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Login />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}
