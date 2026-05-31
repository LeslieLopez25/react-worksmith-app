import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./Layout/Layout.jsx";
import AuthLayout from "./Layout/AuthLayout.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<Layout />}></Route>
      </Routes>
    </Router>
  );
}
