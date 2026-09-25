import React from 'react';

const banner = "https://placehold.co/1200x400/222/fff.png?text=Hostel+For+Girls";

const hostelCards = [
  { img: "https://placehold.co/400x300/EFEFEF/222?text=image+1" },
  { img: "https://placehold.co/400x300/DDEEFF/222?text=image+2" },
  { img: "https://placehold.co/400x300/CCDDEE/222?text=image+3" },
];

const HostelInfo = () => {
  return (
    <div
      className="college-page-container pt-8 pb-24 min-h-screen font-sans"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Banner */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
          <img
            src={banner}
            alt="Hostel Banner"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
            <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
              Hostel For Girls
            </h1>
            <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
              Safe and supportive living environment for students from far-off places
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
          <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
            Hostel facilities are provided for students coming from far-off places, offering them a safe and supportive living environment. The <b className="text-slate-900">Sri Vadiraja Vidyarthini Nilaya,</b> established in 1970, serves as the Ladies Hostel of MGM College. Known for its discipline and self-governance, the hostel has earned a strong reputation among students and parents. Living here is regarded as a mark of trust and pride for the residents.
          </p>

          {/* Facilities */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Facilities</h2>
            <p className="text-slate-700 leading-relaxed">
              The hostel is equipped with well-ventilated rooms furnished with essential items such as a cot, cupboard, study table, and chair. Common amenities include <b className="text-slate-900">Priyadarshini Hall </b>(added in 1973) for cultural events and gatherings, a reading room, recreation hall, and TV lounge. Residents also have access to clean drinking water, solar water heaters for hot water supply, and laundry facilities. WiFi is available throughout the premises to support academic needs.
            </p>
          </section>

          {/* Safety and Security */}
          <section className="mb-6 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Safety and Security</h2>
            <p className="text-slate-700 leading-relaxed">
              The hostel maintains 24x7 security with a dedicated warden to ensure the safety and well-being of all residents. The campus is equipped with CCTV surveillance, and visitors are allowed only during specified hours. A set of rules and regulations promotes a disciplined environment conducive to study and personal growth.
            </p>
          </section>

          {/* Mess */}
          <section className="mb-6 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Mess</h2>
            <p className="text-slate-700 leading-relaxed">
              A hygienic vegetarian mess operates on a cost-sharing basis, providing nutritious meals to the residents. Special non-vegetarian dishes can be arranged occasionally during festivals or celebrations. Residents also have access to purified drinking water and canteen facilities for light snacks and beverages.
            </p>
          </section>

          {/* Recreation and Community Life */}
          <section className="mb-2 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Recreation and Community Life</h2>
            <p className="text-slate-700 leading-relaxed">
              The hostel encourages a vibrant community life with spaces for indoor and outdoor games, cultural activities, and group study sessions. Various celebrations and hostel events help students bond, creating a sense of belonging away from home. The warden, <b className="text-slate-900">Ms. Jayalaxmi M. Rao, B.Com.,</b> personally oversees the smooth functioning of the hostel and addresses the needs of the boarders.
            </p>
          </section>
        </div>

        {/* Bottom Image Cards */}
        <div
          className={`max-w-5xl mx-auto px-4 grid gap-6 ${
            hostelCards.length === 1
              ? "grid-cols-1 justify-items-center"
              : hostelCards.length === 2
              ? "grid-cols-2 justify-items-center"
              : "grid-cols-1 md:grid-cols-3"
          } mt-10 mb-6`}
        >
          {hostelCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full"
            >
              <img
                src={card.img}
                alt={`Hostel Image ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostelInfo;
