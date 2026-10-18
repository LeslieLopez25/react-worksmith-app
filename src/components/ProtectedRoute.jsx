import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import Loading from "./Loading.jsx";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;
  if (!isLoggedIn) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
