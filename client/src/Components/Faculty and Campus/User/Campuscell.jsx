import React from "react";
import { FaUsers } from "react-icons/fa";

const clubsData = [
  { club: "Student Welfare Office", incharges: ["Mr. Ramesh Karla, M.Com."] },
  {
    club: "I.Q.A.C. & NAAC",
    incharges: [
      "Mrs. Shailaja H (Coordinator)",
      "Mrs. Vanitha (Co-Coordinator)",
    ],
  },
  {
    club: "EI & CG Bureau & Placement Cell",
    incharges: ["Mr. Vishwanath Pai (Convener)", "Mrs. Rashmi (Co-convener)"],
  },
  {
    club: "Women's Harassment Redressal Cell",
    incharges: ["Mrs. Veera Ida Pinto (Convener)"],
  },
  {
    club: "Women's Counsellors",
    incharges: [
      "Mrs. Rekha N Chandra (Convener)",
      "Mrs. Jyothsna (Co-convener)",
    ],
  },
  {
    club: "Anti Ragging Committee",
    incharges: ["Principal (Chairman)", "Staff Council (Members)"],
  },
  {
    club: "Human Rights & Religious Harmony Cell",
    incharges: ["Mr. Subodh Pai (Convener)"],
  },
  { club: "NCC Naval Wing", incharges: ["Mr. Samuel Marwin Pinto"] },
  { club: "NCC Army Wing", incharges: ["Capt. Navya, ANO"] },
  {
    club: "Alumni Forum",
    incharges: [
      "Prof. Kokkarne Surendranath Shetty, President",
      "Dr. M Vishwanath Pai, Secretary",
      "Mrs. Deepali Kamath, Treasurer",
    ],
  },
  {
    club: "Medical Advisors",
    incharges: ["Dr. Vijaya Ballal N., M.B.B.S.", "K.M.C. Manipal"],
  },
];

export default function ClubsPage() {
  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative">
        {/* Title Banner */}
        <div className="text-center mb-10 p-6 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-2xl shadow-xl text-amber-400 border-y border-amber-500/40">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug tracking-wider uppercase">
            👥 Staff Advisors for Extra-Curricular & Co-Curricular Activities (2024-2025)
          </h2>
        </div>

        {/* Clubs Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {clubsData.map((club, index) => (
            <div
              key={index}
              className="bg-white/95 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-slate-200 hover:border-amber-500"
            >
              {/* Club Header */}
              <div className="flex items-center mb-4 pb-3 border-b border-slate-200">
                <FaUsers className="text-2xl text-amber-600 mr-3 shrink-0" />
                <h3 className="text-lg font-bold text-slate-900">
                  {club.club}
                </h3>
              </div>

              {/* Incharges */}
              <div className="space-y-2">
                {club.incharges.map((person, idx) => (
                  <div
                    key={idx}
                    className="flex items-center text-sm font-semibold text-slate-800 bg-amber-50/80 border border-amber-200/60 px-3 py-1.5 rounded-lg"
                  >
                    <span className="mr-2 text-amber-600">👤</span>
                    {person}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
