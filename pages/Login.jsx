const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <fieldset className="fieldset w-xs rounded-box rounded-lg border border-base-300 bg-base-200 p-4">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" class="input" placeholder="Email" required />

        <label className="label">Password</label>
        <input type="password" class="input" placeholder="Password" required />

        <button className="btn mt-4 text-black btn-info">Log In</button>
        <p>
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
