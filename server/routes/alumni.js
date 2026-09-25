const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');
const { getCollectionHandler } = require('../utils/dbStore');

const alumniStore = getCollectionHandler('alumni', Alumni);

// 📋 GET all alumni
router.get('/', async (req, res) => {
  try {
    const list = await alumniStore.find();
    res.json(list);
  } catch (err) {
    console.error('Error fetching alumni list:', err);
    res.status(500).json({ message: 'Error fetching alumni list', error: err.message });
  }
});

// ➕ POST Register alumni
router.post('/', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required for registration' });
    }

    const saved = await alumniStore.create(req.body);
    res.status(201).json({ message: 'Registration successful', alumni: saved });
  } catch (err) {
    console.error('Error during alumni registration:', err);
    res.status(500).json({ message: 'Error during registration', error: err.message });
  }
});

// ❌ DELETE alumni
router.delete('/:id', async (req, res) => {
  try {
    const result = await alumniStore.findByIdAndDelete(req.params.id);
    res.json({ message: 'Alumni record deleted successfully', result });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting alumni record', error: err.message });
  }
});

module.exports = router;
