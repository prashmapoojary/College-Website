import React, { useState, useEffect } from "react";

const nccImages = [
  "https://mgmudupi.ac.in/images/NCC.jpg",
  "https://mgmudupi.ac.in/images/NCC1.jpg",
  "https://mgmudupi.ac.in/images/NCC2.jpg",
  "https://mgmudupi.ac.in/images/NCC3.jpg",
  "https://mgmudupi.ac.in/images/NCC4.jpg",
  "https://mgmudupi.ac.in/images/NCC5.jpg",
  "https://mgmudupi.ac.in/images/NCC6.jpg",
];
const rangerImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];
const nssImages = ["https://mgmudupi.ac.in/images/NCC6.jpg"];
const roversImages = ["https://mgmudupi.ac.in/images/Rangers1.jpg"];

const tabsData = [
  {
    label: "NCC (National Cadet Corps)",
    value: "ncc",
    color: "#0f172a", // Slate Navy
    accent: "#f59e0b",
    content: (
      <>
        MGM College offers <b>Army</b> and <b>Naval</b> NCC wings for boys and girls. Students with an NCC "C" certificate can earn extra credit for higher education and employment.
        <br />
        <br />
        Activities include parades, training camps, social service, and cadets' participation in major events, adventurous national camps, and leadership programs. The NCC instills discipline, patriotism, and leadership qualities.
        <br />
        <br />
        Cadets receive training for national events like Republic Day and Kargil Vijay Diwas observances.
        <br />
        NCC participates in vaccination drives, crime prevention awareness, ecosystem restoration, and International Yoga Day celebrations.
        <br />
        The NCC band and cadets actively participate in college and public events, promoting discipline and patriotism.
        <br />
        Overall, NCC develops physical fitness, leadership, and community service spirit among students.
      </>
    ),
    images: nccImages,
  },
  {
    label: "NSS (National Service Scheme)",
    value: "nss",
    color: "#065f46", // Deep Emerald
    accent: "#34d399",
    content: (
      <>
        NSS is rooted in the motto <b>"Not Me But You"</b>. It trains students to take up social responsibility through awareness programs, cleaning drives, plantation, blood donation camps, health, and literacy initiatives.
        <br />
        <br />
        The program emphasizes voluntary service and develops empathy and social commitment among youth.
        <br />
        NSS organizes annual special camps involving community service, health checkups, cleaning drives, tree plantations, voter awareness, Covid-19 awareness, and social welfare activities.
        <br />
        NSS adopts villages for sustained community development and conducts workshops, orientation programs, and personality development camps.
        <br />
        Volunteers participate in youth parliaments, pulse polio campaigns, and national event celebrations.
        <br />
        Benefits include leadership training, social responsibility, and recognition at national integration camps, boosting employability and personal growth.
      </>
    ),
    images: nssImages,
  },
  {
    label: "MGM Rangers",
    value: "rangers",
    color: "#78350f", // Rich Terracotta / Amber Deep
    accent: "#fbbf24",
    content: (
      <>
        Introduced in 1996, the Rangers’ Wing provides girls with training in self-discipline, cooperation, community service, physical fitness, and leadership skills.
        <br />
        <br />
        The Rangers foster a spirit of selfless service, responsibility, and teamwork among women students.
        <br />
        They regularly engage in camps and social service activities including blood donation camps, tree plantation, cleaning drives, and anti-drug rallies.
        <br />
        Rangers receive training in first aid, mapping, compass reading, and leadership skills development.
        <br />
        Despite lack of external funding, Rangers maintain their own outfits and equipment, demonstrating dedication and self-reliance.
      </>
    ),
    images: rangerImages,
  },
  {
    label: "Rovers",
    value: "rovers",
    color: "#991b1b", // Heritage Brick Red
    accent: "#f87171",
    content: (
      <>
        The Rovers program complements the Rangers, focusing on boys’ leadership, volunteerism, adventure activities, community development, and character building.
        <br />
        <br />
        Rovers participate in social service projects, survival training, leadership camps, blood donation drives, tree plantation, and social awareness rallies.
        <br />
        They develop scouting skills, leadership abilities, first aid knowledge, event organization, and earn merit badges.
        <br />
        Together with Rangers, Rovers contribute significantly to college events and community outreach programs, fostering responsible citizenship and personal growth.
      </>
    ),
    images: roversImages,
  },
];

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  if (!images?.length) return null;

  return (
    <div className="relative w-full max-h-[400px] overflow-hidden rounded-2xl shadow-xl border-2 border-amber-500/40">
      <img
        src={images[index]}
        alt={`slide-${index}`}
        className="w-full h-auto object-cover transition-opacity duration-700"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer border border-black/30 transition-all ${
              idx === index ? "bg-amber-400 scale-125" : "bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Nss() {
  const [activeTab, setActiveTab] = useState("ncc");

  const activeTabData = tabsData.find((tab) => tab.value === activeTab);

  return (
    <div
      className="college-page-container min-h-screen py-10 px-4 font-sans"
    >
      <div className="max-w-5xl mx-auto backdrop-blur-md bg-white/92 rounded-2xl shadow-2xl border border-slate-200/80 p-6 md:p-10">
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 rounded-xl py-4 px-6 mb-8 shadow-xl border border-amber-500/30 tracking-wide">
          🛡️ MGM College - NCC, NSS, Rangers & Rovers
        </h1>

        <div className="flex justify-center gap-3 flex-wrap mb-8">
          {tabsData.map(({ label, value, color }) => (
            <button
              key={value}
              onClick={() => setActiveTab(value)}
              style={{
                backgroundColor: activeTab === value ? color : "#f8fafc",
                color: activeTab === value ? "#fbbf24" : "#1e293b",
                borderColor: activeTab === value ? "#d97706" : "#cbd5e1",
              }}
              className={`border px-5 py-2.5 rounded-xl font-bold cursor-pointer transition-all duration-300 shadow-sm text-sm sm:text-base ${
                activeTab === value ? "scale-105 shadow-md border-amber-500" : "hover:bg-amber-50 border-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div
          key={activeTab}
          className="flex flex-col lg:flex-row gap-8 items-start justify-center animate-fadein"
        >
          <div className="flex-1 bg-slate-50/90 rounded-2xl p-6 shadow border border-slate-200 text-slate-800 leading-relaxed text-base min-w-[300px]">
            {activeTabData?.content}
          </div>
          <div className="w-full lg:w-[420px] shrink-0">
            <Carousel images={activeTabData?.images || []} />
          </div>
        </div>

        <style>{`
          @keyframes fadein {
            from {opacity: 0; transform: translateY(10px);}
            to {opacity: 1; transform: translateY(0);}
          }
          .animate-fadein {
            animation: fadein 0.4s ease-out;
          }
        `}</style>
      </div>
    </div>
  );
}