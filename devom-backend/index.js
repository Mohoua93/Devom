require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// --- DÉBUT DE LA SECTION CORS MISE À JOUR ---
// Configurer les origines autorisées pour CORS
const allowedOrigins = [
  "https://www.devom.fr",     // Votre frontend en production sur Vercel
  "http://localhost:3000",    // Votre frontend en développement local
  // Si vous avez d'autres origines Vercel (e.g., l'URL par défaut .vercel.app avant votre custom domain)
  // vous pouvez l'ajouter ici: "https://votre-app-vercel.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Permettre les requêtes sans origine (comme celles de Postman ou certains outils)
      if (!origin) return callback(null, true);

      // Vérifier si l'origine de la requête est dans la liste des origines autorisées
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin: " + origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "OPTIONS"], // Les méthodes HTTP autorisées
    allowedHeaders: ["Content-Type"],    // Les en-têtes autorisés dans les requêtes
    credentials: true,                   // Permet l'envoi de cookies d'authentification (si utilisés)
  })
);
// --- FIN DE LA SECTION CORS MISE À JOUR ---


app.use(express.json()); // Middleware pour parser les requêtes JSON


// Route de traitement du formulaire
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Création du transporteur Nodemailer
  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true, // Utilisez SSL/TLS
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    // Envoi de l'e-mail
    await transporter.sendMail({
      from: `"Devom contact" <${email}>`, // L'expéditeur (nom visible + email de la personne qui remplit le formulaire)
      to: process.env.EMAIL_TO,         // L'adresse qui reçoit le message (info@devom.fr)
      subject: `Nouveau message de ${name}`, // Sujet de l'e-mail
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong><br>${message}</p>`, // Contenu HTML de l'e-mail
    });

    console.log("✅ Message envoyé avec succès par Nodemailer !"); // Log de succès pour Render
    res.status(200).json({ message: "Message envoyé !" }); // Réponse au frontend
  } catch (error) {
    console.error("❌ Erreur Nodemailer :", error); // Log d'erreur détaillé pour Render
    res.status(500).json({ message: "Erreur d'envoi. Veuillez réessayer plus tard." }); // Réponse au frontend
  }
});

// Définition du port d'écoute du serveur
const PORT = process.env.PORT || 3001; // Render fournit sa propre variable PORT

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Backend Devom en ligne sur le port ${PORT}`);
});

