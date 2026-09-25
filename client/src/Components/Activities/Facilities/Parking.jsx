import React from 'react';

const banner = "/assets/Activities/Facilities/Parking Banner1.jpg";
const parking1 = "/assets/Activities/Facilities/parking1.jpg";
const parking2 = "/assets/Activities/Facilities/parking2.jpg";
const parking3 = "/assets/Activities/Facilities/parking3.jpg";


const parkingCards = [
  { img: parking1, label: "Staff Parking" },
  { img: parking2, label: "Car Parking" },
  { img: parking3, label: "Student's Parking" },
];

const ParkingInfo = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Parking Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            Parking Places
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            Organized and secure vehicle parking within the MGM College campus
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
          MGM College provides well-organized vehicle parking facilities for both students and staff within the campus. Designated parking areas ensure smooth traffic flow and easy access to the academic blocks, hostels, and other facilities.
        </p>

        {/* Student Parking */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Student Parking</h2>
          <p className="text-slate-700 leading-relaxed">
           Separate parking slots are allotted for students, accommodating two-wheelers and bicycles. These areas are conveniently located near the main entrance and academic buildings for ease of access. Students are required to display valid parking permits and follow the parking guidelines set by the college to maintain order and safety.
          </p>
        </section>

        {/* Staff Parking */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Staff Parking</h2>
          <p className="text-slate-700 leading-relaxed">
            Exclusive parking spaces are reserved for lecturers and staff members, allowing them quick and secure access to the campus. Staff parking areas are located closer to faculty offices and administrative sections, ensuring convenience during working hours.
          </p>
        </section>

        {/* Safety and Regulations */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Safety and Regulations</h2>
          <p className="text-slate-700 leading-relaxed">
            All parking zones are monitored by security personnel and covered under CCTV surveillance. Entry and exit points are regulated to avoid congestion, and only authorized vehicles are permitted within the campus. The college encourages disciplined parking habits to ensure maximum utilization of space and safety for all.
          </p>
        </section>
      </div>

      {/* Bottom Parking Image Cards */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-6 ${
          parkingCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : parkingCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-10 mb-6`}
      >
        {parkingCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full flex flex-col"
          >
            <img
              src={card.img}
              alt={`Parking Image ${index + 1}`}
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

export default ParkingInfo;
