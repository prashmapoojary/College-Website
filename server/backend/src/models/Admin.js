import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    name: { type: String, default: 'Administrator' },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model('Admin', AdminSchema);
