import { Router } from 'express';
import { verifyJwt } from '../middleware/auth.js';

const router = Router();

router.get('/', verifyJwt, (req, res) => {
  res.json({
    ok: true,
    user: { id: req.user?.sub, username: req.user?.username, name: req.user?.name },
    message: 'Welcome to the admin dashboard'
  });
});

export default router;
