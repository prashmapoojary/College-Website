import React from "react";
import { FaFilePdf, FaDownload } from "react-icons/fa";

function Nirf() {
  return (
    <div
      className="college-page-container min-h-screen py-12 px-4 flex items-center justify-center font-sans"
    >
      <div className="w-full max-w-2xl college-glass-card p-6 md:p-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-4 px-6 rounded-2xl shadow-xl border border-amber-500/30 mb-6">
          📊 NIRF Reports
        </h1>
        <p className="text-slate-700 text-base md:text-lg mb-8 font-medium">
          National Institutional Ranking Framework (NIRF) official disclosure documents:
        </p>

        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <a
            href="/MGMNIRF-Ov-25.pdf"
            download="MGMNIRF-Ov-25.pdf"
            className="flex items-center justify-between bg-white hover:bg-blue-50 border border-blue-200 text-blue-900 font-bold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              <FaFilePdf className="text-2xl text-red-600" />
              <span>MGM - NIRF Overall 2025</span>
            </span>
            <FaDownload className="text-blue-600 group-hover:scale-110 transition-transform" />
          </a>

          <a
            href="/MGMNIRF-Col-25.pdf"
            download="MGMNIRF-Col-25.pdf"
            className="flex items-center justify-between bg-white hover:bg-blue-50 border border-blue-200 text-blue-900 font-bold px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
          >
            <span className="flex items-center gap-3">
              <FaFilePdf className="text-2xl text-red-600" />
              <span>MGM - NIRF College 2025</span>
            </span>
            <FaDownload className="text-blue-600 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Nirf;
