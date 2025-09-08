import { useState } from "react";
import "./Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isRegister ? "Register" : "Login"}</h1>

        {isRegister ? (
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Register</button>
          </form>
        ) : (
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
          </form>
        )}

        <p>
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <span className="toggle" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
