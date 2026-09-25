const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  course: { type: String, default: '' },
  combination: { type: String, default: '' },
  dob: { type: String, default: '' },
  gender: { type: String, default: '' },
  category: { type: String, default: '' },
  marks: { type: String, default: '' },
  parentName: { type: String, default: '' },
  parentPhone: { type: String, default: '' },
  address: { type: String, default: '' },
  status: { type: String, default: 'Pending' },
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.models.Application || mongoose.model('Application', applicationSchema, 'applications');
