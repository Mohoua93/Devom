import { Link } from "react-router-dom";

import "../styles/Home.css"; // Import CSS styles for the Home component

function Home() {
  return (
    <>
      <main className="home-container">
        <div className="home-content">
          <h1 className="home-title">Bienvenue sur Devom</h1>
          <p className="home-subtitle">Développeur Web Freelance</p>
          <p className="home-subtitle">Donnez vie à vos projets numériques</p>
          <Link to="/projets" className="home-button">
            Voir mes projets
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;



