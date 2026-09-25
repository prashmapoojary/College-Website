import React from 'react';

const banner = "/assets/Activities/Facilities/lab Banner.jpg";
const lab1 = "/assets/Activities/Facilities/lab1.jpg";
const lab2 = "/assets/Activities/Facilities/lab2.jpg";
const lab3 = "/assets/Activities/Facilities/lab3.jpg";
const lab4 = "/assets/Activities/Facilities/lab4.jpg";


const labCards = [
  { img: lab1, label: "Physics Lab" },
  { img: lab2, label: "Chemistry Lab" },
  { img: lab3, label: "Zoology Lab" },
  { img: lab4, label: "Botany Lab" },
];

const Labs = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Labs Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            Laboratories
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            Modern labs fostering scientific exploration and research
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Info Content with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        {/* Physics */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Physics Lab</h2>
          <p className="text-slate-700 leading-relaxed">
            The Physics Laboratory provides instruments for experiments in mechanics, optics, electricity 
            and magnetism, giving students a deeper understanding of physical principles.
          </p>
        </section>

        {/* Chemistry */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Chemistry Lab</h2>
          <p className="text-slate-700 leading-relaxed">
            Equipped with modern apparatus, fume hoods and chemicals, the Chemistry Laboratory supports 
            analytical, organic and inorganic experiments essential for grasping chemical concepts.
          </p>
        </section>

        {/* Zoology */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Zoology Lab</h2>
          <p className="text-slate-700 leading-relaxed">
            The Zoology Laboratory offers specimens, microscopes and models to help students study 
            animal anatomy, physiology, and taxonomy in detail.
          </p>
        </section>

        {/* Botany */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Botany Lab</h2>
          <p className="text-slate-700 leading-relaxed">
            The Botany Laboratory is designed for the exploration of plant biology with microscopes, slides, 
            and live samples, encouraging research in botany and environmental science.
          </p>
        </section>
      </div>

      {/* Bottom Lab Image Cards with Labels and dynamic grid */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-6 ${
          labCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : labCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        } mt-10 mb-6`}
      >
        {labCards.map((card, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-full"
          >
            <img 
              src={card.img} 
              alt={card.label} 
              className="w-full h-48 object-cover" 
            />
            <div className="py-3 text-center bg-slate-50 border-t border-slate-200">
              <span className="font-bold text-base text-slate-900">{card.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Labs;
