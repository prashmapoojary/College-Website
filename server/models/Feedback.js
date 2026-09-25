const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({}, { timestamps: true, strict: false });

const StudentFeedback = mongoose.models.StudentFeedback || mongoose.model('StudentFeedback', feedbackSchema, 'student_feedback');
const StaffFeedback = mongoose.models.StaffFeedback || mongoose.model('StaffFeedback', feedbackSchema, 'staff_feedback');
const EmployerFeedback = mongoose.models.EmployerFeedback || mongoose.model('EmployerFeedback', feedbackSchema, 'employers_feedback');
const ParentFeedback = mongoose.models.ParentFeedback || mongoose.model('ParentFeedback', feedbackSchema, 'parents_feedback');

module.exports = {
  StudentFeedback,
  StaffFeedback,
  EmployerFeedback,
  ParentFeedback,
};
