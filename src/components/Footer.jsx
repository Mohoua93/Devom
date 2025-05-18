import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ← on importe Link
import '../styles/Footer.css';

const FooterSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);

  return (
    <div className={`footer-column ${open ? 'active' : ''}`}>
      <button className="footer-title" onClick={toggle}>
        {title}
      </button>
      <div className="footer-links">{children}</div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-column">
          <h2 className="footer-logo">Devom</h2>
          <p className="footer-subtitle">Développeur Web Freelance</p>
        </div>

        {/* Navigation */}
        <FooterSection title="Navigation">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/projects">Projets</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </FooterSection>

        {/* Légal */}
        <FooterSection title="Légal">
          <ul>
            <li><Link to="/mentions-legales">Mentions légales</Link></li>
            <li><Link to="/politiques-confidentialite">Confidentialité</Link></li>
            <Link to="/cgu">CGU</Link>
          </ul>
        </FooterSection>

        {/* Contact */}
        <FooterSection title="Contact">
          <ul>
            <li><a href="mailto:contact@devom.com">contact@devom.com</a></li>
            <li>07 81 62 80 93</li>
          </ul>
        </FooterSection>
      </div>

      <div className="footer-bottom">
        © 2025 Devom. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;


