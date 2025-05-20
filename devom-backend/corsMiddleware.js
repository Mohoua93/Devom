// corsMiddleware.js
module.exports = (req, res, next) => {
    const allowedOrigin = 'https://www.devom.fr';
    const origin = req.headers.origin;
  
    if (origin === allowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
  
    next();
  };
  