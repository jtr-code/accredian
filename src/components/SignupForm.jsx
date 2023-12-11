const SignupForm = () => {
  return (
    <div className="container">
      <div className="form-container" id="signup-form">
        <h1>Sign Up</h1>
        <form>
          <label htmlFor="new-username">Username</label>
          <input type="text" id="new-username" name="new-username" required />
          <label htmlFor="new-email">Email</label>
          <input type="email" id="new-email" name="new-email" required />
          <label htmlFor="new-password">Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
