const express = require('express');
const {
  StudentFeedback,
  StaffFeedback,
  EmployerFeedback,
  ParentFeedback,
} = require('../models/Feedback');
const { getCollectionHandler } = require('../utils/dbStore');

const studentStore = getCollectionHandler('student_feedback', StudentFeedback);
const staffStore = getCollectionHandler('staff_feedback', StaffFeedback);
const employerStore = getCollectionHandler('employers_feedback', EmployerFeedback);
const parentStore = getCollectionHandler('parents_feedback', ParentFeedback);

const createFeedbackRouter = (store, typeName) => {
  const router = express.Router();

  // GET feedback list
  router.get('/', async (req, res) => {
    try {
      const list = await store.find();
      res.json(list);
    } catch (err) {
      console.error(`Error fetching ${typeName} feedback:`, err);
      res.status(500).json({ error: `Failed to fetch ${typeName} feedback`, details: err.message });
    }
  });

  // POST submit feedback
  router.post('/', async (req, res) => {
    try {
      const saved = await store.create({
        ...req.body,
        submittedAt: req.body.submittedAt || new Date().toISOString()
      });

      res.status(201).json({
        success: true,
        message: `${typeName} feedback submitted successfully`,
        data: saved
      });
    } catch (err) {
      console.error(`Error submitting ${typeName} feedback:`, err);
      res.status(500).json({ error: `Failed to submit ${typeName} feedback`, details: err.message });
    }
  });

  // DELETE feedback
  router.delete('/:id', async (req, res) => {
    try {
      const result = await store.findByIdAndDelete(req.params.id);
      res.json({ success: true, message: `${typeName} feedback deleted successfully`, result });
    } catch (err) {
      res.status(500).json({ error: `Failed to delete ${typeName} feedback`, details: err.message });
    }
  });

  return router;
};

module.exports = {
  studentRouter: createFeedbackRouter(studentStore, 'Student'),
  staffRouter: createFeedbackRouter(staffStore, 'Staff'),
  employerRouter: createFeedbackRouter(employerStore, 'Employer'),
  parentRouter: createFeedbackRouter(parentStore, 'Parent'),
};
