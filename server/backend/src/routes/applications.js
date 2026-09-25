import { Router } from 'express';
import Application from '../models/Application.js';

const router = Router();

// List applications with optional filters
router.get('/', async (req, res, next) => {
  try {
    const { q = '', sort = 'createdAt', order = 'desc', limit = 500, course = '', category = '' } = req.query;
    const query = {};
    if (q) {
      query.$or = [
        { name: { $regex: q, $options: 'i' } },
        { email: { $regex: q, $options: 'i' } },
        { phone: { $regex: q, $options: 'i' } },
        { college: { $regex: q, $options: 'i' } },
        { university: { $regex: q, $options: 'i' } },
        { address: { $regex: q, $options: 'i' } },
        { combination: { $regex: q, $options: 'i' } },
      ];
    }
    if (course) query.course = course;
    if (category) query.category = category;

    const items = await Application.find(query)
      .sort({ [sort]: order === 'asc' ? 1 : -1 })
      .limit(Number(limit));
    res.json(items);
  } catch (err) { next(err); }
});

// Create new application with validation
router.post('/', async (req, res, next) => {
  try {
    const required = ['name','email','phone','dob','gender','category','address','motherName','fatherName','course','combination','college','university'];
    const missing = required.filter((k) => !req.body[k]);
    if (missing.length) {
      return res.status(400).json({ message: `Missing required fields: ${missing.join(', ')}` });
    }
    // Additional simple validations
    if (!/.+@.+\..+/.test(req.body.email)) return res.status(400).json({ message: 'Invalid email format' });
    if (String(req.body.phone).length < 7) return res.status(400).json({ message: 'Invalid phone number' });

    const doc = await Application.create({ ...req.body, submittedAt: req.body.submittedAt || new Date() });
    res.status(201).json(doc);
  } catch (err) { next(err); }
});

// Delete one
router.delete('/:id', async (req, res, next) => {
  try {
    const del = await Application.findByIdAndDelete(req.params.id);
    if (!del) return res.status(404).json({ message: 'Not found' });
    res.json({ ok: true });
  } catch (err) { next(err); }
});

// Delete all
router.delete('/', async (_req, res, next) => {
  try { await Application.deleteMany({}); res.json({ ok: true }); }
  catch (err) { next(err); }
});

export default router;
