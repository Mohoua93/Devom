// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // Assurez-vous d'importer le fichier CSS

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Devom</h1>
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
