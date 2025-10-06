import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        // Register
        const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
        toast.success(res.data.msg || "Signup successful!");
        setTimeout(() => setIsRegister(false), 1500); // switch to login form
      } else {
        // Login
        const res = await axios.post("http://localhost:5000/api/auth/login", {
          email: formData.email,
          password: formData.password,
        });
        toast.success("Login Successful! Welcome " + res.data.user.name);
        localStorage.setItem("token", res.data.token); // save token
        setTimeout(() => navigate("/home"), 1500); // redirect to home page
      }
      setFormData({ name: "", email: "", password: "" });
    } catch (err) {
      toast.error(err.response?.data?.msg || "Request failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isRegister ? "Register" : "Login"}</h1>

        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {isRegister && (
            <input type="password" placeholder="Confirm Password" required />
          )}
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>

        <p>
          {isRegister ? "Already have an account?" : "New user?"}{" "}
          <span className="toggle" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
