const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
  name: { type: String, default: 'Anonymous' },
  email: { type: String, default: '' },
  category: { type: String, default: 'Campus Improvement' },
  suggestion: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.models.Suggestion || mongoose.model('Suggestion', suggestionSchema, 'suggestions');
