// corsMiddleware.js

module.exports = (req, res, next) => {
    const allowedOrigin = 'https://www.devom.fr';
    const origin = req.headers.origin;
  
    // ✅ Autorise l'origine uniquement si elle correspond exactement
    if (origin === allowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    // ✅ En-têtes CORS standards
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    // ✅ Répond aux requêtes préflight immédiatement
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    next();
  };
  
  