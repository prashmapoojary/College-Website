import React from "react";
import "../styles/Feedback.css";
import feedbackSystemPdf from "../assets/pdf/1.4.1_Feedback System.pdf";

const radioGroup = (name) => {
  const opts = ["Very Good", "Good", "Satisfactory", "Not Satisfactory"];
  return opts.map(opt => `
    <label style="display:block">
      <input type="radio" name="${name}" value="${opt}" required/> ${opt}
    </label>
  `).join("");
};

// Styles to apply to all popup forms (provided by user)
const popupCss = `
/* =========================
   Page Background & Container
========================= */
.apply-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea, #764ba2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.apply-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem;
}

/* =========================
   Form Section
========================= */
.form-section {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

/* =========================
   Header
========================= */
.form-header {
  text-align: center;
  margin-bottom: 1.25rem;
}

.form-header h1,
.form-header h3 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 0.5rem;
}

.form-header p {
  font-size: 1.1rem;
  color: #666;
}

/* =========================
   Form Layout
========================= */
.form-grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.form-grid > br { display: none; }
.form-grid label, .form-grid fieldset { margin: 0; }

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* =========================
   Inputs & Selects
========================= */
.modern-input,
.modern-select {
  padding: 1rem 1.2rem;
  font-size: 1rem;
  border: 2px solid #e9ecef;
  border-radius: 12px;
  background: white;
  color: #333;
  transition: all 0.3s ease;
}

.modern-input:focus,
.modern-select:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-2px);
}

.modern-input::placeholder {
  color: #999;
}

/* Radios/fieldsets base */
fieldset { border: 2px solid #e9ecef; border-radius: 12px; padding: 1rem; }

/* =========================
   Submit Button
========================= */
.form-actions { text-align: center; margin-top: 1rem; }
.submit-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}
.submit-btn:hover { transform: translateY(-3px); box-shadow: 0 15px 40px rgba(102, 126, 234, 0.4); }

/* Basic mapping for existing markup */
input[type="text"], input[type="email"], textarea { width: 100%; padding: 1rem 1.2rem; font-size: 1rem; border: 2px solid #e9ecef; border-radius: 12px; }
`; 

const Feedback = () => {
  const base = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

  // === Student Feedback ===
  const openStudentFeedback = () => {
    const win = window.open("", "_blank", "width=900,height=800,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>Student Feedback</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>Student Feedback Form</h3></div>
              <form id="studentForm" class="form-grid">
            <label>Name *<br/><input type="text" required style="width:100%;padding:6px"/></label>
            <label>Roll No *<br/><input type="text" required style="width:100%;padding:6px"/></label>
            <label>Class *<br/><input type="text" required style="width:100%;padding:6px"/></label>
            <label>Gender<br/><input type="text" style="width:100%;padding:6px"/></label>
            <label>Email<br/><input type="email" style="width:100%;padding:6px"/></label>
            <fieldset><legend>Classrooms *</legend>${radioGroup("classrooms")}</fieldset>
            <fieldset><legend>Teaching Support *</legend>${radioGroup("teachingSupport")}</fieldset>
            <fieldset><legend>Library *</legend>${radioGroup("library")}</fieldset>
            <fieldset><legend>Outcomes *</legend>${radioGroup("outcomes")}</fieldset>
            <fieldset><legend>Cultural Activities *</legend>${radioGroup("culturalActivities")}</fieldset>
            <fieldset><legend>Atmosphere *</legend>${radioGroup("atmosphere")}</fieldset>
            <label>Suggestions<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <label>Complaints<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
        <script>
          const API = '${base}';
          document.getElementById("studentForm").addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.querySelector('label:nth-of-type(1) input')?.value || '',
              rollNo: form.querySelector('label:nth-of-type(2) input')?.value || '',
              className: form.querySelector('label:nth-of-type(3) input')?.value || '',
              gender: form.querySelector('label:nth-of-type(4) input')?.value || '',
              email: form.querySelector('label:nth-of-type(5) input')?.value || '',
              classrooms: form.querySelector('input[name="classrooms"]:checked')?.value || '',
              teachingSupport: form.querySelector('input[name="teachingSupport"]:checked')?.value || '',
              library: form.querySelector('input[name="library"]:checked')?.value || '',
              outcomes: form.querySelector('input[name="outcomes"]:checked')?.value || '',
              culturalActivities: form.querySelector('input[name="culturalActivities"]:checked')?.value || '',
              atmosphere: form.querySelector('input[name="atmosphere"]:checked')?.value || '',
              suggestions: form.querySelector('label:nth-of-type(11) textarea')?.value || '',
              complaints: form.querySelector('label:nth-of-type(12) textarea')?.value || '',
              submittedAt: new Date().toISOString(),
            };
            (async () => {
              try {
                const res = await fetch(API + '/student', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                if (!res.ok) throw new Error('Network');
              } catch (err) {
                try {
                  const key = 'student_feedback';
                  const arr = JSON.parse(localStorage.getItem(key) || '[]');
                  arr.push(data);
                  localStorage.setItem(key, JSON.stringify(arr));
                } catch {}
              }
              alert('✅ Student feedback submitted!');
              window.close();
            })();
          });
        </script>
        </body>
      </html>
    `);
  };

  // === Alumni Feedback ===
  const openAlumniFeedback = () => {
    const win = window.open("", "_blank", "width=900,height=800,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>Alumni Feedback</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>Alumni Feedback Form</h3></div>
              <form id="alumniForm" class="form-grid">
            <label>Name *<br/><input type="text" required style="width:100%;padding:6px"/></label>
            <label>Email *<br/><input type="email" required style="width:100%;padding:6px"/></label>
            <label>Batch *<br/><input type="text" required style="width:100%;padding:6px"/></label>
            <fieldset><legend>Academic Support *</legend>${radioGroup("support")}</fieldset>
            <fieldset><legend>Infrastructure *</legend>${radioGroup("infrastructure")}</fieldset>
            <fieldset><legend>Satisfaction *</legend>${radioGroup("satisfaction")}</fieldset>
            <label>Suggestions<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
        <script>
          const API = '${base}';
          document.getElementById("alumniForm").addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.querySelector('label:nth-of-type(1) input')?.value || '',
              email: form.querySelector('label:nth-of-type(2) input')?.value || '',
              batch: form.querySelector('label:nth-of-type(3) input')?.value || '',
              support: form.querySelector('input[name="support"]:checked')?.value || '',
              infrastructure: form.querySelector('input[name="infrastructure"]:checked')?.value || '',
              satisfaction: form.querySelector('input[name="satisfaction"]:checked')?.value || '',
              suggestions: form.querySelector('label:nth-of-type(4) textarea')?.value || '',
              submittedAt: new Date().toISOString(),
            };
            (async () => {
              try {
                const res = await fetch(API + '/alumni', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                if (!res.ok) throw new Error('Network');
              } catch (err) {
                try {
                  const key = 'alumni_feedback';
                  const arr = JSON.parse(localStorage.getItem(key) || '[]');
                  arr.push(data);
                  localStorage.setItem(key, JSON.stringify(arr));
                } catch {}
              }
              alert('✅ Alumni feedback submitted!');
              window.close();
            })();
          });
        </script>
        </body>
      </html>
    `);
  };

  // === Staff Feedback ===
  const openStaffFeedback = () => {
    const win = window.open("", "_blank", "width=900,height=800,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>Staff Feedback</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>Staff Feedback Form</h3></div>
              <form id="staffForm" class="form-grid">
            <label>Name<br/><input type="text" style="width:100%;padding:6px"/></label>
            <label>Email<br/><input type="email" style="width:100%;padding:6px"/></label>
            <fieldset><legend>Academic Facilities *</legend>${radioGroup("academicFacilities")}</fieldset>
            <fieldset><legend>Infrastructure *</legend>${radioGroup("infrastructure")}</fieldset>
            <fieldset><legend>Student Performance *</legend>${radioGroup("performance")}</fieldset>
            <fieldset><legend>Overall Satisfaction *</legend>${radioGroup("overallSatisfaction")}</fieldset>
            <label>Suggestions<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <label>Complaints<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
        <script>
          const API = '${base}';
          document.getElementById("staffForm").addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.querySelector('label:nth-of-type(1) input')?.value || '',
              email: form.querySelector('label:nth-of-type(2) input')?.value || '',
              academicFacilities: form.querySelector('input[name="academicFacilities"]:checked')?.value || '',
              infrastructure: form.querySelector('input[name="infrastructure"]:checked')?.value || '',
              performance: form.querySelector('input[name="performance"]:checked')?.value || '',
              overallSatisfaction: form.querySelector('input[name="overallSatisfaction"]:checked')?.value || '',
              suggestions: form.querySelector('label:nth-of-type(5) textarea')?.value || '',
              complaints: form.querySelector('label:nth-of-type(6) textarea')?.value || '',
              submittedAt: new Date().toISOString(),
            };
            (async () => {
              try {
                const res = await fetch(API + '/staff', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                if (!res.ok) throw new Error('Network');
              } catch (err) {
                try {
                  const key = 'staff_feedback';
                  const arr = JSON.parse(localStorage.getItem(key) || '[]');
                  arr.push(data);
                  localStorage.setItem(key, JSON.stringify(arr));
                } catch {}
              }
              alert('✅ Staff feedback submitted!');
              window.close();
            })();
          });
        </script>
        </body>
      </html>
    `);
  };

  // === Employers Feedback ===
  const openEmployersFeedback = () => {
    const win = window.open("", "_blank", "width=900,height=800,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>Employers Feedback</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>Employers Feedback Form</h3></div>
              <form id="employersForm" class="form-grid">
            <label>Name<br/><input type="text" style="width:100%;padding:6px"/></label>
            <label>Email<br/><input type="email" style="width:100%;padding:6px"/></label>
            <label>Place<br/><input type="text" style="width:100%;padding:6px"/></label>
            <label>Company/Firm/Industry<br/><input type="text" style="width:100%;padding:6px"/></label>
            <fieldset><legend>Quality of Student Output *</legend>${radioGroup("qualityOfOutput")}</fieldset>
            <fieldset><legend>Overall Perception *</legend>${radioGroup("overallPerception")}</fieldset>
            <label>Suggestions<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
        <script>
          const API = '${base}';
          document.getElementById("employersForm").addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.querySelector('label:nth-of-type(1) input')?.value || '',
              email: form.querySelector('label:nth-of-type(2) input')?.value || '',
              place: form.querySelector('label:nth-of-type(3) input')?.value || '',
              organization: form.querySelector('label:nth-of-type(4) input')?.value || '',
              qualityOfOutput: form.querySelector('input[name="qualityOfOutput"]:checked')?.value || '',
              overallPerception: form.querySelector('input[name="overallPerception"]:checked')?.value || '',
              suggestions: form.querySelector('label:nth-of-type(5) textarea')?.value || '',
              submittedAt: new Date().toISOString(),
            };
            (async () => {
              try {
                const res = await fetch(API + '/employers', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                if (!res.ok) throw new Error('Network');
              } catch (err) {
                try {
                  const key = 'employers_feedback';
                  const arr = JSON.parse(localStorage.getItem(key) || '[]');
                  arr.push(data);
                  localStorage.setItem(key, JSON.stringify(arr));
                } catch {}
              }
              alert('✅ Employers feedback submitted!');
              window.close();
            })();
          });
        </script>
        </body>
      </html>
    `);
  };

  // === Parents Feedback ===
  const openParentsFeedback = () => {
    const win = window.open("", "_blank", "width=900,height=800,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>Parents Feedback</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>Parents Feedback Form</h3></div>
              <form id="parentsForm" class="form-grid">
            <label>Name<br/><input type="text" style="width:100%;padding:6px"/></label>
            <label>Email<br/><input type="email" style="width:100%;padding:6px"/></label>
            <fieldset><legend>You are parent/guardian of student studying in *</legend>
              ${["B.A", "B.Com", "B.Sc", "BCA", "M.Sc"].map(opt => `
                <label style="margin-right:10px">
                  <input type="radio" name="studentStudy" value="${opt}" required/> ${opt}
                </label>
              `).join("")}
            </fieldset>
            <fieldset><legend>Academic Performance *</legend>${radioGroup("academicPerformance")}</fieldset>
            <fieldset><legend>Co-curricular Outcome *</legend>${radioGroup("coCurricularOutcome")}</fieldset>
            <fieldset><legend>General Perception *</legend>${radioGroup("generalPerception")}</fieldset>
            <label>Suggestions<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <label>Complaints<br/><textarea rows="3" style="width:100%;padding:6px"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
        <script>
          const API = '${base}';
          document.getElementById("parentsForm").addEventListener("submit", function(e){
            e.preventDefault();
            const form = e.target;
            const data = {
              name: form.querySelector('label:nth-of-type(1) input')?.value || '',
              email: form.querySelector('label:nth-of-type(2) input')?.value || '',
              studentStudy: form.querySelector('input[name="studentStudy"]:checked')?.value || '',
              academicPerformance: form.querySelector('input[name="academicPerformance"]:checked')?.value || '',
              coCurricularOutcome: form.querySelector('input[name="coCurricularOutcome"]:checked')?.value || '',
              generalPerception: form.querySelector('input[name="generalPerception"]:checked')?.value || '',
              suggestions: form.querySelector('label:nth-of-type(5) textarea')?.value || '',
              complaints: form.querySelector('label:nth-of-type(6) textarea')?.value || '',
              submittedAt: new Date().toISOString(),
            };
            (async () => {
              try {
                const res = await fetch(API + '/parents', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                if (!res.ok) throw new Error('Network');
              } catch (err) {
                try {
                  const key = 'parents_feedback';
                  const arr = JSON.parse(localStorage.getItem(key) || '[]');
                  arr.push(data);
                  localStorage.setItem(key, JSON.stringify(arr));
                } catch {}
              }
              alert('✅ Parents feedback submitted!');
              window.close();
            })();
          });
        </script>
        </body>
      </html>
    `);
  };

  // === E-Suggestion ===
  const openESuggestion = () => {
    const win = window.open("", "_blank", "width=900,height=700,scrollbars=yes");
    win.document.write(`
      <html>
        <head>
          <title>E-Suggestion</title>
          <style>${popupCss}</style>
        </head>
        <body class="apply-page">
          <div class="apply-container">
            <div class="form-section">
              <div class="form-header"><h3>E-Suggestion Box</h3><p>This is anonymous. Kindly submit your suggestions.</p></div>
              <form id="suggestionForm" class="form-grid">
            <label>Suggestion 1<br/><textarea rows="2" class="modern-input"></textarea></label>
            <label>Suggestion 2<br/><textarea rows="2" class="modern-input"></textarea></label>
            <label>Suggestion 3<br/><textarea rows="2" class="modern-input"></textarea></label>
            <div class="form-actions">
              <button type="submit" class="submit-btn">Submit</button>
              <button type="reset" class="submit-btn" style="background:#999;">Clear</button>
            </div>
          </form>
            </div>
          </div>
          <script>
            const API = '${base}';
            document.getElementById("suggestionForm").addEventListener("submit", function(e){
              e.preventDefault();
              const form = e.target;
              const items = [
                form.querySelector('label:nth-of-type(1) textarea')?.value || '',
                form.querySelector('label:nth-of-type(2) textarea')?.value || '',
                form.querySelector('label:nth-of-type(3) textarea')?.value || ''
              ].filter(Boolean);
              const rec = { items, submittedAt: new Date().toISOString() };
              (async () => {
                try {
                  const res = await fetch(API + '/suggestions', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(rec) });
                  if (!res.ok) throw new Error('Network');
                } catch (err) {
                  try {
                    const key = 'suggestions';
                    const arr = JSON.parse(localStorage.getItem(key) || '[]');
                    arr.push(rec);
                    localStorage.setItem(key, JSON.stringify(arr));
                  } catch {}
                }
                alert("✅ Suggestion submitted!");
                window.close();
              })();
            });
          </script>
        </body>
      </html>
    `);
  };

  // === Feedback Report ===
  const openFeedbackReport = () => {
    window.open(feedbackSystemPdf, "_blank");
  };

  return (
    <div className="feedback-portal">
      <h2>Feedback Portal</h2>
      <p className="feedback-subtitle">Choose a section below to open the respective form in a new tab.</p>
      <ul className="feedback-list">
        <li>
          <button onClick={openStudentFeedback} className="feedback-link">
            <span className="feedback-pill">1</span>
            <span className="feedback-item-text">Student Feedback</span>
          </button>
        </li>
        <li>
          <button onClick={openAlumniFeedback} className="feedback-link">
            <span className="feedback-pill">2</span>
            <span className="feedback-item-text">Alumni Feedback</span>
          </button>
        </li>
        <li>
          <button onClick={openStaffFeedback} className="feedback-link">
            <span className="feedback-pill">3</span>
            <span className="feedback-item-text">Staff Feedback</span>
          </button>
        </li>
        <li>
          <button onClick={openEmployersFeedback} className="feedback-link">
            <span className="feedback-pill">4</span>
            <span className="feedback-item-text">Employers Feedback</span>
          </button>
        </li>
        <li>
          <button onClick={openParentsFeedback} className="feedback-link">
            <span className="feedback-pill">5</span>
            <span className="feedback-item-text">Parents Feedback</span>
          </button>
        </li>
        <li>
          <button onClick={openESuggestion} className="feedback-link">
            <span className="feedback-pill">6</span>
            <span className="feedback-item-text">E-Suggestion Box</span>
          </button>
        </li>
        <li>
          <button onClick={openFeedbackReport} className="feedback-link">
            <span className="feedback-pill">7</span>
            <span className="feedback-item-text">Feedback Report</span>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Feedback;

