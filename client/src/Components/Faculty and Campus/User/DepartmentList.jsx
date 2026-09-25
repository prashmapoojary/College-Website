// src/Components/UserDepartmentList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding, FaUserTie } from "react-icons/fa";
import axios from "axios";

export default function UserDepartmentList() {
  const [facultyList, setFacultyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedDepartments, setExpandedDepartments] = useState({});
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    fetchFaculty();
  }, []);

  const fetchFaculty = async () => {
    try {
      const res = await axios.get("/api/faculty"); // adjust if full backend URL
      setFacultyList(res.data);
    } catch (err) {
      console.error("Error fetching faculty list:", err);
      setError("Unable to load faculty data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Group by department
  const grouped = facultyList.reduce((acc, fac) => {
    if (fac.department) {
      acc[fac.department] = acc[fac.department] || [];
      acc[fac.department].push(fac);
    }
    return acc;
  }, {});

  const toggleExpand = (dept) => {
    setExpandedDepartments((prev) => ({
      ...prev,
      [dept]: !prev[dept],
    }));
  };

  // ✅ helper: get photo src correctly
  const getPhotoSrc = (photo) => {
    if (!photo) return null;
    if (photo.startsWith("http")) return photo; // cloud / external URL
    if (photo.startsWith("data:image")) return photo; // already base64 with prefix
    return `data:image/jpeg;base64,${photo}`; // raw base64
  };

  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative">
        {/* Top Heading */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-amber-400 shadow-xl rounded-2xl py-5 px-8 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 border-y border-amber-500/40 mb-8 uppercase tracking-wider">
          📚 Departments & Faculty
        </h2>

        <div className="flex flex-col gap-8 bg-slate-900/5 rounded-2xl p-6 border border-slate-200">
          {loading ? (
            <p className="text-center text-lg font-bold text-slate-800">Loading Departments and faculty...</p>
          ) : error ? (
            <p className="text-center text-red-500 font-medium">{error}</p>
          ) : Object.keys(grouped).length === 0 ? (
            <p className="text-center text-slate-600">No faculty available.</p>
          ) : (
          Object.entries(grouped).map(([dept, faculty]) => {
            const isExpanded = expandedDepartments[dept];
            const displayedFaculty = isExpanded ? faculty : faculty.slice(0, 5);

            return (
              <div
                key={dept}
                className="bg-white/95 p-6 mb-2 rounded-xl shadow-lg border border-slate-200"
              >
                {/* Department Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center justify-center gap-2 mb-6 border-b-2 border-amber-500 pb-2 inline-flex mx-auto">
                  <FaBuilding className="text-amber-600" /> {dept}
                </h3>

                {/* Faculty Grid */}
                <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6">
                  {displayedFaculty.map((fac) => (
                    <div
                      key={fac._id}
                      onClick={() => navigate(`/user-faculty/${fac._id}`)}
                      className="bg-slate-50 p-4 text-center rounded-xl cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:shadow-xl hover:bg-amber-50/50 border border-slate-200 hover:border-amber-400 flex flex-col items-center"
                    >
                      <div className="mb-3">
                        {getPhotoSrc(fac.photo) ? (
                          <img
                            src={getPhotoSrc(fac.photo)}
                            alt={fac.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-amber-400 shadow transition-transform duration-300 hover:scale-105"
                            onError={(e) => {
                              e.target.onerror = null;
                              e.target.src =
                                "https://via.placeholder.com/80?text=No+Image";
                            }}
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-slate-700 flex items-center justify-center text-amber-400 text-3xl shadow transition-transform duration-300 hover:scale-105">
                            <FaUserTie />
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col items-center w-full">
                        <h4 className="text-base font-bold text-slate-900 leading-snug">
                          {fac.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5">
                          {fac.designation || "Lecturer"}
                        </p>
                        <button className="mt-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-1.5 rounded-full text-xs transition shadow-sm">
                          View Profile
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show More / Show Less */}
                {faculty.length > 5 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => toggleExpand(dept)}
                      className="bg-gradient-to-r from-slate-900 to-slate-800 text-amber-400 hover:text-amber-300 border border-amber-500/40 px-5 py-2 rounded-full text-sm font-bold shadow-md transition"
                    >
                      {isExpanded
                        ? "Show Less"
                        : `Show More (${faculty.length - 5})`}
                    </button>
                  </div>
                )}
              </div>
            );
          })
        )}
        </div>
      </div>
    </div>
  );
}
