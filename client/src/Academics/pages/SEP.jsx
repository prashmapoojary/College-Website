import React, { useState } from 'react';
import '../styles/SEP.css';

const SEP = () => {
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
    {
      degree: 'M.Sc.',
      streams: ['Computer Science'],
    },
  ];

  const filteredCourses = degreeCourses
    .map(course => ({
      ...course,
      streams: course.streams.filter(stream =>
        stream.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter(course => course.streams.length > 0);

  // Arrange UG courses in specific order and separate PG (M.Sc.)
  const ugOrder = ['B.C.A.', 'B.Sc.', 'B.Com.', 'B.A.'];
  const ugCourses = filteredCourses
    .filter(c => ugOrder.includes(c.degree))
    .sort((a, b) => ugOrder.indexOf(a.degree) - ugOrder.indexOf(b.degree));
  const pgCourse = filteredCourses.find(c => c.degree === 'M.Sc.');

  return (
    <div className="sep-page">

      <div className="sep-header">
        <h1>🎓 Student Enhancement Program (SEP)</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar-wrapper" style={{ margin: '1.5rem auto', maxWidth: '480px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="🔍 Search SEP stream or combination..."
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

      <div className="courses-section">
        <h2>Available Streams and Combinations</h2>
        <div className="ug-courses-grid">
          {ugCourses.map((course, index) => (
            <div className="course-card" key={`ug-${index}`}>
              <div className="course-header">
                <h3>{course.degree}</h3>
              </div>
              <div className="streams-list">
                {course.streams.map((stream, i) => (
                  <div className="stream-item" key={i}>
                    <span className="stream-icon">📚</span>
                    {stream}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {pgCourse && (
          <div className="pg-courses-grid">
            <div className="course-card" key={`pg-msc`}>
              <div className="course-header">
                <h3>{pgCourse.degree}</h3>
              </div>
              <div className="streams-list">
                {pgCourse.streams.map((stream, i) => (
                  <div className="stream-item" key={i}>
                    <span className="stream-icon">📚</span>
                    {stream}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="features-section">
        <h2> Program Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🎯</div>
            <h4>Career Focused</h4>
            <p>Industry-aligned curriculum designed for employability</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📱</div>
            <h4>Modern Learning</h4>
            <p>Integration of technology and contemporary teaching methods</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">🤝</div>
            <h4>Industry Connect</h4>
            <p>Regular industry visits and expert guest lectures</p>
          </div>
          <div className="feature-item">
            <div className="feature-icon">📊</div>
            <h4>Skill Development</h4>
            <p>Focus on both technical and soft skills enhancement</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEP;
