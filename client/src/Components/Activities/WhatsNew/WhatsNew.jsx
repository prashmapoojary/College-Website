
import React from "react";
const college = "/assets/Activities/WhatsNew/college.jpg";
import ArticleCard from "./ArticleCard";

const navLinks = [
  { label: "Classic", url: "http://mgmcollegeudupi.blogspot.com/?view=classic" },
  { label: "Flipcard", url: "http://mgmcollegeudupi.blogspot.com/?view=flipcard" },
  { label: "Magazine", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=magazine" },
  { label: "Mosaic", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=mosaic" },
  { label: "Sidebar", url: "http://mgmcollegeudupi.blogspot.com/2023/12/study-tour-organised-by-deptof-english.html?view=sidebar" },
  { label: "Snapshot", url: "http://mgmcollegeudupi.blogspot.com/?view=snapshot" },
  { label: "Timeslide", url: "http://mgmcollegeudupi.blogspot.com/?view=timeslide" }
];

function WhatsNew() {
  return (
    <div
      className="college-page-container min-h-screen font-sans"
    >
      {/* Hero section with overlay */}
      <div className="relative w-full h-80 md:h-96">
        {/* College image as background */}
        <img
          src={college}
          alt="MGM College Udupi"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ background: "linear-gradient(rgba(12, 35, 64, 0.7), rgba(12, 35, 64, 0.85))" }}
        ></div>
        {/* Overlayed Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-lg">
            📰 MGM: What is New?
          </h1>
          <p className="text-slate-200 text-base md:text-lg mb-6 max-w-2xl drop-shadow text-center px-4 font-medium">
            This blog throws light on various activities conducted at MGM College, Udupi.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => window.open(link.url, "_blank")}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2 rounded-xl text-sm transition shadow-lg border border-amber-400"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <ArticleCard />
      </div>
    </div>
  );
}

export default WhatsNew;
