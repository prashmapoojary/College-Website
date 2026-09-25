import React from 'react';

const banner = "/assets/Activities/Facilities/Cls Banner1.jpg";
const cls1 = "/assets/Activities/Facilities/cls1.jpg";
const cls2 = "/assets/Activities/Facilities/cls2.jpg";
const cls3 = "/assets/Activities/Facilities/cls3.jpg";


const facilityCards = [
  { img: cls1, label: "Class Room" },
  { img: cls2, label: "Computer Centre" },
  { img: cls3, label: "AV Hall" },
];

const ClsAndCompAv = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Facilities Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            Classrooms, Computer Centre & AV Hall
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            Modern facilities supporting quality education and interactive learning
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Main Info with Glass Layout */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        {/* Classrooms */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Classrooms</h2>
          <p className="text-slate-700 leading-relaxed">
            The college has spacious, well-ventilated classrooms designed for an effective learning
            atmosphere. Traditional blackboards are being steadily replaced with modern green boards
            and digital aids, making every class more engaging and interactive.
          </p>
        </section>

        {/* Computer Centre */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Computer Centre</h2>
          <p className="text-slate-700 leading-relaxed">
            The Computer Centre, with over 250 computers, high-speed internet, projectors, and servers, 
            empowers students to gain hands-on experience with technology. It supports practical sessions,
            workshops, and research across all streams of study.
          </p>
        </section>

        {/* Audio-Visual Hall */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Audio-Visual Hall</h2>
          <p className="text-slate-700 leading-relaxed">
            The modern Audio-Visual Hall offers facilities for presentations, guest lectures, and
            multimedia-based sessions. Its advanced audio and projection systems make it a hub for
            interactive teaching and events.
          </p>
        </section>
      </div>

      {/* Bottom Image Cards with dynamic centering */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-6 ${
          facilityCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : facilityCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-10 mb-6`}
      >
        {facilityCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full flex flex-col"
          >
            <img
              src={card.img}
              alt={card.label}
              className="w-full h-56 object-cover"
            />
            {/* Label below image */}
            <div className="py-3 text-center bg-slate-50 border-t border-slate-200">
              <span className="font-bold text-slate-900 text-base">{card.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClsAndCompAv;
