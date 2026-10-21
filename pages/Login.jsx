import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/api/axios.js";
import Toast from "../src/components/Toast.jsx";
import useToast from "../src/hooks/useToast.js";
import { useAuth } from "../src/hooks/useAuth.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { toast, showToast, hideToast } = useToast();
  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", formData);
      login(response.data.user);
      showToast(response.data.message || "Login successful!", "success");
      setTimeout(() => navigate("/home"), 1500);
    } catch (err) {
      showToast(err.response?.data?.message || "An error occurred. Please try again.", "error");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <Toast message={toast.message} type={toast.type} onClose={hideToast} />

      <fieldset className="fieldset w-full rounded-box rounded-lg border border-base-300 bg-base-200 p-4 sm:w-xs">
        <legend className="fieldset-legend">Login</legend>

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="input w-full"
            placeholder="Password"
            required
          />

          <button className="btn mt-4 w-full border-0 btn-info sm:w-auto">Log In</button>
        </form>
        <p className="mt-2 text-center text-sm text-base-content">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-accent transition-colors duration-200 hover:text-primary"
          >
            Register
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
