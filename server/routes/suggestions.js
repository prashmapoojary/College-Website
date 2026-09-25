const express = require('express');
const router = express.Router();
const Suggestion = require('../models/Suggestion');
const { getCollectionHandler } = require('../utils/dbStore');

const suggestionStore = getCollectionHandler('suggestions', Suggestion);

// GET all suggestions
router.get('/', async (req, res) => {
  try {
    const list = await suggestionStore.find();
    res.json(list);
  } catch (err) {
    console.error('Error fetching suggestions:', err);
    res.status(500).json({ error: 'Failed to fetch suggestions', details: err.message });
  }
});

// POST Submit suggestion
router.post('/', async (req, res) => {
  try {
    const saved = await suggestionStore.create({
      ...req.body,
      submittedAt: req.body.submittedAt || new Date().toISOString()
    });

    res.status(201).json({
      success: true,
      message: 'Suggestion submitted successfully',
      data: saved
    });
  } catch (err) {
    console.error('Error submitting suggestion:', err);
    res.status(500).json({ error: 'Failed to submit suggestion', details: err.message });
  }
});

// DELETE suggestion
router.delete('/:id', async (req, res) => {
  try {
    const result = await suggestionStore.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Suggestion deleted successfully', result });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete suggestion', details: err.message });
  }
});

module.exports = router;
