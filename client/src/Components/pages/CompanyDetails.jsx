import React from 'react';
import '../styles/CompanyDetails.css';

const CompanyDetails = ({ companyName, salary, studentsByYear, students }) => {
  const hasYearWiseData = studentsByYear && typeof studentsByYear === 'object';
  const hasFlatData = Array.isArray(students);

  return (
    <div className="company-details">
      <h2>{companyName}</h2>

      <p className="salary-info">
        <strong>Package:</strong> {salary || 'Not Available'}
      </p>

      {hasYearWiseData ? (
        Object.entries(studentsByYear).map(([year, yearStudents]) => (
          <div key={year} className="year-block">
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#222' }}>
              Year: {year}
            </h3>
            <table className="student-table">
              <thead>
                <tr>
                  <th>Name of the Student</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {yearStudents.map((student, index) => (
                  <tr key={index}>
                    <td>{student.name}</td>
                    <td>{student.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-selected">
              Total Selected in {year}: <strong>{yearStudents.length}</strong>
            </div>
          </div>
        ))
      ) : hasFlatData ? (
        <div className="year-block">
          <table className="student-table">
            <thead>
              <tr>
                <th>Name of the Student</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.class}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-selected">
            Total Selected: <strong>{students.length}</strong>
          </div>
        </div>
      ) : (
        <p style={{ textAlign: 'center', color: '#666' }}>
          No placement data available for this company.
        </p>
      )}
    </div>
  );
};

export default CompanyDetails;
