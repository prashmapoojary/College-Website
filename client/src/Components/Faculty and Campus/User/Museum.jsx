import React from "react";

export default function Museum() {
  const banners = [
    "/assets/FacultyCampus/M4.jpg",
    "/assets/FacultyCampus/M5.jpg",
    "/assets/FacultyCampus/M6.jpg",
    "/assets/FacultyCampus/M7.jpg",
  ];

  const museums = [
    {
      id: "botanical",
      icon: "🌿",
      title: "Botanical Museum",
      description: [
        "Orderly arrangement of vast diversity of plants, from primitive algae to advanced Angiosperms.",
        "The Botany Museum is housed in the Vijnana Mandira Wing.",
        "Specimens arranged in about 30 large cupboards.",
        "Charts and models adorn the Museum.",
        "Specimens collected during annual field trips.",
      ],
      highlights: [
        "150+ species of Algae",
        "100+ species of Fungi",
        "40+ species of Bryophytes",
        "120+ species of Pteridophytes",
        "41 species of Gymnosperms",
        "150+ species of Angiosperms",
        "40 pathological specimens",
        "5–6 insectivorous plants",
        "Huge preserved Cycas cones",
        "Large mushroom preserved",
        "25+ freak plant specimens",
        "Mosses of South India (4 cupboards)",
        "Algae collection from Lakshadweep",
        "Rare fossil charts",
        "Ferns from Ooty",
      ],
      theme: "from-slate-50 to-white border-l-amber-500",
    },
    {
      id: "zoological",
      icon: "🦴",
      title: "Zoological Museum",
      description: [
        "Located in Vijnana Mandira wing.",
        "Specimens arranged by Phyla.",
        "Contains models, dissections, charts, and teaching aids.",
      ],
      highlights: [
        "Specimens of 1027 species, 742 genera",
        "Skeleton of Baleen Whale (13m vertebral column)",
        "Saw fish snout specimen",
        "Aquatic creatures like jellyfish, octopus, etc.",
        "Huge turtle shell",
        "Fishes from West Coast of India",
        "Otter and Pangolin specimens",
        "2 cupboards of sea shells",
        "Beautiful coral collection",
        "Silkworm cocoon garland",
        "Preserved embryos (porcupine, cow, human, rabbit, deer)",
        "Silk Moth, Honey Bee, and chick development stages",
        "Osteology: skeletons of man, blackbuck, animals",
        "Animal skulls: tiger, crocodile, monkey, tortoise, etc.",
        "Models of dinosaurs",
      ],
      theme: "from-slate-50 to-white border-l-amber-500",
    },
  ];

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative">
        {/* Showcase Section */}
        <div className="p-6 bg-slate-900/5 rounded-2xl border border-slate-200 mb-8">
          <h1 className="text-center text-2xl md:text-4xl font-bold text-amber-400 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 p-5 rounded-2xl mb-6 shadow-xl border-y border-amber-500/40 uppercase tracking-wider">
            🏛️ Museums at MGM College
          </h1>
          <div className="bg-white/95 p-6 rounded-xl shadow-md border border-slate-200">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed mb-4 font-normal">
              A not too small number of successful professionals and scientists
              recall their passion and curiosity to study was sparked by a visit
              to a museum. Thus the museum became the kernel from which the
              learning grew. These sui generis crystallizing experiences motivate
              the visitors to learn and embark on a journey of lifelong learning,
              make their life more meaningful. Come, visit our two museums to get
              the sparks of imagination flying, touch the sky and get the feel of
              what is next for you.
            </p>
            <p className="text-base md:text-lg text-amber-800 font-bold leading-relaxed">
              The different museums available in MGM College are Govind Pai
              Archaeological Museum, Well equipped Botany Museum, Yakshagana
              Museum in Yakshagana Kendra.
            </p>
          </div>
        </div>

      {/* Auto-scrolling Carousel */}
      <div className="overflow-hidden my-6 w-full rounded-2xl border border-slate-200 shadow-md">
        <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
          {banners.concat(banners).map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Museum Banner ${i + 1}`}
              className="w-[280px] h-[280px] object-cover mr-3 rounded-xl shadow-md"
            />
          ))}
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center gap-4 mb-10">
        {museums.map((museum, i) => (
          <button
            key={i}
            onClick={() => scrollToSection(museum.id)}
            className="bg-slate-900 text-amber-400 border border-amber-500/40 px-6 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all shadow-md hover:bg-amber-500 hover:text-slate-950 hover:scale-105"
          >
            {museum.title}
          </button>
        ))}
      </div>

      {/* Museum Sections */}
      {museums.map((museum, i) => (
        <div
          key={i}
          id={museum.id}
          className={`bg-white/95 p-8 mb-10 rounded-2xl shadow-xl border border-slate-200 border-l-[6px] border-l-amber-500 transition-transform hover:scale-[1.01]`}
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold flex justify-center items-center gap-3 mb-6 text-slate-900 border-b-2 border-amber-500 pb-2 inline-flex mx-auto">
              <span className="text-2xl">{museum.icon}</span> {museum.title}
            </h2>

            <h3 className="text-lg font-bold text-amber-700 text-left mb-3">
              Description:
            </h3>
            <ul className="list-disc list-outside pl-6 mb-6 space-y-2 text-left text-slate-700 text-base font-medium">
              {museum.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>

            <h3 className="text-lg font-bold text-amber-700 text-left mb-3">
              Highlights:
            </h3>
            <ul className="space-y-2 text-left text-slate-700 text-base font-medium">
              {museum.highlights.map((h, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-amber-600 font-bold">✔</span> {h}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {/* Tailwind keyframes for carousel */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      </div>
    </div>
  );
}
