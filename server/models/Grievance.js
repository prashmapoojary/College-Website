const mongoose = require('mongoose');

const grievanceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  category: { type: String, default: 'General' },
  type: { type: String, default: 'Student' },
  subject: { type: String, default: '' },
  description: { type: String, default: '' },
  status: { type: String, default: 'Under Review' },
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.models.Grievance || mongoose.model('Grievance', grievanceSchema, 'grievances');
