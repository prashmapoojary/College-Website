const express = require('express');
const router = express.Router();
const Faculty = require('../models/Faculty');
const { getCollectionHandler } = require('../utils/dbStore');

const facultyStore = getCollectionHandler('faculty', Faculty);

// 📋 GET all faculty (Supports ?department= filter)
router.get('/', async (req, res) => {
  try {
    const { department } = req.query;
    const query = department ? { department } : {};
    const faculties = await facultyStore.find(query);
    res.json(faculties);
  } catch (err) {
    console.error('Error fetching faculty:', err);
    res.status(500).json({ error: 'Failed to fetch faculty list', details: err.message });
  }
});

// 📋 GET faculty by ID
router.get('/:id', async (req, res) => {
  try {
    const faculty = await facultyStore.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ error: 'Faculty not found' });
    }
    res.json(faculty);
  } catch (err) {
    console.error('Error fetching faculty by ID:', err);
    res.status(500).json({ error: 'Failed to fetch faculty', details: err.message });
  }
});

// ➕ POST Add Faculty
router.post('/', async (req, res) => {
  try {
    const { name, department, email, contact } = req.body;
    if (!name || !department) {
      return res.status(400).json({ error: 'Faculty name and department are required' });
    }

    const savedFaculty = await facultyStore.create(req.body);
    res.status(201).json(savedFaculty);
  } catch (err) {
    console.error('Error saving faculty:', err);
    res.status(500).json({ error: 'Failed to save faculty', details: err.message });
  }
});

// ✏ PUT Update faculty
router.put('/:id', async (req, res) => {
  try {
    const updatedFaculty = await facultyStore.findByIdAndUpdate(req.params.id, req.body);
    if (!updatedFaculty) {
      return res.status(404).json({ error: 'Faculty record not found' });
    }
    res.json(updatedFaculty);
  } catch (err) {
    console.error('Error updating faculty:', err);
    res.status(500).json({ error: 'Failed to update faculty', details: err.message });
  }
});

// ❌ DELETE faculty
router.delete('/:id', async (req, res) => {
  try {
    const result = await facultyStore.findByIdAndDelete(req.params.id);
    res.json({ message: 'Faculty deleted successfully', result });
  } catch (err) {
    console.error('Error deleting faculty:', err);
    res.status(500).json({ error: 'Failed to delete faculty', details: err.message });
  }
});

module.exports = router;
