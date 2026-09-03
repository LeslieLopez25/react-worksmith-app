import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import Layout from "./layouts/Layout.jsx";
import Hero from "../pages/Hero.jsx";
import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import Project from "../pages/Project.jsx";
import CreateProject from "../pages/CreateProject.jsx";
import Profile from "../pages/Profile.jsx";
import ImageCardForm from "../pages/ImageCardForm.jsx";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <Route element={<Layout />}>
            <Route path="/hero" element={<Hero />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/project" element={<Project />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-image" element={<ImageCardForm />} />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route element={<Navigate to="/login" />} path="/" />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default App;
