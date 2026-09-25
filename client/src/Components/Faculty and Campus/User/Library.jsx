import React from "react";
import {
  FaBook,
  FaLaptop,
  FaUsers,
  FaCogs,
  FaChalkboardTeacher,
  FaArchive,
} from "react-icons/fa";

const iconMap = {
  "Book Collection": <FaBook />,
  Membership: <FaUsers />,
  "Book Borrowing": <FaBook />,
  "Journals & Magazines": <FaArchive />,
  "Reference Books": <FaLaptop />,
  "Department Libraries": <FaCogs />,
  "Multi Facility Centre": <FaChalkboardTeacher />,
  "Working Hours": <FaUsers />,
};

export default function UserLibraryPage() {
  const imageUrls = [
    "/assets/FacultyCampus/L2.jpg",
    "/assets/FacultyCampus/L3.jpg",
    "/assets/FacultyCampus/L4.jpg",
    "/assets/FacultyCampus/L5.jpg",
    "/assets/FacultyCampus/L6.jpg",
  ];

  const genesisPoints = [
    "MGM College library since its inception in 1949 has come a long way and it is now housed in a spacious independent building with all modern facilities.",
    "The college was admitted to UGC 12(f) in 1956 and got recognition under UGC 2(f) in 1960. Since then the library has grown steadily with collection of more than 1,00,000 volumes of books and subscription to 250+ journals.",
    "To promote good quality education the College library has the Career Guidance Cell, UGC Book Bank Scheme and facilities for visually challenged students. Recently the library has been upgraded with new technologies like INFLIBNET, OPAC, e-journals and e-books.",
    "Currently, it has a strength of more than 2000 users.",
  ];

  const tableData = [
    {
      category: "Book Collection",
      details:
        "The library has a vast collection of more than 1,00,000 volumes of books in all disciplines.",
    },
    {
      category: "Membership",
      details:
        "All the students admitted to MGM College are eligible to enroll as members of the library.\nStaff members are also eligible to become members.",
    },
    {
      category: "Book Borrowing",
      details:
        "Students: 2 books for 15 days\nStaff: 10 books for 1 month\nRenewal: 2 times",
    },
    {
      category: "Journals & Magazines",
      details:
        "The library subscribes to more than 250 periodicals including journals, magazines and newspapers.",
    },
    {
      category: "Reference Books",
      details:
        "The Reference section has a collection of encyclopedias, dictionaries, handbooks and manuals in all subjects.",
    },
    {
      category: "Department Libraries",
      details:
        "Apart from the central library, each department has its own departmental library for quick reference.",
    },
    {
      category: "Multi Facility Centre",
      details:
        "Internet browsing, reprography, scanning, printing and multimedia facilities are available.",
    },
    {
      category: "Working Hours",
      details:
        "Monday to Friday: 8:30 am – 5:30 pm\nSaturday: 8:30 am – 1:00 pm",
    },
  ];

  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative">
        {/* Title */}
        <h1 className="text-center text-2xl md:text-4xl font-bold text-amber-400 shadow-xl rounded-2xl py-5 px-8 mb-10 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 border-y border-amber-500/40 tracking-wider uppercase">
          📚 Library
        </h1>

        {/* Image Marquee */}
        <div className="relative overflow-hidden w-full h-52 mx-auto mb-12 rounded-2xl shadow-md border border-slate-200">
          <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
            {imageUrls.concat(imageUrls).map((url, i) => (
              <img
                key={i}
                src={url}
                alt={`Library ${i + 1}`}
                className="h-52 w-72 object-cover rounded-xl flex-shrink-0 shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Genesis Timeline */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-400 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 border-y border-amber-500/40 rounded-xl py-3.5 px-6 shadow-md uppercase tracking-wider">
            Genesis and Growth
          </h2>
          <div className="flex flex-col items-center space-y-8 pt-4">
            {genesisPoints.map((pt, i) => (
              <div
                key={i}
                className="relative bg-white/95 border border-slate-200 p-6 rounded-2xl shadow-lg w-11/12 max-w-lg text-center mt-5"
              >
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-extrabold shadow-lg">
                    {i + 1}
                  </div>
                </div>
                <p className="text-slate-700 text-base leading-relaxed font-medium">{pt}</p>
                {i !== genesisPoints.length - 1 && (
                  <div className="w-1 h-8 bg-amber-500 mx-auto mt-4 rounded"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Library Sections */}
        <div className="space-y-6 mt-14">
          <h2 className="text-xl sm:text-2xl font-bold text-center text-amber-400 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 border-y border-amber-500/40 rounded-xl py-3.5 px-6 shadow-md uppercase tracking-wider">
            Library Sections & Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 pt-2">
            {tableData.map((row, i) => (
              <div
                key={i}
                className="bg-white/95 rounded-2xl shadow-lg border border-slate-200 hover:border-amber-500 p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5"
              >
                <span className="text-3xl text-amber-600 mb-3">
                  {iconMap[row.category] || <FaBook />}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{row.category}</h3>
                {row.details.includes("\n") ? (
                  <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm text-left font-medium">
                    {row.details.split("\n").map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{row.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
