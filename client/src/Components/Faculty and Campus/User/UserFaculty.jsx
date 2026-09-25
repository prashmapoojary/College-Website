import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserFaculty() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [faculty, setFaculty] = useState(null);
  const [resumeUrl, setResumeUrl] = useState(null);

  // ✅ helper: get photo src correctly
  const getPhotoSrc = (photo) => {
    if (!photo) return null;
    if (photo.startsWith("http")) return photo; // cloud / external URL
    if (photo.startsWith("data:image")) return photo; // already base64 with prefix
    return `data:image/jpeg;base64,${photo}`; // raw base64 string
  };

  useEffect(() => {
    axios
      .get(`/api/faculty/${id}`)
      .then((res) => {
        setFaculty(res.data);

        // ✅ handle resume pdf safely
        if (res.data.resume) {
          try {
            const blob = new Blob(
              [
                Uint8Array.from(
                  atob(res.data.resume.split(",")[1]),
                  (c) => c.charCodeAt(0)
                ),
              ],
              { type: "application/pdf" }
            );
            setResumeUrl(URL.createObjectURL(blob));
          } catch (err) {
            console.error("Invalid resume format:", err);
          }
        }
      })
      .catch((err) => console.error("Error fetching faculty:", err));
  }, [id]);

  if (!faculty) {
    return (
      <p className="text-center text-gray-600 text-lg font-medium mt-10">
        Loading faculty profile...
      </p>
    );
  }

  const goBack = () => navigate(-1);

  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-5xl mx-auto p-6 md:p-8 college-glass-card">
        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-center py-4 px-6 rounded-xl shadow-xl border-y border-amber-500/40 mb-8 uppercase tracking-wider">
          👨‍🏫 Faculty Profile
        </h2>

      {/* Profile Card */}
      <div className="flex flex-col md:flex-row items-start gap-8 bg-white/95 rounded-2xl shadow-xl p-8 border border-slate-200 hover:border-amber-500 transition-all">
        {/* Photo */}
        <div className="flex-shrink-0">
          {getPhotoSrc(faculty.photo) ? (
            <img
              src={getPhotoSrc(faculty.photo)}
              alt={faculty.name}
              className="w-48 h-60 object-cover rounded-xl shadow-lg border-2 border-amber-400 transition-transform duration-300 hover:scale-105"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/150x200?text=No+Image";
              }}
            />
          ) : (
            <div className="w-48 h-60 flex items-center justify-center border-2 border-dashed border-slate-300 rounded-xl text-slate-500 text-sm bg-slate-50">
              No photo available
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            {faculty.name}
          </h3>
          <p className="text-lg font-bold text-amber-600 mb-4 border-b border-slate-200 pb-2">
            {faculty.department}
          </p>

          <div className="space-y-3 text-slate-700 font-medium">
            <p>
              <span className="font-bold text-slate-900">Email:</span> {faculty.email}
            </p>
            <p>
              <span className="font-bold text-slate-900">Contact:</span>{" "}
              {faculty.contact || "—"}
            </p>
            <p>
              <span className="font-bold text-slate-900">Qualification:</span>{" "}
              {faculty.qualification || "—"}
            </p>
            <p>
              <span className="font-bold text-slate-900">Joining Date:</span>{" "}
              {faculty.joiningDate
                ? new Date(faculty.joiningDate).toLocaleDateString()
                : "—"}
            </p>
          </div>
        </div>
      </div>

      {/* Resume */}
      {resumeUrl && (
        <div className="mt-8 bg-white/95 rounded-xl shadow-lg border border-slate-200 p-6 text-center max-w-md mx-auto">
          <h3 className="text-lg font-bold text-slate-900 mb-4">
            Additional Information
          </h3>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-full shadow-md transition text-sm uppercase"
          >
            View Resume
          </a>
        </div>
      )}

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={goBack}
          className="px-8 py-2.5 bg-gradient-to-r from-slate-900 to-slate-800 text-amber-400 font-bold rounded-full hover:bg-slate-800 border border-amber-500/40 shadow-md transition text-sm uppercase"
        >
          Back
        </button>
      </div>
      </div>
    </div>
  );
}
