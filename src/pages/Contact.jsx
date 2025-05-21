import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Envoi en cours...");

    try {
      // const response = await fetch("https://devom-backend.onrender.com/api/contact", {
         const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Une erreur est survenue lors de l'envoi.");
      }
    } catch (error) {
      setStatus("❌ Erreur réseau ou serveur.");
    }

    setLoading(false);
  };

  return (
    <main className="contact">
      <h2>Me contacter</h2>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          required
          autoComplete="off"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={loading}>
          {loading ? "Envoi..." : "Envoyer"}
        </button>        

        {status && <p className="status" aria-live="polite">{status}</p>}
      </form>
    </main>
  );
};

export default Contact;
