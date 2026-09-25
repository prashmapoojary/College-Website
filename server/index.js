require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

// Import routes
const authRoutes = require('./routes/auth');
const facultyRoutes = require('./routes/faculty');
const departmentRoutes = require('./routes/department');
const alumniRoutes = require('./routes/alumni');
const applicationRoutes = require('./routes/applications');
const grievanceRoutes = require('./routes/grievances');
const suggestionRoutes = require('./routes/suggestions');
const {
  studentRouter,
  staffRouter,
  employerRouter,
  parentRouter,
} = require('./routes/feedback');

// Import models & utilities
const Admin = require('./models/Admin');
const { isDbConnected } = require('./utils/dbStore');

const app = express();

// ==========================================
// Middleware Configuration
// ==========================================
app.use(cors({ origin: '*' }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Request logging in development
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    if (process.env.NODE_ENV !== 'production' && req.path !== '/api/health') {
      console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode} (${duration}ms)`);
    }
  });
  next();
});

// ==========================================
// MongoDB Connection & Graceful Seeding
// ==========================================
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/mgm_college";

async function connectToDatabase() {
  try {
    // Set connection options (disable command buffering so offline fallback works instantly)
    mongoose.set('bufferCommands', false);

    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 4000,
    });
    console.log('✅ MongoDB connected successfully to:', mongoose.connection.name || 'mgm_college');

    // Seed default administrator if DB is connected
    seedAdminUser();
  } catch (err) {
    console.warn('⚠️ MongoDB connection note (In-Memory Resilience Mode active):', err.message);
    console.log('ℹ️ Server will seamlessly serve all requests from memory/local store without blocking.');
  }
}

async function seedAdminUser() {
  try {
    if (!isDbConnected()) return;
    const adminId = (process.env.ADMIN_ID || 'admin').trim();
    const adminPass = (process.env.ADMIN_PASSWORD || 'admin123').trim();

    const existing = await Admin.findOne({ username: adminId });
    if (!existing) {
      const passwordHash = await bcrypt.hash(adminPass, 10);
      await Admin.create({
        username: adminId,
        passwordHash,
        name: 'MGM Administrator',
        role: 'superadmin'
      });
      console.log(`🔑 Seeded default admin account: ${adminId}`);
    }
  } catch (err) {
    console.warn('Admin seed note:', err.message);
  }
}

connectToDatabase();

// ==========================================
// API Routes Mounting
// ==========================================

// 1. Auth & Admin
app.use('/api/auth', authRoutes);
app.use('/api/login', authRoutes); // backward compatibility alias

// 2. Faculty & Departments
app.use('/api/faculty', facultyRoutes);
app.use('/api/department', departmentRoutes);
app.use('/api/departments', departmentRoutes);

// 3. Alumni
app.use('/api/alumni', alumniRoutes);
app.use('/register', alumniRoutes); // backward compatibility alias
app.use('/api/register', alumniRoutes); // backward compatibility alias

// 4. Applications (Admissions)
app.use('/api/applications', applicationRoutes);

// 5. Grievances & Suggestions
app.use('/api/grievances', grievanceRoutes);
app.use('/api/suggestions', suggestionRoutes);

// 6. Stakeholder Feedbacks
app.use('/api/student', studentRouter);
app.use('/api/staff', staffRouter);
app.use('/api/employers', employerRouter);
app.use('/api/parents', parentRouter);

// ==========================================
// System Health & Welcome
// ==========================================
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    database: isDbConnected() ? 'connected' : 'offline_resilience_mode',
    uptime: process.uptime()
  });
});

app.get('/', (req, res) => {
  res.send(`
    <div style="font-family: Arial, sans-serif; text-align: center; padding: 50px;">
      <h1>🎓 Mahatma Gandhi Memorial College, Udupi</h1>
      <h2>API Backend Server is Running</h2>
      <p>Status: <strong>Online</strong> (Port: ${process.env.PORT || 5001})</p>
      <p>Database: <strong>${isDbConnected() ? 'MongoDB Connected' : 'In-Memory Resilience Mode'}</strong></p>
    </div>
  `);
});

// ==========================================
// 404 & Global Error Handling
// ==========================================
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});

app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' ? { stack: err.stack } : {})
  });
});

// ==========================================
// Start Server
// ==========================================
const PORT = process.env.PORT || 5001;
const server = app.listen(PORT, () => {
  console.log(`🚀 MGM College API Server running on http://localhost:${PORT}`);
});

module.exports = { app, server };