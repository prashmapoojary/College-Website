import React, { useState } from 'react';
import '../styles/Courses.css';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');

  const degreeCourses = [
    {
      degree: 'B.A.',
      streams: [
        'English,History,Economics',
        'History,Economics,Political Science',
        'Journalism,Kannada,Political Science'
      ],
    },
    {
      degree: 'B.Sc.',
      streams: [
        'Botany,Zoology,Chemistry',
        'Mathematics,Physics,Chemistry',
        'Mathematics,Statistics,Physics',
        'Mathematics,Physics,Computer Science',
        'Mathematics,Statistics,Computer Science'
      ],
    },
    {
      degree: 'B.Com.',
      streams: [
        'General ',
        'Vocational(Tax.Pro)',
        'Vocational(Accountancy+Finance)'
      ],
    },
    {
      degree: 'B.C.A.',
      streams: ['Computer Application'],
    },
  ];

  const pgCourses = [
    {
      degree: 'M.Sc.',
      streams: ['Computer Science'],
    },
  ];

  const overviewItems = [
    { label: 'B.A.', icon: '🎨' },
    { label: 'B.Sc.', icon: '🔬' },
    { label: 'B.Com.', icon: '💼' },
    { label: 'B.C.A.', icon: '💻' },
    { label: 'M.Sc.', icon: '🎓' },
  ];

  const otherGuidance = [
    'Career guidance to lead the students towards employment opportunities.',
    'Training programs to prepare the final year students to face the competitive exams.',
    'Free English speaking course, Basic Computer Course, Event Management Course to B.A. students.',
    'B.Com. vocational course that gives an edge in one\'s career.',
    'Regular industry visits and expert guest lectures.',
    'Skill development programs focusing on both technical and soft skills.',
    'Placement assistance and interview preparation workshops.',
    'Research opportunities and project-based learning.'
  ];

  const filteredDegreeCourses = degreeCourses
    .map(course => ({
      ...course,
      streams: course.streams.filter(stream =>
        stream.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(course => course.streams.length > 0);

  const filteredPGCourses = pgCourses
    .map(course => ({
      ...course,
      streams: course.streams.filter(stream =>
        stream.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(course => course.streams.length > 0);

  return (
    <article className="courses-page">
      {/* Header */}
      <section className="courses-header">
        <div>
          <h1>🎓 Academic Programs at MGM College</h1>
        </div>
      </section>

      {/* Overview */}
      <section className="overview-section">
        <div className="overview-grid">
          {overviewItems.map((item, idx) => (
            <div key={idx} className="overview-card">
              <div className="overview-icon">{item.icon}</div>
              <div className="overview-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* Search Bar */}
      <div className="search-bar-wrapper" style={{ margin: '1.5rem auto', maxWidth: '480px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="🔍 Search course or combination (e.g. Computer Science, Physics)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px',
            borderRadius: '24px',
            border: '2px solid #3b82f6',
            fontSize: '14px',
            outline: 'none',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        />
      </div>

      {/* Degree Courses */}
      <section className="course-section">
        <h2>Degree Courses (UG)</h2>
        <div className="ug-courses-grid">
          {filteredDegreeCourses.map((course, index) => (
            <div key={index} className="ug-course-card">
              <div className="course-header">
                <h3>{course.degree}</h3>
              </div>
              <div className="streams-list">
                {course.streams.map((stream, i) => (
                  <div key={i} className="stream-item">
                    <span className="stream-icon">📚</span>
                    <span>{stream}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PG Courses */}
      <section className="pg-section">
        <h2>🎓 Post Graduate Courses</h2>
        <div className="pg-courses-container">
          {filteredPGCourses.map((course, index) => (
            <div key={index} className="pg-course-card">
              <div className="course-header">
                <h3>{course.degree}</h3>
              </div>
              <div className="streams-list">
                {course.streams.map((stream, i) => (
                  <div key={i} className="stream-item">
                    <span className="stream-icon">🎯</span>
                    <span>{stream}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Guidance */}
      <section className="guidance-section">
        <h2> Other Guidances for Regular Degree Students</h2>
        <div className="guidance-grid-single-row">
          {otherGuidance.map((item, index) => (
            <div key={index} className="guidance-card">
              <div className="guidance-icon">💡</div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Start Your Academic Journey?</h2>
        <p>
          Join MGM College and unlock your potential with our comprehensive programs
        </p>
        <div className="cta-buttons">
          <a href="/apply" className="cta-btn primary">Apply Now</a>
        </div>
      </section>
    </article>
  );
}
