import mongoose from 'mongoose';

const laxSchema = new mongoose.Schema({}, { strict: false, timestamps: true });

const cache = new Map();

export function getModel(name) {
  const key = name.toLowerCase();
  if (cache.has(key)) return cache.get(key);
  const model = mongoose.models[key] || mongoose.model(key, laxSchema, key);
  cache.set(key, model);
  return model;
}

export const collections = {
  applications: 'applications',
  grievances: 'grievances',
  suggestions: 'suggestions',
  student: 'student_feedback',
  alumni: 'alumni_feedback',
  staff: 'staff_feedback',
  employers: 'employers_feedback',
  parents: 'parents_feedback',
};
