import { Link } from "react-router-dom";
import "./Navbar.css"; // we’ll create this file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">WanderHub</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/hotels">Hotels</Link>
        <Link to="/flights">Flights</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
