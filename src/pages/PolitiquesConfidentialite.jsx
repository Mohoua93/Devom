// src/pages/PolitiqueConfidentialite.jsx
import React from 'react';
import '../styles/PolitiquesConfidentialite.css'; // Assurez-vous d'avoir ce fichier CSS pour le style

const PolitiquesConfidentialite = () => {
  return (
    <div className="confidentialite-page">
      <h1>Politique de confidentialité</h1>

      <section>
        <h2>1. Collecte des données</h2>
        <p>
          Nous collectons des informations lorsque vous nous contactez via le formulaire de contact,
          ou lorsque vous vous abonnez à notre newsletter. Les données peuvent inclure votre nom, votre adresse email
          et tout autre renseignement que vous nous fournissez volontairement.
        </p>
      </section>

      <section>
        <h2>2. Utilisation des données</h2>
        <p>
          Les données collectées sont utilisées uniquement pour répondre à vos demandes, vous fournir un service ou vous envoyer des informations relatives à Devom.
          Elles ne sont en aucun cas vendues ou partagées à des tiers sans votre consentement.
        </p>
      </section>

      <section>
        <h2>3. Cookies</h2>
        <p>
          Ce site peut utiliser des cookies à des fins de mesure d’audience (Google Analytics) et de fonctionnement du site.
          Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies.
        </p>
      </section>

      <section>
        <h2>4. Sécurité des données</h2>
        <p>
          Vos données personnelles sont stockées de manière sécurisée. Nous mettons tout en œuvre pour les protéger contre toute perte, accès non autorisé, divulgation ou destruction.
        </p>
      </section>

      <section>
        <h2>5. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles à tout moment
          en nous contactant à l’adresse : <strong>contact@devom.com</strong>
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité, vous pouvez nous écrire à : <strong>contact@devom.com</strong>
        </p>
      </section>
    </div>
  );
};

export default PolitiquesConfidentialite;
