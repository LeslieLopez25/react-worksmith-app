import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useAuth } from "../src/hooks/useAuth.js";
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
import NotFound from "../pages/NotFound.jsx";
import Loading from "./components/Loading.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

const AppRoutes = () => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;

  return (
    <Routes>
      <Route path="/loading" element={<Loading />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/login"} />} />

        <Route element={<Layout />}>
          <Route
            path="/hero"
            element={
              <ProtectedRoute>
                <Hero />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/project"
            element={
              <ProtectedRoute>
                <Project />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-project"
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-image"
            element={
              <ProtectedRoute>
                <ImageCardForm />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
