import React from "react";
import "../styles/Programmeoutcomes.css";
import cbssPdf from "../assets/pdf/CBSS.pdf";
import cbcsPdf from "../assets/pdf/CBCS.pdf";
import nepPdf from "../assets/pdf/NEP.pdf";

const Programmeoutcomes = () => {
  return (
    <div className="outcomes-portal">
      <h3>Programme/Outcome Source PDFs</h3>
      <p className="outcomes-subtitle">Open official documents in a new tab.</p>
      <ul className="outcomes-list">
        <li>
          <a className="outcomes-link" href={cbssPdf} target="_blank" rel="noopener noreferrer">
            <span className="outcomes-pill">1</span>
            <span className="outcomes-item-text">CREDIT BASED</span>
          </a>
        </li>
        <li>
          <a className="outcomes-link" href={cbcsPdf} target="_blank" rel="noopener noreferrer">
            <span className="outcomes-pill">2</span>
            <span className="outcomes-item-text">CHOICE BASED</span>
          </a>
        </li>
        <li>
          <a className="outcomes-link" href={nepPdf} target="_blank" rel="noopener noreferrer">
            <span className="outcomes-pill">3</span>
            <span className="outcomes-item-text">SEP</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Programmeoutcomes;
