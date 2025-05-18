import React, { useState } from 'react';
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
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/projects">Projets</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </FooterSection>

        {/* Légal */}
        <FooterSection title="Légal">
          <ul>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/politique-confidentialite">Confidentialité</a></li>
            <li><a href="/cgu">CGU</a></li>
          </ul>
        </FooterSection>

        {/* Contact */}
        <FooterSection title="Contact">
          <ul>
            <li><a href="mailto:support@devom.com">contact@devom.com</a></li>
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

