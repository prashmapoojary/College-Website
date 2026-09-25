import React from 'react';

const banner = "https://placehold.co/1200x400/222/fff.png?text=StaffRoom";

const staffRoomCards = [
  { img: "https://placehold.co/400x300/EFEFEF/222?text=image+1" },
  { img: "https://placehold.co/400x300/DDEEFF/222?text=image+2" },
  { img: "https://placehold.co/400x300/CCDDEE/222?text=image+3" },
];

const StaffRoom = () => {
  return (
    <div
      className="college-page-container pt-8 pb-24 min-h-screen font-sans"
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Banner */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
          <img
            src={banner}
            alt="Staff Room Banner"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
            <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
              StaffRoom
            </h1>
            <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
              Comfortable and collaborative faculty spaces across departments
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

        {/* Content with Glass Effect */}
        <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
          <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
            All the departments of MGM College have a separate staff room for their faculty members, in addition to a common staff room provided for general use.
          </p>

          {/* Department Staff Rooms */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Department Staff Rooms</h2>
            <p className="text-slate-700 leading-relaxed">
              Each department staff room is equipped with basic furniture and storage facilities, enabling teachers to prepare lessons, evaluate assignments, and meet students for academic discussions. These spaces also provide privacy for departmental work and staff interactions.
            </p>
          </section>

          {/* Common Staff Room */}
          <section className="mb-6 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Common Staff Room</h2>
            <p className="text-slate-700 leading-relaxed">
              The common staff room serves as a shared space for faculty across departments. It encourages interaction, collaboration, and exchange of ideas among teachers. It is furnished with seating arrangements, tables, and notice boards for departmental and college-level communication.
            </p>
          </section>

          {/* Role in Campus Life */}
          <section className="mb-2 pt-4 border-t border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Role in Campus Life</h2>
            <p className="text-slate-700 leading-relaxed">
              The staff rooms provide faculty members with a comfortable environment for academic preparation, discussions, and short breaks in between classes, ensuring the smooth functioning of teaching and mentoring activities in the college.
            </p>
          </section>
        </div>

        {/* Bottom Cards with dynamic grid and hover */}
        <div
          className={`max-w-5xl mx-auto px-4 grid gap-6 ${
            staffRoomCards.length === 1
              ? "grid-cols-1 justify-items-center"
              : staffRoomCards.length === 2
              ? "grid-cols-2 justify-items-center"
              : "grid-cols-1 md:grid-cols-3"
          } mt-10 mb-6`}
        >
          {staffRoomCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full"
            >
              <img
                src={card.img}
                alt={`Staff Room Image ${index + 1}`}
                className="w-full h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaffRoom;
