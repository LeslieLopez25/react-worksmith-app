const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 pb-9">
      <fieldset className="fieldset w-full rounded-box rounded-lg border border-base-300 bg-base-200 p-4 sm:w-xs">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Username</label>
        <input type="text" className="input w-full" placeholder="Username" required />

        <label className="label">Email</label>
        <input type="email" className="input w-full" placeholder="Email" required />

        <label className="label">Password</label>
        <input type="password" className="input w-full" placeholder="Password" required />

        <button className="btn mt-4 w-full border-0 btn-info sm:w-auto">Register</button>
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
