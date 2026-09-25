const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token required' });
    }

    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'mgm_college_jwt_secret_key_2025';

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired authentication token', error: err.message });
  }
};

const optionalAuthMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      const secret = process.env.JWT_SECRET || 'mgm_college_jwt_secret_key_2025';
      const decoded = jwt.verify(token, secret);
      req.user = decoded;
    }
  } catch (err) {
    // Ignore optional auth error
  }
  next();
};

module.exports = {
  authMiddleware,
  optionalAuthMiddleware,
};
