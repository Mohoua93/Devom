import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // ou Tailwind si tu préfères
import logo from "../assets/logo-navbar.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Devom Logo" className="navbar-logo" />
        <span className="navbar-phone">06 01 02 03 04</span>
      </div>

      <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? "show" : ""}`}>
        <Link to="/" onClick={closeMenu}>Accueil</Link>
        <Link to="/projets" onClick={closeMenu}>Projets</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        <Link to="/a-propos" onClick={closeMenu}>À propos</Link>
      </div>
    </nav>
  );
}

export default Navbar;
