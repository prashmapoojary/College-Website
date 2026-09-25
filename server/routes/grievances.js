const express = require('express');
const router = express.Router();
const Grievance = require('../models/Grievance');
const { getCollectionHandler } = require('../utils/dbStore');

const grievanceStore = getCollectionHandler('grievances', Grievance);

// GET all grievances
router.get('/', async (req, res) => {
  try {
    const list = await grievanceStore.find();
    res.json(list);
  } catch (err) {
    console.error('Error fetching grievances:', err);
    res.status(500).json({ error: 'Failed to fetch grievances', details: err.message });
  }
});

// POST Submit grievance
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const saved = await grievanceStore.create({
      ...req.body,
      submittedAt: req.body.submittedAt || new Date().toISOString()
    });

    res.status(201).json({
      success: true,
      message: 'Grievance submitted successfully',
      data: saved
    });
  } catch (err) {
    console.error('Error submitting grievance:', err);
    res.status(500).json({ error: 'Failed to submit grievance', details: err.message });
  }
});

// DELETE grievance
router.delete('/:id', async (req, res) => {
  try {
    const result = await grievanceStore.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Grievance deleted successfully', result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete grievance', details: err.message });
  }
});

module.exports = router;
