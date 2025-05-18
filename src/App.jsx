// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
// Ajoute ici d'autres pages si besoin

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          {/* Ajoute ici d'autres routes */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;



