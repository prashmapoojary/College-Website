import { Router } from 'express';
import { getModel, collections } from '../models/modelFactory.js';
import authRouter from './auth.js';
import { buildCrudRouter } from './genericCrud.js';
import applicationsRouter from './applications.js';
import dashboardRouter from './dashboard.js';

const router = Router();

// Health
router.get('/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));

// Auth
router.use('/auth', authRouter);
router.use('/login', authRouter); // alias: POST /api/login

// Applications (use dedicated schema + validation)
router.use('/applications', applicationsRouter);

// Protected dashboard
router.use('/dashboard', dashboardRouter);

// Register collection routers
Object.entries(collections).forEach(([key, collectionName]) => {
  if (key === 'applications') return; // handled by dedicated router
  const Model = getModel(collectionName);
  router.use(`/${key}`, buildCrudRouter(Model));
});

export default router;
