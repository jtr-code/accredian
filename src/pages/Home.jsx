import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const Home = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {showLogin ? <LoginForm /> : <SignupForm />}
      <p>
        {showLogin ? (
          <>
            Don't have an account?
            <a href="#" onClick={toggleForm}>
              Sign up
            </a>
          </>
        ) : (
          <>
            Already have an account?
            <a href="#" onClick={toggleForm}>
              Login
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default Home;
