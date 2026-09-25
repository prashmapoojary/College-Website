import React from 'react';
const banner = "/assets/Activities/Facilities/Canteen Banner.jpg";
const canteen1 = "/assets/Activities/Facilities/Canteen1.jpg";
const canteen2 = "/assets/Activities/Facilities/Canteen2.jpg";
const canteen3 = "/assets/Activities/Facilities/Canteen3.jpg";


const hostelCards = [
  { img: canteen1 },
  { img: canteen2 },
  { img: canteen3 },
];

const facilities = [
  {
    icon: "🍱",
    title: "Mid-day Meals",
    desc: "Nutritious, affordable food"
  },
  {
    icon: "☕",
    title: "Snacks & Beverages",
    desc: "Served all day"
  },
  {
    icon: "🪑",
    title: "Seating",
    desc: "400+ capacity"
  }
];

const Canteen = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Canteen Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            Annapoorna Canteen
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            Serving healthy, affordable meals on campus since 1990
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
          The Annapoorna Canteen of MGM College was inaugurated on <b className="text-slate-900">23rd March, 1990</b> by <i className="text-slate-800">Dr. M. I. Savadatti, Vice-Chancellor of Mangalore University.</i> Since then, it has been serving as an important support facility for students and staff, offering affordable and hygienic food within the campus.
        </p>

        {/* Facilities Icon Cards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-amber-500/30 pb-2">Facilities</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {facilities.map((f, i) => (
              <div key={i} className="bg-slate-50/90 rounded-xl border border-slate-200 shadow p-5 flex flex-col items-center w-44 transition-all hover:shadow-lg hover:border-amber-500/50 hover:-translate-y-1 duration-300">
                <span className="text-4xl mb-2">{f.icon}</span>
                <span className="font-bold text-slate-900 mb-1">{f.title}</span>
                <span className="text-slate-600 text-sm text-center">{f.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Role in Campus Life */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Role in Campus Life</h2>
          <p className="text-slate-700 leading-relaxed">
            The canteen is more than just a dining space—it is a hub of interaction and community life. It plays a vital role during college events, as the availability of on-campus meals makes organizing seminars, workshops, and cultural programs easier and more convenient.
          </p>
        </section>

        {/* Healthy and Hygienic Dining */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Healthy and Hygienic Dining</h2>
          <p className="text-slate-700 leading-relaxed">
            Annapoorna maintains high standards of cleanliness and hygiene, ensuring that students receive nutritious meals in a safe environment. Both vegetarian and light snack options are available to cater to different preferences. The canteen staff work under the guidance of the management to provide timely and efficient service throughout the day.
          </p>
        </section>
      </div>

      {/* Bottom Hostel Image Cards */}
      <div
        className={`max-w-5xl mx-auto mt-10 mb-6 px-4 grid gap-6 ${
          hostelCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : hostelCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        }`}
      >
        {hostelCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full"
          >
            <img
              src={card.img}
              className="w-full h-56 object-cover"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canteen;
