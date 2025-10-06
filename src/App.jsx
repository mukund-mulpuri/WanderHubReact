import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destination";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import PlaceSearch from "./pages/PlaceSearch";
import Footer from "./components/Footer";
import React from "react";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<PlaceSearch />} />
      </Routes>
      <Footer /> {/* Footer always visible */}
    </Router>
  );
}

export default App;
