const Register = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <fieldset class="fieldset w-xs rounded-box rounded-lg border border-base-300 bg-base-200 p-4">
        <legend class="fieldset-legend">Register</legend>

        <label class="label">Username</label>
        <input type="text" class="input" placeholder="Username" required />

        <label class="label">Email</label>
        <input type="email" class="input" placeholder="Email" required />

        <label class="label">Password</label>
        <input type="password" class="input" placeholder="Password" required />

        <button class="btn mt-4 text-black btn-outline btn-info">Register</button>
        <p>
          Already have an account?{" "}
          <a href="/login" class="link text-blue-600">
            Login
          </a>
        </p>
      </fieldset>
    </div>
  );
};

export default Register;
