import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Hook to detect mobile screen
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function HeaderSection() {
  const isMobile = useIsMobile();
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && openDropdown && navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobile, openDropdown]);

  const navItems = [
    {
      title: "About",
      links: [
        ["Vision & Mission", "/vision_mission"],
        ["Principal", "/principal"],
        ["Management", "/management"],
        ["History", "/history"],
        ["Image Gallery", "/gallery"],
        ["Gandhian Study Centre", "/docs/MGM Gandhian Study Centre - A Brief Information.pdf"],
        ["Contact us", "/contact"],
      ],
    },
    {
      title: "Academics",
      links: [
        ["Courses", "/academics/courses"],
        ["Admissions", "/academics/admissions"],
        ["SEP", "/academics/sep"],
        ["Job Placement ", "/academics/placements"],
        ["NAAC", "/academics/naac"],
        ["IQAC", "/academics/iqac"],
        ["NIRF", "/academics/nirf"],
        ["Scholarships", "/academics/scholarships"],
        ["Rank Lists", "/ranklist"],
        ["Rules And Regulations", "/academics/rules"],
        ["Research Cell", "/academics/research"],
        ["E-Resources", "/academics/eresources"],
        ["Programme/Course", "/academics/outcomes"],
        ["Feedback", "/academics/feedback"],
        ["Grievance and Suggestions", "/academics/grievance"],
      ],
    },
    {
      title: "Faculty and Campus",
      links: [
        ["Department", "department"],
        ["Library", "library"],
        ["Museum", "museum"],
        ["Garden", "garden"],
        ["Campus Facilities", "/facilities"],
        ["Campus Blocks", "block"],
        ["Campus Cells", "cell"],
      ],
    },
    {
      title: "Cultural Centres",
      links: [
        ["RGPai Research Centre", "#"],
        ["Yakshagana Kendra", "#"],
        ["Regional Research Centre", "#"],
      ],
    },
    {
      title: "Activities",
      links: [
        ["Alumni", "/Alumni/Alumni"],
        ["NCC and NSS", "/NccNss/NccNss"],
        ["Clubs @ MGM", "/Clubs/Clubs"],
        ["Sports", "/Sports/Sports"],
        ["Events Calendar", "/events"],
        ["MGM: What is new?", "/WhatsNew"],
      ],
    },
  ];

  return (
    <>
      {/* Compact Header */}
      <header className="bg-gradient-to-r from-slate-950 via-[#0c2340] to-slate-950 px-4 py-3 sm:px-6 shadow-2xl border-b-2 border-amber-500/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex-shrink-0">
            <img src="/img/mgm_logo.png" alt="College Emblem" className="h-[52px] sm:h-[68px] w-auto drop-shadow-xl" />
          </div>

          <div className="text-center sm:flex-1 sm:px-4">
            <h1 className="text-amber-300 font-bold text-[18px] sm:text-[28px] lg:text-[34px] font-serif drop-shadow-[1px_2px_4px_rgba(0,0,0,0.8)] leading-tight tracking-wide">
              Mahatma Gandhi Memorial College, Udupi
            </h1>
            <p className="text-amber-100/90 text-[11px] sm:text-[13px] lg:text-[15px] font-medium mt-1 font-sans tracking-wide">
              (Accredited by NAAC with an ‘A+’ Grade · CGPA 3.36 in the IV Cycle of Accreditation)
            </p>
          </div>

          <div className="flex-shrink-0">
            <img src="/img/75Am.jpg" alt="75 Years Emblem" className="h-[52px] sm:h-[68px] w-auto drop-shadow-xl rounded-lg border border-amber-500/30" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav ref={navRef} className="sticky top-0 z-50 bg-[#0c2340]/95 backdrop-blur-md border-b border-amber-500/30 shadow-xl w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6">
          <ul className="flex flex-row flex-nowrap justify-start gap-1 sm:gap-2 overflow-x-auto sm:overflow-visible py-1.5 sm:py-2 scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-transparent w-full">
            <li>
              <Link
                to="/home"
                className="block px-3 py-1.5 text-[12px] sm:text-[14px] font-semibold text-slate-100 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition whitespace-nowrap"
              >
                Home
              </Link>
            </li>

            {navItems.map(({ title, links }) => (
              <li key={title} className={`relative ${isMobile ? "" : "group"}`}>
                <button
                  onClick={() => isMobile && setOpenDropdown(openDropdown === title ? null : title)}
                  className="block px-3 py-1.5 text-[12px] sm:text-[14px] font-semibold text-slate-100 hover:bg-amber-500 hover:text-slate-950 rounded-lg transition whitespace-nowrap text-left"
                >
                  {title}
                </button>

                <ul
                  className={`absolute top-full left-0 bg-[#0c2340] border border-amber-500/30 min-w-[200px] shadow-2xl z-50 transition-all duration-200 rounded-b-xl overflow-hidden
                    ${isMobile ? (openDropdown === title ? "block" : "hidden") : "hidden group-hover:block"}
                    ${links.length > 6 ? "max-h-[260px] overflow-y-auto scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-transparent" : ""}
                  `}
                >
                  {links.map(([label, link]) => (
                    <li key={label} className="border-b border-slate-800/60 last:border-b-0">
                      {link.endsWith(".pdf") ? (
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-[12px] sm:text-[13px] text-slate-200 font-medium text-left whitespace-nowrap hover:bg-amber-500 hover:text-slate-950 transition"
                          onClick={() => {
                            if (isMobile) setOpenDropdown(null);
                          }}
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          to={link}
                          className="block px-4 py-2 text-[12px] sm:text-[13px] text-slate-200 font-medium text-left whitespace-nowrap hover:bg-amber-500 hover:text-slate-950 transition"
                          onClick={() => {
                            if (isMobile) setOpenDropdown(null);
                          }}
                        >
                          {label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>

          {/* Apply Now Button */}
          <div className="mt-2 sm:mt-0 sm:ml-auto">
            <Link
              to="/apply"
              className="inline-block text-center font-bold text-[12px] sm:text-[14px] px-5 py-1.5 rounded-full shadow-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 transition-transform transform hover:-translate-y-0.5"
              style={{
                textDecoration: "none",
                whiteSpace: "nowrap",
                lineHeight: "1.2",
              }}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderSection;