import { Router } from 'express';

export function buildCrudRouter(Model) {
  const router = Router();

  // List with optional text search and sort
  router.get('/', async (req, res, next) => {
    try {
      const { q = '', sort = 'createdAt', order = 'desc', limit = 500 } = req.query;
      const query = q
        ? {
            $or: [
              { name: { $regex: q, $options: 'i' } },
              { email: { $regex: q, $options: 'i' } },
              { complaint: { $regex: q, $options: 'i' } },
              { suggestions: { $regex: q, $options: 'i' } },
            ],
          }
        : {};
      const items = await Model.find(query)
        .sort({ [sort]: order === 'asc' ? 1 : -1 })
        .limit(Number(limit));
      res.json(items);
    } catch (err) { next(err); }
  });

  // Create
  router.post('/', async (req, res, next) => {
    try {
      const created = await Model.create({ ...req.body, submittedAt: req.body.submittedAt || new Date() });
      res.status(201).json(created);
    } catch (err) { next(err); }
  });

  // Delete one
  router.delete('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const deleted = await Model.findByIdAndDelete(id);
      if (!deleted) return res.status(404).json({ message: 'Not found' });
      res.json({ ok: true });
    } catch (err) { next(err); }
  });

  // Delete all
  router.delete('/', async (_req, res, next) => {
    try {
      await Model.deleteMany({});
      res.json({ ok: true });
    } catch (err) { next(err); }
  });

  return router;
}
