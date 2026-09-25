import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    dob: { type: String, required: true },
    gender: { type: String, required: true },
    category: { type: String, required: true },
    address: { type: String, required: true },
    motherName: { type: String, required: true },
    fatherName: { type: String, required: true },
    course: { type: String, required: true },
    combination: { type: String, required: true },

    tenthObtained: { type: String },
    tenthTotal: { type: String },
    tenthPercent: { type: String },

    pucObtained: { type: String },
    pucTotal: { type: String },
    pucPercent: { type: String },

    mscObtained: { type: String },
    mscTotal: { type: String },
    mscPercent: { type: String },

    college: { type: String, required: true },
    university: { type: String, required: true },

    submittedAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true, collection: 'applications' }
);

// basic email format validator
ApplicationSchema.path('email').validate((val) => /.+@.+\..+/.test(val), 'Invalid email');

const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);
export default Application;
