import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import { connectDB } from './config/db.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';
import Admin from './models/Admin.js';
import bcrypt from 'bcryptjs';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors({ origin: '*'}));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));

// API routes
app.use('/api', routes);

// 404 and error handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mgm_college';

// Try to connect to MongoDB, but do not prevent server from starting if it fails
(async () => {
  let dbOk = false;
  try {
    // Log where we're trying to connect (masking credentials)
    try {
      const u = new URL(MONGO_URI);
      const maskedAuth = u.username ? `${u.username}:***@` : '';
      const dbName = (u.pathname || '/').replace(/^\//, '') || '(default)';
      console.log(`Attempting MongoDB connection to ${u.protocol}//${maskedAuth}${u.host}/${dbName}`);
    } catch { /* ignore URL parse issues for mongodb URIs */ }

    await connectDB(MONGO_URI);
    dbOk = true;
    console.log('Connected to MongoDB');
  } catch (err) {
    console.warn('MongoDB unavailable. Starting API without DB. Reason:', err?.message || err);
  }

  if (dbOk) {
    // Seed default admin if not exists
    const username = process.env.ADMIN_ID;
    const password = process.env.ADMIN_PASSWORD;
    const passwordHashEnv = process.env.ADMIN_PASSWORD_HASH; // optional: precomputed bcrypt hash
    if (username && (password || passwordHashEnv)) {
      (async () => {
        try {
          const existing = await Admin.findOne({ username });
          if (!existing) {
            const passwordHash = passwordHashEnv || await bcrypt.hash(password, 10);
            await Admin.create({ username, name: 'Administrator', passwordHash });
            console.log('Seeded default admin');
          } else if (String(process.env.SEED_OVERWRITE).toLowerCase() === 'true') {
            const passwordHash = passwordHashEnv || await bcrypt.hash(password, 10);
            existing.passwordHash = passwordHash;
            await existing.save();
            console.log('Updated existing admin password via SEED_OVERWRITE');
          } else {
            console.log('Admin exists; skipping seed (set SEED_OVERWRITE=true to update password)');
          }
        } catch (e) {
          console.error('Admin seed error', e);
        }
      })();
    }
  } else {
    console.log('Skipping admin seeding because DB is not connected. Env-based login remains available.');
  }

  app.listen(PORT, () => console.log(`API server listening on http://localhost:${PORT}`));
})();
