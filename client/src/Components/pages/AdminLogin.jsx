import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Apply.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const token = localStorage.getItem('admin_token');
      if (token) {
        navigate('/admin', { replace: true });
      }
    } catch {
      // ignore
    }
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
            const base = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
      const res = await fetch(`${base}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: id.trim(), password })
      });
      if (!res.ok) {
        const msg = await res.json().catch(() => ({}));
        throw new Error(msg.message || 'Login failed');
      }
      const data = await res.json();
      localStorage.setItem('admin_token', data.token);
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed');
      localStorage.removeItem('admin_token');
    }
  };

  return (
    <div className="apply-page">
      <div className="apply-container">
        <div className="form-section">
          <div className="form-header">
            <h1>Admin Login</h1>
            <p>Enter your credentials to access the admin dashboard</p>
          </div>

          <form onSubmit={onSubmit} className="form-grid" style={{maxWidth: 520}}>
            <div className="form-group" style={{gridColumn: '1 / -1'}}>
              <label>Admin ID</label>
              <input
                type="text"
                className="modern-input"
                placeholder="Enter Admin ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                autoComplete="username"
                required
              />
            </div>
            <div className="form-group" style={{gridColumn: '1 / -1'}}>
              <label>Password</label>
              <input
                type="password"
                className="modern-input"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />
            </div>

            {error && (
              <div style={{gridColumn: '1 / -1', color:'#dc2626', fontSize:14, marginTop:-6}}>{error}</div>
            )}

            <div className="form-actions" style={{gridColumn: '1 / -1'}}>
              <button type="submit" className="submit-btn">
                <span className="btn-icon">🔐</span> Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
