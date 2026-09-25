import jwt from 'jsonwebtoken';

export function verifyJwt(req, res, next) {
  try {
    const auth = req.headers.authorization || '';
    const [, token] = auth.split(' ');
    if (!token) return res.status(401).json({ message: 'Missing token' });

    const secret = process.env.JWT_SECRET || 'dev_secret_do_not_use';
    const payload = jwt.verify(token, secret);
    req.user = payload; // { sub, username, name, iat, exp }
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}
