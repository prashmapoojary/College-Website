import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const formatDate = (iso) => {
  try {
    return new Date(iso).toLocaleString();
  } catch {
    return iso;
  }
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const API = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
  const [view, setView] = useState('applications'); // applications | grievances | suggestions | student | alumni | staff | employers | parents
  const [applications, setApplications] = useState([]);
  const [grievances, setGrievances] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [student, setStudent] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [staff, setStaff] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [parents, setParents] = useState([]);
  const [query, setQuery] = useState('');
  const [course, setCourse] = useState('');
  const [category, setCategory] = useState('');
  const [sortKey, setSortKey] = useState('submittedAt');
  const [sortDir, setSortDir] = useState('desc');

  const logout = () => {
    try { localStorage.removeItem('admin_token'); } catch (err) { console.warn(err); }
    navigate('/login', { replace: true });
  };

  const withIds = (arr, prefix) => (Array.isArray(arr) ? arr : []).map((x, i) => ({
    id: x.id || x._id || `${prefix}-${i}-${x.submittedAt || Date.now()}`,
    ...x,
  }));

  const apiGet = useCallback(async (path) => {
    const res = await fetch(`${API}${path}`);
    if (!res.ok) throw new Error(`GET ${path} failed`);
    return res.json();
  }, [API]);

  const apiDelete = async (path) => {
    const res = await fetch(`${API}${path}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`DELETE ${path} failed`);
    return res.json();
  };

  const load = useCallback(async () => {
    try {
      const [apps, grs, sugs, st, al, sf, emp, pr] = await Promise.all([
        apiGet('/applications'),
        apiGet('/grievances'),
        apiGet('/suggestions'),
        apiGet('/student'),
        apiGet('/alumni'),
        apiGet('/staff'),
        apiGet('/employers'),
        apiGet('/parents'),
      ]);
      // Merge server applications with any locally saved (offline) applications
      const serverApps = withIds(apps, 'application');
      let localApps = [];
      try { localApps = withIds(JSON.parse(localStorage.getItem('applications')) || [], 'application'); } catch { localApps = []; }
      const existingIds = new Set(serverApps.map(a => a.id));
      const mergedApps = [...localApps.filter(a => !existingIds.has(a.id)), ...serverApps];
      setApplications(mergedApps);

      // Merge grievances (server + any locally saved when offline)
      const serverGrs = withIds(grs, 'grievance');
      let localGrs = [];
      try { localGrs = withIds(JSON.parse(localStorage.getItem('grievances')) || [], 'grievance'); } catch { localGrs = []; }
      const existingGIds = new Set(serverGrs.map(g => g.id));
      const mergedGrs = [...localGrs.filter(g => !existingGIds.has(g.id)), ...serverGrs];
      setGrievances(mergedGrs);

      // Merge suggestions as well
      const serverSugs = withIds(sugs, 'suggestion');
      let localSugs = [];
      try { localSugs = withIds(JSON.parse(localStorage.getItem('suggestions')) || [], 'suggestion'); } catch { localSugs = []; }
      const existingSIds = new Set(serverSugs.map(s => s.id));
      const mergedSugs = [...localSugs.filter(s => !existingSIds.has(s.id)), ...serverSugs];
      setSuggestions(mergedSugs);
      setStudent(withIds(st, 'student'));
      setAlumni(withIds(al, 'alumni'));
      setStaff(withIds(sf, 'staff'));
      setEmployers(withIds(emp, 'employers'));
      setParents(withIds(pr, 'parents'));
    } catch (e) {
      console.error('Load failed, falling back to localStorage', e);
      try { setApplications(JSON.parse(localStorage.getItem('applications')) || []); } catch { setApplications([]); }
      let gRaw = []; let sRaw = [];
      try { gRaw = JSON.parse(localStorage.getItem('grievances')) || []; } catch { gRaw = []; }
      try { sRaw = JSON.parse(localStorage.getItem('suggestions')) || []; } catch { sRaw = []; }
      setGrievances(withIds(gRaw, 'grievance'));
      setSuggestions(withIds(sRaw, 'suggestion'));
      try { setStudent(withIds(JSON.parse(localStorage.getItem('student_feedback')) || [], 'student')); } catch { setStudent([]); }
      try { setAlumni(withIds(JSON.parse(localStorage.getItem('alumni_feedback')) || [], 'alumni')); } catch { setAlumni([]); }
      try { setStaff(withIds(JSON.parse(localStorage.getItem('staff_feedback')) || [], 'staff')); } catch { setStaff([]); }
      try { setEmployers(withIds(JSON.parse(localStorage.getItem('employers_feedback')) || [], 'employers')); } catch { setEmployers([]); }
      try { setParents(withIds(JSON.parse(localStorage.getItem('parents_feedback')) || [], 'parents')); } catch { setParents([]); }
    }
  }, [apiGet]);

  useEffect(() => {
    load();
  }, [load]);

  const filtered = useMemo(() => {
    let data = [];
    if (view === 'applications') data = [...applications];
    if (view === 'grievances') data = [...grievances];
    if (view === 'suggestions') data = [...suggestions];
    if (view === 'student') data = [...student];
    if (view === 'alumni') data = [...alumni];
    if (view === 'staff') data = [...staff];
    if (view === 'employers') data = [...employers];
    if (view === 'parents') data = [...parents];

    const q = query.toLowerCase();
    if (q) {
      if (view === 'applications') {
        data = data.filter((a) => [a.name, a.email, a.phone, a.college, a.university, a.address, a.combination]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'grievances') {
        data = data.filter((g) => [g.email, g.name, g.contact, g.nature, g.complaint, g.additional]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'suggestions') {
        data = data.filter((s) => (s.items || []).some((t) => String(t).toLowerCase().includes(q)));
      } else if (view === 'student') {
        data = data.filter((r) => [r.name, r.email, r.rollNo, r.className, r.gender, r.suggestions, r.complaints]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'alumni') {
        data = data.filter((r) => [r.name, r.email, r.batch, r.support, r.infrastructure, r.satisfaction, r.suggestions]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'staff') {
        data = data.filter((r) => [r.name, r.email, r.academicFacilities, r.infrastructure, r.performance, r.overallSatisfaction, r.suggestions, r.complaints]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'employers') {
        data = data.filter((r) => [r.name, r.email, r.place, r.organization, r.qualityOfOutput, r.overallPerception, r.suggestions]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      } else if (view === 'parents') {
        data = data.filter((r) => [r.name, r.email, r.studentStudy, r.academicPerformance, r.coCurricularOutcome, r.generalPerception, r.suggestions, r.complaints]
          .filter(Boolean).some((v) => String(v).toLowerCase().includes(q)));
      }
    }

    if (view === 'applications') {
      if (course) data = data.filter((a) => a.course === course);
      if (category) data = data.filter((a) => a.category === category);
    }

    data.sort((a, b) => {
      const va = a[sortKey];
      const vb = b[sortKey];
      if (sortKey === 'submittedAt') {
        const da = new Date(va).getTime();
        const db = new Date(vb).getTime();
        return sortDir === 'asc' ? da - db : db - da;
      }
      const sa = String(va || '').toLowerCase();
      const sb = String(vb || '').toLowerCase();
      if (sa < sb) return sortDir === 'asc' ? -1 : 1;
      if (sa > sb) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });

    return data;
  }, [view, applications, grievances, suggestions, student, alumni, staff, employers, parents, query, course, category, sortKey, sortDir]);

  const setSort = (key) => {
    if (key === sortKey) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const removeOne = async (id) => {
    const route = view; // matches backend keys
    try {
      await apiDelete(`/${route}/${id}`);
      await load();
    } catch (e) {
      console.error('Delete failed, removing locally', e);
      // fallback local removal
      if (view === 'applications') setApplications((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'grievances') setGrievances((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'suggestions') setSuggestions((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'student') setStudent((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'alumni') setAlumni((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'staff') setStaff((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'employers') setEmployers((prev) => prev.filter((a) => a.id !== id));
      else if (view === 'parents') setParents((prev) => prev.filter((a) => a.id !== id));
    }
  };

  const clearAll = async () => {
    const label = view === 'applications' ? 'applications' : view;
    if (!window.confirm(`Clear all ${label}?`)) return;
    try {
      await apiDelete(`/${view}`);
      await load();
    } catch (e) {
      console.error('Clear all failed, falling back to local', e);
      if (view === 'applications') setApplications([]);
      if (view === 'grievances') setGrievances([]);
      if (view === 'suggestions') setSuggestions([]);
      if (view === 'student') setStudent([]);
      if (view === 'alumni') setAlumni([]);
      if (view === 'staff') setStaff([]);
      if (view === 'employers') setEmployers([]);
      if (view === 'parents') setParents([]);
    }
  };

  const exportCSV = () => {
    let data = filtered;
    if (!data.length) return;
    let headers = [];
    if (view === 'applications') {
      headers = ['id','submittedAt','name','email','phone','dob','gender','category','address','motherName','fatherName','course','combination','tenthObtained','tenthTotal','tenthPercent','pucObtained','pucTotal','pucPercent','mscObtained','mscTotal','mscPercent','college','university'];
    } else if (view === 'grievances') {
      headers = ['id','submittedAt','email','name','altEmail','contact','nature','complaint','additional'];
    } else if (view === 'suggestions') {
      headers = ['id','submittedAt','items'];
    } else if (view === 'student') {
      headers = ['id','submittedAt','name','email','rollNo','className','gender','classrooms','teachingSupport','library','outcomes','culturalActivities','atmosphere','suggestions','complaints'];
    } else if (view === 'alumni') {
      headers = ['id','submittedAt','name','email','batch','support','infrastructure','satisfaction','suggestions'];
    } else if (view === 'staff') {
      headers = ['id','submittedAt','name','email','academicFacilities','infrastructure','performance','overallSatisfaction','suggestions','complaints'];
    } else if (view === 'employers') {
      headers = ['id','submittedAt','name','email','place','organization','qualityOfOutput','overallPerception','suggestions'];
    } else if (view === 'parents') {
      headers = ['id','submittedAt','name','email','studentStudy','academicPerformance','coCurricularOutcome','generalPerception','suggestions','complaints'];
    }
    const rows = data.map((a) => headers.map((h) => {
      const v = a[h];
      if (Array.isArray(v)) return '"' + v.join(' | ') + '"';
      return (v ?? '');
    }).join(','));
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${view}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const buildStyles = () => `
    <style>
      body { font-family: Segoe UI, Tahoma, sans-serif; padding: 24px; }
      h1 { margin: 0 0 8px; }
      .muted { color: #666; }
      table { width: 100%; border-collapse: collapse; margin-top: 12px; }
      th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
      thead th { background: #f7f7fb; }
      .row { margin-bottom: 6px; }
      .label { font-weight: 600; width: 180px; display: inline-block; }
      @media print { .no-print { display: none; } }
    </style>
  `;

  const exportPDFAll = () => {
    if (view === 'applications') {
      const rows = filtered.map((a) => `
      <tr>
        <td>${formatDate(a.submittedAt)}</td>
        <td>${a.name || ''}</td>
        <td>${a.email || ''}</td>
        <td>${a.phone || ''}</td>
        <td>${(a.course || '').toUpperCase()}${a.combination ? ' - ' + a.combination : ''}</td>
        <td>${a.category || ''}</td>
        <td>${a.course === 'msc' ? (a.mscPercent || '-') + '%' : `10th: ${a.tenthPercent || '-'}%${a.pucPercent ? ', PUC: ' + a.pucPercent + '%' : ''}`}</td>
        <td>${a.college || ''}<div class="muted">${a.university || ''}</div></td>
      </tr>
    `).join('');

      const html = `
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Applications Report</title>
          ${buildStyles()}
        </head>
        <body>
          <h1>Applications Report</h1>
          <div class="muted">Generated: ${new Date().toLocaleString()}</div>
          <table>
            <thead>
              <tr>
                <th>Submitted</th><th>Name</th><th>Email</th><th>Phone</th><th>Course</th><th>Category</th><th>Marks</th><th>College/University</th>
              </tr>
            </thead>
            <tbody>${rows || '<tr><td colspan="8">No applications.</td></tr>'}</tbody>
          </table>
          <div class="no-print" style="margin-top:16px"><button onclick="window.print()">Print / Save as PDF</button></div>
          <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
        </body>
      </html>`;
      const w = window.open('', '_blank');
      if (!w) return;
      w.document.open();
      w.document.write(html);
      w.document.close();
      return;
    }

    if (view === 'grievances') {
      const rows = filtered.map((g) => `
        <tr>
          <td>${formatDate(g.submittedAt)}</td>
          <td>${g.email || ''}</td>
          <td>${g.name || ''}</td>
          <td>${g.contact || ''}</td>
          <td>${g.nature || ''}</td>
          <td>${(g.complaint || '').replace(/</g,'&lt;')}</td>
        </tr>
      `).join('');
      const html = `
        <html>
          <head>
            <meta charset="utf-8" />
            <title>Grievances Report</title>
            ${buildStyles()}
          </head>
          <body>
            <h1>Grievances Report</h1>
            <div class="muted">Generated: ${new Date().toLocaleString()}</div>
            <table>
              <thead>
                <tr><th>Submitted</th><th>Email</th><th>Name</th><th>Contact</th><th>Nature</th><th>Complaint</th></tr>
              </thead>
              <tbody>${rows || '<tr><td colspan="6">No grievances.</td></tr>'}</tbody>
            </table>
            <div class="no-print" style="margin-top:16px"><button onclick="window.print()">Print / Save as PDF</button></div>
            <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
          </body>
        </html>`;
      const w = window.open('', '_blank');
      if (!w) return;
      w.document.open();
      w.document.write(html);
      w.document.close();
      return;
    }

    // suggestions
    const rows = filtered.map((s) => `
      <tr>
        <td>${formatDate(s.submittedAt)}</td>
        <td>${(s.items || []).map((x) => `<div>• ${String(x).replace(/</g,'&lt;')}</div>`).join('')}</td>
      </tr>
    `).join('');
    const html = `
      <html>
        <head>
          <meta charset="utf-8" />
          <title>Suggestions Report</title>
          ${buildStyles()}
        </head>
        <body>
          <h1>Suggestions Report</h1>
          <div class="muted">Generated: ${new Date().toLocaleString()}</div>
          <table>
            <thead>
              <tr><th>Submitted</th><th>Suggestions</th></tr>
            </thead>
            <tbody>${rows || '<tr><td colspan="2">No suggestions.</td></tr>'}</tbody>
          </table>
          <div class="no-print" style="margin-top:16px"><button onclick="window.print()">Print / Save as PDF</button></div>
          <script>window.onload = () => setTimeout(() => window.print(), 300);</script>
        </body>
      </html>`;
    const w = window.open('', '_blank');
    if (!w) return;
    w.document.open();
    w.document.write(html);
    w.document.close();
  };


  return (
    <div className="admin-page" style={{minHeight: '100vh', background: 'linear-gradient(135deg, #cddade, #80b7e4)', padding: '20px'}}>
      <div className="admin-container">
        <header className="admin-header" style={{position:'relative'}}>
          <h1>Admin Dashboard</h1>
          <button className="btn danger small" onClick={logout} style={{position:'absolute', right:0, top:0}}>
            Logout
          </button>
          <p>
            {view==='applications' && 'Review, filter, and export applications submitted via Apply form.'}
            {view==='grievances' && 'Review, filter, and export grievances submitted via Grievance form.'}
            {view==='suggestions' && 'Review, filter, and export E-Suggestion Box submissions.'}
            {view==='student' && 'Review, filter, and export Student Feedback.'}
            {view==='alumni' && 'Review, filter, and export Alumni Feedback.'}
            {view==='staff' && 'Review, filter, and export Staff Feedback.'}
            {view==='employers' && 'Review, filter, and export Employers Feedback.'}
            {view==='parents' && 'Review, filter, and export Parents Feedback.'}
          </p>
        </header>

        {/* Tabs */}
        <div className="admin-tabs">
          <button className={`tab ${view==='applications' ? 'active' : ''}`} onClick={()=>setView('applications')}>Applications</button>
          <button className={`tab ${view==='grievances' ? 'active' : ''}`} onClick={()=>setView('grievances')}>Grievances</button>
          <button className={`tab ${view==='suggestions' ? 'active' : ''}`} onClick={()=>setView('suggestions')}>Suggestions</button>
          <button className={`tab ${view==='student' ? 'active' : ''}`} onClick={()=>setView('student')}>Student</button>
          <button className={`tab ${view==='alumni' ? 'active' : ''}`} onClick={()=>setView('alumni')}>Alumni</button>
          <button className={`tab ${view==='staff' ? 'active' : ''}`} onClick={()=>setView('staff')}>Staff</button>
          <button className={`tab ${view==='employers' ? 'active' : ''}`} onClick={()=>setView('employers')}>Employers</button>
          <button className={`tab ${view==='parents' ? 'active' : ''}`} onClick={()=>setView('parents')}>Parents</button>
        </div>

        <section className="admin-controls">
          <input
            className="modern-input"
            placeholder={
              view==='applications' ? 'Search name, email, phone, college...'
                : view==='grievances' ? 'Search email, name, nature, complaint...'
                : view==='suggestions' ? 'Search suggestions...'
                : view==='student' ? 'Search name, email, roll no, class, suggestions, complaints...'
                : view==='alumni' ? 'Search name, email, batch, suggestions...'
                : view==='staff' ? 'Search name, email, suggestions, complaints...'
                : view==='employers' ? 'Search name, email, place, org, suggestions...'
                : 'Search name, email, suggestions, complaints...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {view === 'applications' && (
            <>
              <select className="modern-select" value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">All Courses</option>
                <option value="bca">BCA</option>
                <option value="bcom">BCOM</option>
                <option value="bsc">BSC</option>
                <option value="ba">BA</option>
                <option value="msc">MSC</option>
              </select>
              <select className="modern-select" value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="general">General</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="ews">EWS</option>
                <option value="others">Others</option>
              </select>
            </>
          )}
          <div className="admin-actions">
            <button className="btn export" onClick={exportCSV}>Export CSV</button>
            <button className="btn refresh" onClick={exportPDFAll}>Export PDF</button>
            <button className="btn refresh" onClick={load}>Refresh</button>
            <button className="btn danger" onClick={clearAll}>Clear All</button>
          </div>
        </section>

        <section className="admin-card">
          <div className="table-wrap">
            {view==='applications' ? (
              <div>
                {['bca','bcom','bsc','ba','msc'].map((key) => {
                  const label = key.toUpperCase();
                  const group = filtered.filter((a) => a.course === key);
                  if (!group.length) return null;
                  return (
                    <div key={key} style={{ marginBottom: '24px' }}>
                      <h3 style={{ margin: '8px 0', color: '#111827' }}>{label}</h3>
                      <table className="table">
                        <thead>
                          <tr>
                            <th onClick={() => setSort('submittedAt')}>Submitted</th>
                            <th onClick={() => setSort('name')}>Name</th>
                            <th onClick={() => setSort('email')}>Email</th>
                            <th onClick={() => setSort('phone')}>Mobile</th>
                            <th onClick={() => setSort('category')}>Category</th>
                            <th onClick={() => setSort('dob')}>DOB</th>
                            <th onClick={() => setSort('gender')}>Gender</th>
                            <th onClick={() => setSort('address')}>Address</th>
                            <th>Mother</th>
                            <th>Father</th>
                            <th onClick={() => setSort('course')}>Course / Combo</th>
                            <th>Marks</th>
                            <th onClick={() => setSort('college')}>College</th>
                            <th onClick={() => setSort('university')}>University</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.map((a) => (
                            <tr key={a.id}>
                              <td title={a.submittedAt}>{formatDate(a.submittedAt)}</td>
                              <td>{a.name}</td>
                              <td>{a.email}</td>
                              <td>{a.phone}</td>
                              <td>{a.category || '-'}</td>
                              <td>{a.dob || '-'}</td>
                              <td>{a.gender || '-'}</td>
                              <td>{a.address || '-'}</td>
                              <td>{a.motherName || '-'}</td>
                              <td>{a.fatherName || '-'}</td>
                              <td>{(a.course || '').toUpperCase()}{a.combination ? ` - ${a.combination}` : ''}</td>
                              <td>
                                {a.course === 'msc' ? (
                                  <span>{a.mscPercent || '-'}%</span>
                                ) : (
                                  <>
                                    <div>10th: {a.tenthPercent || '-'}%</div>
                                    {a.pucPercent ? <div>PUC: {a.pucPercent}%</div> : null}
                                  </>
                                )}
                              </td>
                              <td>{a.college || '-'}</td>
                              <td>{a.university || '-'}</td>
                              <td>
                                <button className="btn danger small" onClick={() => removeOne(a.id)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                          {group.length === 0 && (
                            <tr>
                              <td colSpan={15} className="empty">No records found.</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
              </div>
            ) : (
              <table className="table">
                <thead>
                {view==='grievances' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('contact')}>Contact</th>
                    <th onClick={() => setSort('nature')}>Nature</th>
                    <th>Complaint</th>
                    <th>Actions</th>
                  </tr>
                ) : view==='suggestions' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th>Suggestions</th>
                    <th>Actions</th>
                  </tr>
                ) : view==='student' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th onClick={() => setSort('rollNo')}>Roll No</th>
                    <th onClick={() => setSort('className')}>Class</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                  </tr>
                ) : view==='alumni' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th onClick={() => setSort('batch')}>Batch</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                  </tr>
                ) : view==='staff' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                  </tr>
                ) : view==='employers' ? (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th onClick={() => setSort('organization')}>Organization</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                  </tr>
                ) : (
                  <tr>
                    <th onClick={() => setSort('submittedAt')}>Submitted</th>
                    <th onClick={() => setSort('name')}>Name</th>
                    <th onClick={() => setSort('email')}>Email</th>
                    <th>Ratings</th>
                    <th>Actions</th>
                  </tr>
                )}
                </thead>
                <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={
                      view==='grievances' ? 7
                        : view==='suggestions' ? 3
                        : 6
                    } className="empty">No records found.</td>
                  </tr>
                ) : view==='grievances' ? (
                  filtered.map((g) => (
                    <tr key={g.id}>
                      <td title={g.submittedAt}>{formatDate(g.submittedAt)}</td>
                      <td>{g.email}</td>
                      <td>{g.name}</td>
                      <td>{g.contact}</td>
                      <td>{g.nature}</td>
                      <td>{g.complaint}</td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(g.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : view==='suggestions' ? (
                  filtered.map((s) => (
                    <tr key={s.id}>
                      <td title={s.submittedAt}>{formatDate(s.submittedAt)}</td>
                      <td>{(s.items || []).map((t, i) => <div key={i}>• {t}</div>)}</td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(s.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : view==='student' ? (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td title={r.submittedAt}>{formatDate(r.submittedAt)}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.rollNo}</td>
                      <td>{r.className}</td>
                      <td>
                        <div>Classrooms: {r.classrooms || '-'}</div>
                        <div>Teaching: {r.teachingSupport || '-'}</div>
                        <div>Library: {r.library || '-'}</div>
                      </td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : view==='alumni' ? (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td title={r.submittedAt}>{formatDate(r.submittedAt)}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.batch}</td>
                      <td>
                        <div>Support: {r.support || '-'}</div>
                        <div>Infra: {r.infrastructure || '-'}</div>
                        <div>Satisfaction: {r.satisfaction || '-'}</div>
                      </td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : view==='staff' ? (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td title={r.submittedAt}>{formatDate(r.submittedAt)}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>
                        <div>Academic: {r.academicFacilities || '-'}</div>
                        <div>Infra: {r.infrastructure || '-'}</div>
                        <div>Performance: {r.performance || '-'}</div>
                      </td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : view==='employers' ? (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td title={r.submittedAt}>{formatDate(r.submittedAt)}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>{r.organization}</td>
                      <td>
                        <div>Quality: {r.qualityOfOutput || '-'}</div>
                        <div>Perception: {r.overallPerception || '-'}</div>
                      </td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  filtered.map((r) => (
                    <tr key={r.id}>
                      <td title={r.submittedAt}>{formatDate(r.submittedAt)}</td>
                      <td>{r.name}</td>
                      <td>{r.email}</td>
                      <td>
                        <div>Study: {r.studentStudy || '-'}</div>
                        <div>Academic: {r.academicPerformance || '-'}</div>
                        <div>General: {r.generalPerception || '-'}</div>
                      </td>
                      <td>
                        <button className="btn danger small" onClick={() => removeOne(r.id)}>Delete</button>
                      </td>
                    </tr>
                  ))
                )}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
