const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <fieldset class="fieldset w-xs rounded-box rounded-lg border border-base-300 bg-base-200 p-4">
        <legend class="fieldset-legend">Login</legend>

        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email" required />

        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" required />

        <button class="btn mt-4 text-black btn-info">Log In</button>
        <p>
          Don't have an account?{" "}
          <a href="/register" class="link text-blue-600">
            Register
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default Login;
