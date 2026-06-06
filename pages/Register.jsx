const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <fieldset class="fieldset w-xs rounded-box border border-base-300 bg-base-200 p-4">
        <legend class="fieldset-legend">Register</legend>

        <label class="label">Username</label>
        <input type="text" class="input" placeholder="Username" required />

        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email" required />

        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" required />

        <button class="btn mt-4 btn-neutral">Register</button>
        <p>
          Already have an account?{" "}
          <a href="/login" class="link link-primary">
            Login
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
