import React, { useState } from "react";
import "../styles/Grievances.css";
import declarationPdf from "../assets/pdf/5.1.4_DECLARATION.pdf";

const Grievances = () => {
  // Suggestion Box state
  const [suggestions, setSuggestions] = useState({ suggestion1: "", suggestion2: "", suggestion3: "" });
  const [sMsg, setSMsg] = useState("");

  // Grievance state
  const [griev, setGriev] = useState({
    email: "",
    name: "",
    altEmail: "",
    contact: "",
    nature: "",
    complaint: "",
    additional: "",
  });
  const [gMsg, setGMsg] = useState("");

  // API base
  const API = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

  const saveToLS = (key, item) => {
    try {
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      localStorage.setItem(key, JSON.stringify([item, ...existing]));
    } catch {
      localStorage.setItem(key, JSON.stringify([item]));
    }
  };

  const submitSuggestion = async (e) => {
    e.preventDefault();
    if (!suggestions.suggestion1.trim()) return setSMsg("Please enter at least one suggestion.");
    const entry = {
      id: Date.now(),
      submittedAt: new Date().toISOString(),
      items: [suggestions.suggestion1, suggestions.suggestion2, suggestions.suggestion3].filter(Boolean),
    };
    const payload = { submittedAt: entry.submittedAt, items: entry.items };
    try {
      const res = await fetch(`${API}/suggestions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit to server");
      setSMsg("✅ Suggestion submitted and saved to server.");
    } catch (err) {
      console.warn("Offline suggestion fallback:", err);
      saveToLS("suggestions", entry);
      setSMsg("✅ Suggestion submitted locally. Start the backend to sync.");
    }
    setSuggestions({ suggestion1: "", suggestion2: "", suggestion3: "" });
  };

  const submitGrievance = async (e) => {
    e.preventDefault();
    const required = [griev.email, griev.name, griev.contact, griev.nature, griev.complaint].every((v) => String(v || "").trim());
    if (!required) return setGMsg("Please fill all required fields.");
    const payload = { submittedAt: new Date().toISOString(), ...griev };
    try {
      const res = await fetch(`${API}/grievances`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit to server");
      setGMsg("✅ Grievance submitted and saved to server.");
    } catch (err) {
      console.warn("Offline grievance fallback:", err);
      // Fallback to localStorage so it still appears when offline
      saveToLS("grievances", { id: Date.now(), ...payload });
      setGMsg("✅ Grievance submitted locally. Start the backend to sync.");
    }
    setGriev({ email: "", name: "", altEmail: "", contact: "", nature: "", complaint: "", additional: "" });
  };

  return (
    <div className="grievances-portal">
      <h2>Grievances and Suggestions</h2>
      <p className="grievances-subtitle">Submit suggestions and grievances. These will be visible in the Admin Dashboard.</p>

      <ul className="grievances-list">
        <li>
          <a className="grievances-link" href={declarationPdf} target="_blank" rel="noopener noreferrer">
            <span className="grievances-pill">1</span>
            <span className="grievances-item-text">Declaration</span>
          </a>
        </li>
        <li>
          <a className="grievances-link" href="https://samadhaan.ugc.ac.in/" target="_blank" rel="noopener noreferrer">
            <span className="grievances-pill">2</span>
            <span className="grievances-item-text">UGC Portal for Grievance Redressal</span>
          </a>
        </li>
      </ul>

      {/* E-Suggestion Box */}
      <section className="form-card">
        <h3 className="form-title">IQAC – E-Suggestion Box</h3>
        <p className="form-sub">Do not include personal identity details.</p>
        {sMsg && <div className="form-msg">{sMsg}</div>}
        <form className="form-grid" onSubmit={submitSuggestion}>
          <input className="modern-input" placeholder="Suggestion 1 *" value={suggestions.suggestion1} onChange={(e) => setSuggestions({ ...suggestions, suggestion1: e.target.value })} />
          <input className="modern-input" placeholder="Suggestion 2" value={suggestions.suggestion2} onChange={(e) => setSuggestions({ ...suggestions, suggestion2: e.target.value })} />
          <input className="modern-input" placeholder="Suggestion 3" value={suggestions.suggestion3} onChange={(e) => setSuggestions({ ...suggestions, suggestion3: e.target.value })} />
          <div className="form-actions">
            <button type="submit" className="submit-btn"><span className="btn-icon">📤</span> Submit Suggestion</button>
          </div>
        </form>
      </section>

      {/* Grievance Form */}
      <section className="form-card">
        <h3 className="form-title">Grievance Redressal Form</h3>
        <p className="form-sub">General grievances are addressed impartially with appropriate redressal.</p>
        {gMsg && <div className="form-msg">{gMsg}</div>}
        <form className="form-grid" onSubmit={submitGrievance}>
          <input className="modern-input" placeholder="Email *" type="email" value={griev.email} onChange={(e) => setGriev({ ...griev, email: e.target.value })} />
          <input className="modern-input" placeholder="Name *" value={griev.name} onChange={(e) => setGriev({ ...griev, name: e.target.value })} />
          <input className="modern-input" placeholder="Alternate Email" type="email" value={griev.altEmail} onChange={(e) => setGriev({ ...griev, altEmail: e.target.value })} />
          <input className="modern-input" placeholder="Contact No. *" value={griev.contact} onChange={(e) => setGriev({ ...griev, contact: e.target.value })} />
          <input className="modern-input" placeholder="Nature of Grievance *" value={griev.nature} onChange={(e) => setGriev({ ...griev, nature: e.target.value })} />
          <textarea className="modern-input" rows={3} placeholder="Grievance/Complaint *" value={griev.complaint} onChange={(e) => setGriev({ ...griev, complaint: e.target.value })} />
          <textarea className="modern-input" rows={3} placeholder="Any additional information" value={griev.additional} onChange={(e) => setGriev({ ...griev, additional: e.target.value })} />
          <div className="form-actions">
            <button type="submit" className="submit-btn"><span className="btn-icon">📤</span> Submit Grievance</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Grievances;
