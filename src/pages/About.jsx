import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <main className="about">
      <section className="intro">
        <h2>À propos de moi</h2>
        <p>
          Je suis un développeur web passionné, spécialisé dans la création de sites modernes, performants et accessibles. À travers <strong>Devom</strong>, je propose une vitrine de mon savoir-faire, de mes projets et de ma vision du web.
        </p>
      </section>

      <section className="parcours">
        <h3>Mon parcours</h3>
        <p>
          Après une formation intensive en développement web, j'ai acquis des compétences solides en frontend (HTML, CSS, JavaScript, React), en conception d'interfaces utilisateur et le backend (Intégration d'API Rest, gestion de bases de données MongoDB). Je continue d’apprendre chaque jour pour suivre les évolutions du web.
        </p>
        <p>
          Aujourd’hui, je travaille en tant que développeur freelance, prêt à collaborer avec des entreprises, agences ou particuliers à la recherche de solutions digitales modernes.
        </p>
      </section>

      <section className="skills">
        <h3>Compétences techniques</h3>
        <ul>
          <li><span role="img" aria-label="ordinateur">💻</span> HTML5 / CSS3 / SASS</li>
          <li><span role="img" aria-label="roue dentée">⚙️</span> JavaScript ES6+ / React / JSX / Express/ Node.js</li>
          <li><span role="img" aria-label="briques">🧱</span> Responsive design / Mobile-first</li>
          <li><span role="img" aria-label="fusée">🚀</span> Performance & optimisation SEO</li>
          <li><span role="img" aria-label="chaîne">🔗</span> Intégration d’API REST / JSON</li>
          <li><span role="img" aria-label="cadenas">🔒</span> Accessibilité / bonnes pratiques UX</li>
        </ul>
      </section>

      <section className="philosophie">
        <h3>Ma philosophie</h3>
        <p>
          Mon objectif est de livrer des projets clairs, efficaces et bien structurés, dans une logique de qualité et de transparence. Chaque ligne de code est pensée pour être durable, maintenable et évolutive.
        </p>
      </section>

      <section className="services">
        <h3>Ce que je propose</h3>
        <ul>
          <li><span role="img" aria-label="écran d’ordinateur">🖥️</span> Développement de sites web sur-mesure</li>
          <li><span role="img" aria-label="globe">🌐</span> Création de site vitrine sur-mesure</li>
          <li><span role="img" aria-label="téléphone portable">📱</span> Design responsive mobile/tablette</li>
          <li><span role="img" aria-label="outils">🛠️</span> Intégration de maquettes Figma</li>
          <li><span role="img" aria-label="loupe">🔍</span> Optimisation SEO technique</li>
          <li><span role="img" aria-label="mallette">💼</span> Maintenance et amélioration continue</li>
        </ul>
      </section>

      <section className="cta">
        <h3>Ensemble, construisons votre projet</h3>
        <p>
          Vous avez une idée, un projet ou simplement besoin d’un site professionnel ? Vous avez déjà une site web et vous cherchez du renouveau ? Je suis disponible pour en discuter et vous accompagner dans sa réalisation.
        </p>
        <a href="/contact" className="contact-link">Contactez-moi</a>
      </section>
    </main>
  );
};

export default About;
