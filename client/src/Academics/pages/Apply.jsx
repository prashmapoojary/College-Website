import React, { useState } from 'react';
import '../styles/Apply.css';

const Apply = () => {
  const API = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    phone: '',
    gender: '',
    category: '',
    address: '',
    motherName: '',
    fatherName: '',
    course: '',
    combination: '',
    tenthObtained: '',
    tenthTotal: '',
    tenthPercent: '',
    pucObtained: '',
    pucTotal: '',
    pucPercent: '',
    mscObtained: '',
    mscTotal: '',
    mscPercent: '',
    college: '',
    university: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null); // { message, type }

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const courseCombinations = {
    bca: ['Computer Application'],
    bcom: ['B.Com General', 'B.Com Vocational'],
    bsc: ['BZC', 'MPC', 'MSP', 'MPCs', 'MSCs'],
    ba: ['EHE', 'HEP', 'JKP'],
    msc: ['Computer Science']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedForm = { ...formData, [name]: value };

    if (name === 'tenthObtained' || name === 'tenthTotal') {
      const obtained = parseFloat(updatedForm.tenthObtained);
      const total = parseFloat(updatedForm.tenthTotal);
      updatedForm.tenthPercent = obtained && total ? ((obtained / total) * 100).toFixed(2) : '';
    }

    if (name === 'pucObtained' || name === 'pucTotal') {
      const obtained = parseFloat(updatedForm.pucObtained);
      const total = parseFloat(updatedForm.pucTotal);
      updatedForm.pucPercent = obtained && total ? ((obtained / total) * 100).toFixed(2) : '';
    }

    if (name === 'mscObtained' || name === 'mscTotal') {
      const obtained = parseFloat(updatedForm.mscObtained);
      const total = parseFloat(updatedForm.mscTotal);
      updatedForm.mscPercent = obtained && total ? ((obtained / total) * 100).toFixed(2) : '';
    }

    setFormData(updatedForm);
  };

  const validateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    return (
      age > 18 ||
      (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
    );
  };

  const validateForm = () => {
    const newErrors = {};

    // Base required fields
    const baseRequired = [
      'email','name','dob','phone','gender','category','address','motherName','fatherName','course','combination','college','university'
    ];

    // Course-specific required fields
    const marksRequired = formData.course === 'msc'
      ? ['mscObtained','mscTotal']
      : ['tenthObtained','tenthTotal'];

    const required = new Set([...baseRequired, ...marksRequired]);

    Object.entries(formData).forEach(([key, value]) => {
      if (required.has(key) && !value) {
        newErrors[key] = 'This field is required';
      }
    });

    if (formData.dob && !validateAge(formData.dob)) {
      newErrors.dob = 'Applicant must be at least 18 years old';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fill all required fields.', 'warning');
      return;
    }

    setLoading(true);
    const payload = { ...formData, submittedAt: new Date().toISOString() };
    try {
      const res = await fetch(`${API}/applications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      let saved = null;
      if (res.ok) {
        saved = await res.json().catch(() => null);
      }

      // Persist to localStorage too (backend source of truth when available)
      const record = saved && (saved.id || saved._id)
        ? { ...saved, id: saved.id || saved._id }
        : { id: `${Date.now()}`, ...payload };
      try {
        const existing = JSON.parse(localStorage.getItem('applications') || '[]');
        localStorage.setItem('applications', JSON.stringify([record, ...existing]));
      } catch (err) {
        console.warn('LocalStorage save error:', err);
      }

      if (!res.ok) {
        // Treat as local success
        setSubmitted(true);
        setLoading(false); // stop loading so button updates before inline message
        return;
      }

      setSubmitted(true);
      setLoading(false); // stop loading so button updates before inline message
    } catch (error) {
      console.error('Submission error:', error);
      // Offline/local fallback save
      try {
        const record = { id: `${Date.now()}`, ...payload };
        const existing = JSON.parse(localStorage.getItem('applications') || '[]');
        localStorage.setItem('applications', JSON.stringify([record, ...existing]));
      } catch (err) {
        console.warn('LocalStorage fallback error:', err);
      }
      setSubmitted(true);
      setLoading(false); // stop loading so button updates before inline message
      showToast('Application submitted successfully ✅', 'success');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-page">
      <div className="apply-container">
        <div className="form-section">
          <div className="form-header">
            <h1>Apply Now</h1>
            <p>Fill in your details to submit your application</p>
          </div>

          {/* Success message is shown inline near the button only */}

          <form onSubmit={handleSubmit} className="form-grid">

            {/* Name */}
            <div className="form-group">
              <label>Name of Applicant</label>
              <input name="name" className="modern-input" value={formData.name} onChange={handleInputChange} placeholder="Full Name" />
              {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </div>

             {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input name="email" className="modern-input" value={formData.email} onChange={handleInputChange} placeholder="Email" />
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
            </div>
             
  <div className="form-group">
  <label>Category</label>
  <select
    name="category"
    className="modern-select"
    value={formData.category}
    onChange={handleInputChange}
  >
    <option value="">Select Category</option>
    <option value="general">General</option>
    <option value="obc">OBC</option>
    <option value="sc">SC</option>
    <option value="st">ST</option>
    <option value="ews">EWS</option>
    <option value="others">Others</option>
  </select>
  {errors.category && (
    <span style={{ color: 'red' }}>{errors.category}</span>
  )}
</div>


            {/* Date of Birth */}
            <div className="form-group">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="modern-input"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="YYYY-MM-DD"
              />
              {errors.dob && <span style={{ color: 'red' }}>{errors.dob}</span>}
            </div>

            {/* Phone */}
            <div className="form-group">
              <label>Mobile Number</label>
              <input name="phone" className="modern-input" value={formData.phone} onChange={handleInputChange} placeholder="Mobile Number" />
              {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
            </div>

            {/* Gender */}
            <div className="form-group">
              <label>Gender</label>
              <select name="gender" className="modern-select" value={formData.gender} onChange={handleInputChange}>
                <option value="">Select Gender</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <span style={{ color: 'red' }}>{errors.gender}</span>}
            </div>

            {/* Address */}
            <div className="form-group">
              <label>Address</label>
              <textarea name="address" className="modern-input" value={formData.address} onChange={handleInputChange} placeholder="Address" />
              {errors.address && <span style={{ color: 'red' }}>{errors.address}</span>}
            </div>

            {/* Mother's Name */}
            <div className="form-group">
              <label>Mother's Name</label>
              <input name="motherName" className="modern-input" value={formData.motherName} onChange={handleInputChange} placeholder="Mother's Name" />
              {errors.motherName && <span style={{ color: 'red' }}>{errors.motherName}</span>}
            </div>

            {/* Father's Name */}
            <div className="form-group">
              <label>Father's Name</label>
              <input name="fatherName" className="modern-input" value={formData.fatherName} onChange={handleInputChange} placeholder="Father's Name" />
              {errors.fatherName && <span style={{ color: 'red' }}>{errors.fatherName}</span>}
            </div>

            {/* Course */}
            <div className="form-group">
              <label>Choose a Course</label>
              <select name="course" className="modern-select" value={formData.course} onChange={handleInputChange}>
                <option value="">Select Course</option>
                {Object.keys(courseCombinations).map((course) => (
                  <option key={course} value={course}>{course.toUpperCase()}</option>
                ))}
              </select>
              {errors.course && <span style={{ color: 'red' }}>{errors.course}</span>}
            </div>

            {/* Combination */}
            {formData.course && (
              <div className="form-group">
                <label>Choose Combination</label>
                <select name="combination" className="modern-select" value={formData.combination} onChange={handleInputChange}>
                  <option value="">Select Combination</option>
                  {courseCombinations[formData.course].map((combo) => (
                    <option key={combo} value={combo}>{combo}</option>
                  ))}
                </select>
                {errors.combination && <span style={{ color: 'red' }}>{errors.combination}</span>}
              </div>
            )}

            {/* Marks Section */}
            {(formData.course !== 'msc' && formData.course) && (
              <>
                <div className="marks-group">
                  <input name="tenthObtained" className="modern-input" value={formData.tenthObtained} onChange={handleInputChange} placeholder="10th Marks Obtained" />
                  <input name="tenthTotal" className="modern-input" value={formData.tenthTotal} onChange={handleInputChange} placeholder="10th Total Marks" />
                                    <input
                    name="tenthPercent"
                    className="modern-input"
                    value={formData.tenthPercent}
                    readOnly
                    placeholder="10th %"
                  />
                </div>

                {/* PUC Marks */}
                <div className="marks-group">
                  <input
                    name="pucObtained"
                    className="modern-input"
                    value={formData.pucObtained}
                    onChange={handleInputChange}
                    placeholder="PUC Marks Obtained"
                  />
                  <input
                    name="pucTotal"
                    className="modern-input"
                    value={formData.pucTotal}
                    onChange={handleInputChange}
                    placeholder="PUC Total Marks"
                  />
                  <input
                    name="pucPercent"
                    className="modern-input"
                    value={formData.pucPercent}
                    readOnly
                    placeholder="PUC %"
                  />
                </div>
              </>
            )}

            {/* MSc Marks */}
            {formData.course === 'msc' && (
              <div className="marks-group">
                <input
                  name="mscObtained"
                  className="modern-input"
                  value={formData.mscObtained}
                  onChange={handleInputChange}
                  placeholder="Marks till 5th/6th Sem"
                />
                <input
                  name="mscTotal"
                  className="modern-input"
                  value={formData.mscTotal}
                  onChange={handleInputChange}
                  placeholder="Total Marks"
                />
                <input
                  name="mscPercent"
                  className="modern-input"
                  value={formData.mscPercent}
                  readOnly
                  placeholder="%"
                />
              </div>
            )}

            {/* College & University */}
            <div className="form-group">
              <label>Name of College</label>
              <input
                name="college"
                className="modern-input"
                value={formData.college}
                onChange={handleInputChange}
                placeholder="College Name"
              />
              {errors.college && <span style={{ color: 'red' }}>{errors.college}</span>}
            </div>

            <div className="form-group">
              <label>Name of University</label>
              <input
                name="university"
                className="modern-input"
                value={formData.university}
                onChange={handleInputChange}
                placeholder="University Name"
              />
              {errors.university && <span style={{ color: 'red' }}>{errors.university}</span>}
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button type="submit" className="submit-btn" disabled={loading || submitted}>
                <span className="btn-icon">{submitted ? '✅' : loading ? '⏳' : '📤'}</span> {submitted ? 'Submitted' : loading ? 'Submitting...' : 'Submit Application'}
              </button>
              {submitted && (
                <span className="inline-success" aria-live="polite">Application submitted successfully</span>
              )}
            </div>

          </form>
        </div>
      </div>
      {toast && (
        <div
          className="toast"
          style={{
            position: 'fixed',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            background: toast.type === 'success' ? '#16a34a' : '#f59e0b',
            color: '#fff',
            padding: '10px 16px',
            borderRadius: 8,
            boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
            zIndex: 1000,
            fontWeight: 600,
          }}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Apply;
