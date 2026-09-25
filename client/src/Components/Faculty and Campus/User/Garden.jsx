import React from "react";

const gardenMarqueeImages = [
  "/assets/FacultyCampus/bot1.jpg",
  "/assets/FacultyCampus/bot2.jpg",
  "/assets/FacultyCampus/bot3.jpg",
];

export default function Garden() {
  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative overflow-x-hidden">
        {/* Hero Section */}
        <div className="relative flex justify-center items-center p-2 w-full text-center mb-6">
          <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 p-6 rounded-2xl w-full shadow-xl border-y border-amber-500/40">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-wider mb-2">
              🌿 MGM Botanical Garden
            </h1>
            <p className="text-base sm:text-lg font-medium text-amber-200/90">Where Nature Meets Knowledge</p>
          </div>
        </div>

      {/* Marquee */}
      <div className="overflow-hidden bg-slate-950/40 rounded-2xl border border-slate-200 mx-auto w-full my-4">
        <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
          {gardenMarqueeImages.concat(gardenMarqueeImages).map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Garden"
              className="h-[300px] w-auto max-w-[95vw] mx-3 rounded-xl shadow-lg object-cover"
            />
          ))}
        </div>
      </div>

      {/* Garden Details */}
      <section className="bg-white/95 rounded-2xl shadow-lg w-full mx-auto my-6 p-6 text-center animate-fadeUp border border-slate-200">
        <h2 className="text-amber-700 text-2xl font-bold mb-3 border-b-2 border-amber-500 pb-2 inline-block mx-auto">
          🌱 Garden Details
        </h2>
        <p className="text-base leading-7 text-slate-700">
          The <b>Botanical garden</b> is the <b>green center</b> of MGM college. <br />
          Started in <b>1970</b>, it had a variety of <b>100 species of plants</b>. <br />
          It is situated in an area of about <b>half an acre</b> surrounded by the
          <b> Chemistry, Zoology, Botany</b> and <b>Home Science</b> departments. <br />
          The Botanical garden was named <b>"Botanica"</b> during the
          <b> Golden Jubilee year (1999-2000)</b>.
        </p>
      </section>

      {/* BOTANICA */}
      <section className="bg-white/95 rounded-2xl shadow-lg w-full mx-auto my-6 p-6 text-center animate-fadeUp border border-slate-200">
        <h2 className="text-amber-700 text-2xl font-bold mb-3 border-b-2 border-amber-500 pb-2 inline-block mx-auto">🌿 BOTANICA</h2>
        <p className="text-base leading-7 text-slate-700">
          <b>BOTANICA</b> - containing indigenous and exotic varieties of{" "}
          <b>trees, shrubs and herbs</b> of <b>medicinal</b> and{" "}
          <b>ornamental value</b>. <br />
          The trees in the Campus have <b>name plates</b> with
          <b> taxonomical information</b>. <br />
          <b>Arches covered with flowering creepers</b> welcome all inside. <br />
          A large number of <b>plants</b> grow inside, including{" "}
          <b>medicinal plants, rare ferns, xerophytes</b>. <br />
          There is also a <b>fern house</b> with many <b>fern varieties</b>.
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-white/95 rounded-2xl shadow-lg w-full mx-auto my-6 p-6 animate-fadeUp border border-slate-200">
        <h2 className="text-amber-700 text-2xl font-bold text-center mb-6 border-b-2 border-amber-500 pb-2 inline-block mx-auto">
          🌟 Highlights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Another rare plant, the Telegraph plant with jerky leaflet movements.",
            "Govania plant oozes sap like water from a tap when cut.",
            "Cananga Odorata – rare tree, only one in Udupi.",
            "About 40 cycas plants, male and female producing cones.",
            "Zamia – an African gymnosperm grows here.",
            "Parkia – tall tree with tennis-ball like inflorescence.",
            "Hydrophytes in pools like Pistia, Eichornia, Marsilea, etc.",
            "Medicinal plants like Ashoka, Colus aromaticus, lemon grass, kus-kus.",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 p-4 rounded-xl shadow-md hover:scale-[1.02] hover:shadow-lg transition-transform duration-200 text-slate-800 font-medium"
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Tailwind keyframes */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp {
            animation: fadeUp 1s ease-in forwards;
          }
        `}
      </style>
      </div>
    </div>
  );
}
