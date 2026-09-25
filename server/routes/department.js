const express = require('express');
const router = express.Router();
const Department = require('../models/Department');
const { getCollectionHandler } = require('../utils/dbStore');

const deptStore = getCollectionHandler('departments', Department);

// GET /api/department
router.get('/', async (req, res) => {
  try {
    const departments = await deptStore.find();
    res.json(departments);
  } catch (err) {
    console.error('Error fetching departments:', err);
    res.status(500).json({ error: 'Failed to fetch departments', details: err.message });
  }
});

// POST /api/department
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'Department name is required' });
    }
    const newDept = await deptStore.create(req.body);
    res.status(201).json(newDept);
  } catch (err) {
    console.error('Error adding department:', err);
    res.status(500).json({ error: 'Failed to save department', details: err.message });
  }
});

// DELETE /api/department/:id
router.delete('/:id', async (req, res) => {
  try {
    const result = await deptStore.findByIdAndDelete(req.params.id);
    res.json({ message: 'Department deleted successfully', result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete department', details: err.message });
  }
});

module.exports = router;
