const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <fieldset className="fieldset w-full rounded-box rounded-lg border border-base-300 bg-base-200 p-4 sm:w-xs">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input type="email" class="input w-full" placeholder="Email" required />

        <label className="label">Password</label>
        <input type="password" class="input w-full" placeholder="Password" required />

        <button className="btn mt-4 w-full border-0 btn-info sm:w-auto">Log In</button>
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
