const express = require('express');
const router = express.Router();
const Application = require('../models/Application');
const { getCollectionHandler } = require('../utils/dbStore');

const appStore = getCollectionHandler('applications', Application);

// GET all admission applications
router.get('/', async (req, res) => {
  try {
    const list = await appStore.find();
    res.json(list);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: 'Failed to fetch applications', details: err.message });
  }
});

// POST Submit admission application
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required for admission application' });
    }

    const application = await appStore.create({
      ...req.body,
      submittedAt: req.body.submittedAt || new Date().toISOString()
    });

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully',
      data: application
    });
  } catch (err) {
    console.error('Error submitting application:', err);
    res.status(500).json({ error: 'Failed to submit application', details: err.message });
  }
});

// DELETE application
router.delete('/:id', async (req, res) => {
  try {
    const result = await appStore.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Application deleted successfully', result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete application', details: err.message });
  }
});

module.exports = router;
