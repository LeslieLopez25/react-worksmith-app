import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Footer />
    </Router>
  );
}
