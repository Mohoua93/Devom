require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// --- DÉBUT DE LA SECTION CORS MISE À JOUR ---
const allowedOrigins = [
  "https://www.devom.fr",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin: " + origin;
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);
// --- FIN DE LA SECTION CORS MISE À JOUR ---

app.use(express.json());

// ✅ Nouvelle version : réponse immédiate, traitement en arrière-plan
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  // ✅ Répond immédiatement au frontend
  res.status(200).json({ message: "Message reçu, envoi en cours." });

  // 📩 Envoi de l'e-mail en arrière-plan
  const transporter = nodemailer.createTransport({
    host: "ssl0.ovh.net",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.MAIL_PASS,
    },
  });

  transporter
    .sendMail({
      from: `"Devom contact" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Nouveau message de ${name}`,
      html: `<p><strong>Nom :</strong> ${name}</p>
             <p><strong>Email :</strong> ${email}</p>
             <p><strong>Message :</strong><br>${message}</p>`,
    })
    .then(() => {
      console.log("✅ Message envoyé avec succès par Nodemailer !");
    })
    .catch((error) => {
      console.error("❌ Erreur Nodemailer :", error);
    });
});

// Port d'écoute
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ Backend Devom en ligne sur le port ${PORT}`);
});


