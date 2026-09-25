import mongoose from 'mongoose';

export async function connectDB(uri) {
  mongoose.set('strictQuery', true);

  // Attach listeners once (prevent duplicate logs on hot reloads)
  const conn = mongoose.connection;
  if (!conn.listeners('connected').length) {
    conn.on('connected', () => console.log('[MongoDB] connected'));
  }
  if (!conn.listeners('error').length) {
    conn.on('error', (err) => console.error('[MongoDB] connection error:', err?.message || err));
  }
  if (!conn.listeners('disconnected').length) {
    conn.on('disconnected', () => console.warn('[MongoDB] disconnected'));
  }

  await mongoose.connect(uri, {
    autoIndex: true,
    serverSelectionTimeoutMS: 10000,
    // family: 4, // uncomment if IPv6 causes resolution issues
  });
  return mongoose.connection;
}
