import { Router } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Admin from '../models/Admin.js';

const router = Router();

// Helper to handle login logic
async function handleLogin(req, res) {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ message: 'Username and password required' });

    console.log('--- AUTH ATTEMPT ---');
    console.log('Received Username:', username);
    console.log('Received Password:', `(${password.length} chars)`);

    // 1) Prefer validation against environment variables (per requirement)
    const envId = (process.env.ADMIN_ID || '').trim();
    const envPass = (process.env.ADMIN_PASSWORD || '').trim();
    const envPassHash = process.env.ADMIN_PASSWORD_HASH;
    if (envId) {
      if (username !== envId) return res.status(401).json({ message: 'Invalid credentials' });
      let ok = false;
      if (envPass) ok = password === envPass;
      if (!ok && envPassHash) ok = await bcrypt.compare(password, envPassHash);
      if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

      const token = jwt.sign(
        { sub: 'env-admin', username: envId, name: 'Administrator' },
        process.env.JWT_SECRET || 'dev_secret_do_not_use',
        { expiresIn: '2h' }
      );
      return res.json({ token, user: { username: envId, name: 'Administrator' } });
    }

    // 2) Fallback to MongoDB Admin lookup if ENV not configured
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { sub: admin._id.toString(), username: admin.username, name: admin.name },
      process.env.JWT_SECRET || 'dev_secret_do_not_use',
      { expiresIn: '2h' }
    );

    res.json({ token, user: { username: admin.username, name: admin.name } });
  } catch (e) {
    console.error('Login error', e);
    res.status(500).json({ message: 'Server error' });
  }
}

router.post('/login', async (req, res) => {
  await handleLogin(req, res);
});

// Support mounting at /api/login
router.post('/', async (req, res) => {
  await handleLogin(req, res);
});

export default router;
