const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const { authMiddleware } = require('../middleware/auth');
const { getCollectionHandler, isDbConnected } = require('../utils/dbStore');

const adminStore = getCollectionHandler('admins', Admin);

// POST /api/auth/login or /api/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    const envId = (process.env.ADMIN_ID || 'admin').trim();
    const envPass = (process.env.ADMIN_PASSWORD || 'admin123').trim();
    const secret = process.env.JWT_SECRET || 'mgm_college_jwt_secret_key_2025';

    // 1. Check direct env credentials
    if (username === envId && password === envPass) {
      const token = jwt.sign(
        { sub: 'env-admin', username: envId, name: 'Administrator', role: 'superadmin' },
        secret,
        { expiresIn: '12h' }
      );
      return res.json({
        success: true,
        message: 'Login successful',
        token,
        user: { username: envId, name: 'Administrator', role: 'superadmin' }
      });
    }

    // 2. Check Database / Store Admin
    if (isDbConnected()) {
      const admin = await Admin.findOne({ username });
      if (admin) {
        const isMatch = await bcrypt.compare(password, admin.passwordHash);
        if (isMatch) {
          const token = jwt.sign(
            { sub: admin._id.toString(), username: admin.username, name: admin.name, role: admin.role || 'admin' },
            secret,
            { expiresIn: '12h' }
          );
          return res.json({
            success: true,
            message: 'Login successful',
            token,
            user: { username: admin.username, name: admin.name, role: admin.role }
          });
        }
      }
    }

    return res.status(401).json({ message: 'Invalid username or password' });
  } catch (err) {
    console.error('Auth Login Error:', err);
    res.status(500).json({ message: 'Server error during authentication', error: err.message });
  }
});

// GET /api/auth/me (Get current logged in admin)
router.get('/me', authMiddleware, async (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

module.exports = router;
