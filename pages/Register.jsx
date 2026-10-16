import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../src/api/axios.js";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setIsError("");

    try {
      const response = await api.post("../api/auth/register", formData);
      setMessage(response.data.message || "Registration successful!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setIsError(err.response?.data?.message || "An error occurred. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pb-9">
      <fieldset className="fieldset w-full rounded-box rounded-lg border border-base-300 bg-base-200 p-4 sm:w-xs">
        <legend className="fieldset-legend">Register</legend>

        {/* Success message */}
        {message && <div className="mb-4 alert text-sm alert-success">{message}</div>}

        {/* Error message */}
        {isError && <div className="mb-4 alert text-sm alert-error">{isError}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input w-full"
            placeholder="Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input w-full"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="input w-full"
            placeholder="Password"
            required
          />

          <button type="submit" className="btn mt-4 w-full border-0 btn-info sm:w-auto">
            Register
          </button>
        </form>

        <p className="mt-2 text-center text-sm text-base-content">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-accent transition-colors duration-200 hover:text-primary"
          >
            Login
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
