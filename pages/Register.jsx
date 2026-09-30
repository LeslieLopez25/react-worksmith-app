const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <fieldset className="fieldset w-xs rounded-box rounded-lg border border-base-300 bg-base-200 p-4">
        <legend className="fieldset-legend">Register</legend>

        <label className="label">Username</label>
        <input type="text" className="input" placeholder="Username" required />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" required />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" required />

        <button className="btn mt-4 text-black btn-outline btn-info">Register</button>
        <p>
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
