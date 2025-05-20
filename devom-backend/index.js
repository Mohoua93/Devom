require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
app.use(express.json());

// ✅ Middleware CORS pour toutes les routes et toutes les méthodes
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://www.devom.fr");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

// ✅ Route de traitement du formulaire
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true,
    auth: {
      user: "contact@devom.fr",
      pass: process.env.MAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: `"Devom contact" <${email}>`,
      to: "contact@devom.fr",
      subject: `Nouveau message de ${name}`,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong><br>${message}</p>`
    });

    res.status(200).json({ message: "Message envoyé !" });
  } catch (error) {
    console.error("Erreur Nodemailer :", error);
    res.status(500).json({ message: "Erreur d'envoi." });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Backend Devom en ligne sur le port ${PORT}`);
});





