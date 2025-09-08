// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "20px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <p>© {new Date().getFullYear()} Travel Explorer. All rights reserved.</p>

      <nav>
        <Link to="/about" style={{ color: "#fff", margin: "0 10px" }}>
          About
        </Link>
        <Link to="/contact" style={{ color: "#fff", margin: "0 10px" }}>
          Contact
        </Link>
        <Link to="/login" style={{ color: "#fff", margin: "0 10px" }}>
          Login
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;
