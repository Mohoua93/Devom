import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Adjust the path as necessary

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="navbar">
        <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-logo">Devom</div>
      </nav>

      {/* Overlay */}
      <div className={`overlay ${isOpen ? "show" : ""}`} onClick={closeMenu}></div>

      {/* Drawer menu */}
      <div className={`drawer ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Accueil</Link>
        <Link to="/projets" onClick={closeMenu}>Projets</Link>
        <Link to="/a-propos" onClick={closeMenu}>À propos</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
}

export default Navbar;
