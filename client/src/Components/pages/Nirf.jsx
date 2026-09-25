import React from "react";
import '../styles/Apply.css'; // optional if you have styling

function Nirf() {
  return (
    <div>
      <div className="nirf-section">
       <section className="section-card">
      {/* NIRF Section */}
      
        <div className="header-gradient">
        <b>NIRF</b>
      </div>
        
        <p>
          <em>
            <a
              href="/MGMNIRF-Ov-25.pdf"
              download="MGMNIRF-Ov-25.pdf"
            >
              MGM-NIRF-Overall
            </a>
          </em>
        </p>
        <p>
          <em>
            <a
              href="/MGMNIRF-Col-25.pdf"
              download="MGMNIRF-Col-25.pdf"
            >
              MGM-NIRF-College
            </a>
          </em>
        </p>
        </section>
      </div>
      
    </div>
    
  );
}

export default Nirf;
