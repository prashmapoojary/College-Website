const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  batch: { type: String, default: '' },
  degree: { type: String, default: '' },
  occupation: { type: String, default: '' },
  organization: { type: String, default: '' },
  location: { type: String, default: '' },
  message: { type: String, default: '' },
}, {
  timestamps: true,
  strict: false
});

module.exports = mongoose.models.Alumni || mongoose.model('Alumni', alumniSchema);
