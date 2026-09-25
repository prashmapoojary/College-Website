import React from "react";
import logoutImg from "../../../assets/LogOut.jpg";

function LogOutPage() {
  return (
    <div
      className="college-page-container min-h-screen flex items-center justify-center p-6 font-sans"
    >
      <div className="w-full max-w-4xl college-glass-card p-6 md:p-8 flex flex-col items-center">
        <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-3 px-8 rounded-xl shadow-xl border border-amber-500/30 mb-6 text-center">
          🎉 Log Out Event
        </h1>
        <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-lg border border-slate-200 bg-white p-2">
          <img
            src={logoutImg}
            alt="Log Out Event"
            className="w-full h-auto object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default LogOutPage;