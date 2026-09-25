import React from "react";
import "../styles/Programmeoutcomes.css";
import cbssPdf from "../../assets/pdf/CBSS.pdf";
import cbcsPdf from "../../assets/pdf/CBCS.pdf";
import nepPdf from "../../assets/pdf/NEP.pdf";

const Programmeoutcomes = () => {
  return (
    <div
      className="college-page-container min-h-screen py-12 px-4 flex items-center justify-center font-sans"
    >
      <div className="w-full max-w-3xl college-glass-card p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-center py-4 px-6 rounded-xl shadow-xl border border-amber-500/30 mb-6">
          📄 Programme & Course Outcomes
        </h2>
        <p className="text-center text-slate-700 font-medium mb-8 text-base">
          Click below to open and view the official syllabus and course outcome PDFs.
        </p>
        <ul className="outcomes-list">
          <li>
            <a className="outcomes-link" href={cbssPdf} target="_blank" rel="noopener noreferrer">
              <span className="outcomes-pill">1</span>
              <span className="outcomes-item-text">CREDIT BASED SEMESTER SYSTEM (CBSS)</span>
            </a>
          </li>
          <li>
            <a className="outcomes-link" href={cbcsPdf} target="_blank" rel="noopener noreferrer">
              <span className="outcomes-pill">2</span>
              <span className="outcomes-item-text">CHOICE BASED CREDIT SYSTEM (CBCS)</span>
            </a>
          </li>
          <li>
            <a className="outcomes-link" href={nepPdf} target="_blank" rel="noopener noreferrer">
              <span className="outcomes-pill">3</span>
              <span className="outcomes-item-text">STATE EDUCATION POLICY (SEP) / NEP</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Programmeoutcomes;
