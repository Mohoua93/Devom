import React from "react"; // ← nécessaire avec react-scripts@3
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <main className="home-container">
        <div className="home-content">
          <h1 className="home-title">Bienvenue sur Devom</h1>
          <p className="home-subtitle">Développeur Web Freelance</p>
          <p className="home-subtitle">Donnez vie à vos projets numériques</p>
          <Link to="/Projects" className="home-button">
            Voir mes projets
          </Link>
        </div>
      </main>
    </>
  );
}

export default Home;



