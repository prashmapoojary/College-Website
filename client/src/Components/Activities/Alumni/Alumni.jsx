import React, { useState } from "react";
import { FaUser, FaPhone, FaEnvelope, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const officeBearers = [
  {
    office: "President",
    name: "Prof. Kokkarne Surendranath Shetty",
    mob: "9964498869",
    email: "kokkarneshetty@gmail.com",
  },
  {
    office: "Secretary",
    name: "Dr. M Vishwanath Pai",
    mob: "9008515307",
    email: "vish_pai@yahoo.com",
  },
  {
    office: "Treasurer",
    name: "Mrs. Deepali Kamath",
    mob: "9449388877",
    email: "kamath_deepali@yahoo.com",
  },
];

const SectionTitle = ({ icon, children }) => (
  <h2 className="flex items-center gap-2 text-xl font-bold text-slate-800 mb-3 border-b-2 border-amber-500/40 pb-2">
    <span className="text-amber-600">{icon}</span> {children}
  </h2>
);

export default function Alumni() {
  const [showForm, setShowForm] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null); // success or error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    batch: new Date().getFullYear().toString(),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/alumni', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormFeedback({ type: "success", message: "Thank you for registering as an alumni!" });
      } else {
        setFormFeedback({ type: "error", message: "Error during registration. Please try again." });
      }
      setFormData({ name: "", email: "", phone: "", batch: new Date().getFullYear().toString() });
    } catch (err) {
      console.error("Alumni registration error:", err);
      setFormFeedback({ type: "error", message: "Network error. Please try again later." });
    }
  };

  return (
    <div
      className="college-page-container font-sans min-h-screen py-10 px-4"
    >
      <div className="max-w-4xl mx-auto p-6 md:p-8 backdrop-blur-md bg-white/92 rounded-2xl shadow-2xl border border-slate-200/80">
        {/* Header */}
        <header className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 pb-4 border-b border-amber-500/30">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-3 px-6 rounded-xl shadow-lg border border-amber-500/30 tracking-wide">
            🎓 MGM College Alumni Forum
          </h1>
          <div className="flex gap-3">
            <button
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 text-sm"
              onClick={() => { setShowForm(true); setFormFeedback(null); }}
            >
              Register Now
            </button>
            <a
              href="/membership-form.pdf"
              download
              className="bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 hover:scale-105 hover:shadow-lg transition px-4 py-2 rounded-lg shadow text-sm font-semibold"
            >
              Download Form
            </a>
          </div>
        </header>

        {/* Modal form */}
        {showForm && (
          <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md border border-amber-500/30 animate-fadeIn">
              <h3 className="text-slate-900 text-xl font-bold mb-4 text-center border-b border-amber-500/20 pb-2">
                Alumni Registration
              </h3>
              {formFeedback ? (
                <div className={`flex items-center gap-2 py-3 px-3 rounded-lg mb-4 text-sm font-medium ${formFeedback.type === "success" ? "bg-emerald-50 text-emerald-800 border border-emerald-300" : "bg-red-50 text-red-800 border border-red-300"}`}>
                  {formFeedback.type === "success" ? <FaCheckCircle className="text-emerald-600" /> : <FaExclamationTriangle className="text-red-600" />}
                  <span>{formFeedback.message}</span>
                  <button className="ml-auto text-amber-600 hover:text-amber-800 font-semibold text-xs underline" onClick={() => { setShowForm(false); setFormFeedback(null); }}>Close</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 text-sm"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 text-sm"
                  />
                  <input
                    type="number"
                    name="batch"
                    min="1950"
                    max={new Date().getFullYear()}
                    placeholder="Batch (Year)"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 px-3 py-2 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 text-sm"
                  />
                  <div className="flex justify-between gap-3 pt-2">
                    <button
                      type="submit"
                      className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2 rounded-lg shadow text-sm transition"
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="bg-slate-200 hover:bg-slate-300 text-slate-800 px-4 py-2 rounded-lg text-sm transition"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Sections */}
        <section className="bg-slate-50/90 mb-6 rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
          <SectionTitle icon="🎯">Objective</SectionTitle>
          <p className="text-slate-700 leading-relaxed mb-3">
            Our main objective is to create a strong, vibrant symbiotic alumni
            network that connects departments, current students, past students,
            and society at large.
          </p>
          <p className="text-slate-700 leading-relaxed">
            We aim to support our Alma Mater effectively and organize meaningful alumni events every year.
          </p>
        </section>

        <section className="bg-slate-50/90 mb-6 rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition">
          <SectionTitle icon="📢">An Appeal to All Alumni</SectionTitle>
          <p className="text-slate-700 leading-relaxed mb-3">
            Mahatma Gandhi Memorial College is one of the premier institutions in
            Coastal Karnataka...
          </p>
          <p className="text-slate-700 leading-relaxed mb-3">
            Each year, conventions and gatherings bring our alumni together...
          </p>
          <p className="text-slate-700 leading-relaxed">
            Let us join hands to renew and strengthen our alumni network.
          </p>
        </section>

        <section className="bg-slate-50/90 mb-6 rounded-xl shadow-sm border border-slate-200 p-6 text-slate-700">
          <p className="italic">Awaiting your kind response.</p>
          <p className="mt-4 font-bold text-slate-900">
            — President & Secretary, <br /> MGM College Alumni Forum
          </p>
        </section>

        {/* Office Bearers as Cards */}
        <section className="mt-8">
          <SectionTitle icon="👥">Office Bearers</SectionTitle>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {officeBearers.map((bearer) => (
              <div
                key={bearer.office}
                className="bg-white p-5 rounded-xl shadow border-t-4 border-amber-500 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <FaUser className="text-amber-600" /> {bearer.office}
                </h3>
                <p className="text-slate-800 font-medium text-sm flex items-center gap-2 mb-1">
                  <FaUser className="text-slate-500" /> {bearer.name}
                </p>
                <p className="text-slate-600 text-sm flex items-center gap-2 mb-1">
                  <FaPhone className="text-emerald-600" /> {bearer.mob}
                </p>
                <p className="text-slate-600 text-sm flex items-center gap-2">
                  <FaEnvelope className="text-amber-600" />
                  <a
                    href={`mailto:${bearer.email}`}
                    className="text-amber-700 hover:text-amber-900 hover:underline font-medium break-all"
                  >
                    {bearer.email}
                  </a>
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
