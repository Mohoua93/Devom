import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <main className="home-container">
        <h1 className="home-title">Bienvenue sur Devom</h1>
        <p className="home-subtitle">Développeur Web Freelance</p>
        <p className="home-subtitle">Donnez vie à vos projets numériques</p>
        <Link to="/projets" className="home-button">
          Voir mes projets
        </Link>
      </main>
    </>
  );
}

export default Home;


