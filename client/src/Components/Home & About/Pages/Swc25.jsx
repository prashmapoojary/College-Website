import React from "react";
import swcImg from "../../../assets/SWC25.jpg";

function SwcPage() {
  return (
    <div
      className="college-page-container min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center p-6 font-sans"
      style={{ backgroundImage: `url('/oldblck.jpg')` }}
    >
      <div className="w-full max-w-4xl backdrop-blur-md bg-white/92 rounded-2xl shadow-2xl border border-slate-200/80 p-6 md:p-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-3 px-8 rounded-xl shadow-xl border border-amber-500/30 mb-6 text-center tracking-wide">
          🎓 Student Welfare Council 2024-25
        </h1>
        <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white p-2">
          <img
            src={swcImg}
            alt="Student Welfare Council 2024-25"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SwcPage;
