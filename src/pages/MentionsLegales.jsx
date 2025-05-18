// src/pages/MentionsLegales.jsx
import React from 'react';
import '../styles/MentionsLegales.css'; // si tu veux la styliser

const MentionsLegales = () => {
  return (
    <div className="mentions-legales">
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p><strong>Devom</strong><br />
        11 rue du  bailly de suffren<br />
        93600 Aulnay-sous-Bois<br />
        Email : contact@devom.com</p>
      </section>

      <section>
        <h2>Responsable de publication</h2>
        <p>Devom – Développeur Web Freelance</p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par :<br />
        Vercel<br /></p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>L’ensemble des contenus présents sur ce site (textes, images, code, etc.) est la propriété exclusive de Devom. Toute reproduction, représentation, modification ou publication, totale ou partielle, est strictement interdite sans l’accord préalable de l’auteur.</p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>Les informations recueillies via les formulaires sont destinées uniquement à un usage interne. Conformément au RGPD, vous pouvez exercer vos droits en nous contactant à : contact@devom.com</p>
      </section>
    </div>
  );
};

export default MentionsLegales;
