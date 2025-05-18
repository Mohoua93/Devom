import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/CGU.css'; // Assurez-vous d'avoir ce fichier CSS pour le style

const CGU = () => {
  return (
    <div className="cgu-page">
      <h1>Conditions Générales d’Utilisation (CGU)</h1>

      <section>
        <h2>1. Objet</h2>
        <p>
          Les présentes Conditions Générales d’Utilisation ont pour objet l’encadrement juridique de l’utilisation du site Devom.
        </p>
      </section>

      <section>
        <h2>2. Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d’un accès à Internet.
        </p>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          Tous les contenus du site (textes, images, code, etc.) sont la propriété exclusive de Devom.
          Toute reproduction sans autorisation est interdite.
        </p>
      </section>

      <section>
        <h2>4. Responsabilités</h2>
        <p>
          Devom s’efforce de fournir des informations fiables. Toutefois, des erreurs ou omissions peuvent survenir.
          L’utilisateur est seul responsable de l’utilisation qu’il fait du contenu du site.
        </p>
      </section>

      <section>
        <h2>5. Données personnelles</h2>
        <p>
  Les données personnelles collectées sont traitées dans le respect de la législation en vigueur.
  Consultez la <Link to="/politiques-confidentialite">politique de confidentialité</Link> pour plus de détails.
</p>
      </section>

      <section>
        <h2>6. Loi applicable</h2>
        <p>
          Les présentes CGU sont soumises à la législation française.
        </p>
      </section>
    </div>
  );
};

export default CGU;
