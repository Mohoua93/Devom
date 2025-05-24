import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // Icône téléphone
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="header">
      {/* Burger à gauche */}
      <div
        className="burger-button"
        onClick={toggleMenu}
        ref={burgerRef}
        aria-label="Ouvrir le menu"
      >
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      {/* Logo centré */}
      <h1 className="logo">
        <Link to="/">Devom</Link>
      </h1>

      {/* Bouton "Contactez-moi" en desktop */}
      <Link to="/contact" className="contact-btn-desktop">
        Contactez-moi
      </Link>

      {/* Icône téléphone en mobile */}
      <Link to="/contact" className="contact-icon-mobile" aria-label="Contact">
        <FiPhone />
      </Link>

      {/* Menu latéral mobile */}
      <nav
        className={`side-menu ${menuOpen ? "active" : ""}`}
        ref={menuRef}
      >
        <ul>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
          <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
