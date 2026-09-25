import React, { useState } from "react";
import BackToTop from "../BackToTop";

// Import images
const A1 = "/assets/Activities/Sports/A1.jpeg";
const A2 = "/assets/Activities/Sports/A2.jpeg";
const A3 = "/assets/Activities/Sports/A3.jpeg";
const A4 = "/assets/Activities/Sports/A4.jpeg";
const A5 = "/assets/Activities/Sports/A5.jpeg";
const A6 = "/assets/Activities/Sports/A6.jpeg";

// Carousel controls SVG (inline, no external icons)
const Arrow = ({ left }) => (
  <svg
    className={`w-10 h-10 text-amber-500 hover:text-amber-400 transition-colors ${left ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const SportsPage = () => {
  const images = [A1, A2, A3, A4, A5, A6];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="college-page-container text-slate-800 font-sans leading-relaxed min-h-screen pb-24"
    >
      <div className="max-w-6xl mx-auto px-4 pt-8">
        {/* Header Section */}
        <header className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-white text-center px-6 py-10 rounded-2xl shadow-2xl border border-amber-500/30 mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-wide mb-4 text-amber-400 drop-shadow-md">
            🏅 MGM College Sports Summary ⚽
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
            MGM College supports overall student growth through a strong focus on
            physical education and sports. Large playgrounds, skilled instructors,
            and regular training have helped students become champions over the years.
          </p>
        </header>

      {/* Sports Gallery - Carousel */}
      <section
        className="flex flex-col items-center justify-center mt-6 px-4 relative"
        aria-label="Photos from MGM College Sports events"
      >
        <div className="relative">
          {/* Left Arrow */}
          <button
            className="absolute top-1/2 -left-14 md:-left-20 transform -translate-y-1/2 bg-slate-900/80 border border-amber-500/40 rounded-full p-1 shadow-lg hover:scale-110 transition-transform z-10"
            onClick={prev}
            aria-label="Previous image"
          >
            <Arrow left />
          </button>
          {/* Image */}
          <img
            src={images[current]}
            alt={`MGM Sports Event ${current + 1}`}
            className="w-[340px] h-[220px] md:w-[500px] md:h-[330px] object-cover rounded-2xl shadow-2xl border-4 border-amber-500/40 transition-transform duration-500"
          />
          {/* Right Arrow */}
          <button
            className="absolute top-1/2 -right-14 md:-right-20 transform -translate-y-1/2 bg-slate-900/80 border border-amber-500/40 rounded-full p-1 shadow-lg hover:scale-110 transition-transform z-10"
            onClick={next}
            aria-label="Next image"
          >
            <Arrow />
          </button>
        </div>
        {/* Dots / Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current ? "bg-amber-500 scale-125" : "bg-slate-400"
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* General Rules for Sports Activities */}
      <section className="backdrop-blur-md bg-white/92 border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-10 mt-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold uppercase relative inline-block after:content-[''] after:block after:w-16 after:h-1 after:bg-amber-500 after:rounded-md after:mx-auto after:mt-2 mb-6">
          General Rules for Sports Activities
        </h2>
        <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
          Participation in sports is a key part of student life and overall
          development. To ensure fair play, safety, and discipline, all students
          involved in sports must follow these guidelines:
        </p>
        <ol className="list-decimal text-left max-w-4xl mx-auto text-base sm:text-lg space-y-4 pl-6 text-slate-700">
          <li>
            <span className="font-bold text-slate-900">Team Leadership:</span> Captains for each sport will be appointed by
            the College’s Physical Director based on merit, leadership skills, and commitment.
          </li>
          <li>
            <span className="font-bold text-slate-900">Selection Criteria:</span> Only students who participate regularly
            in practices and internal competitions are eligible for selection to college
            representative teams.
          </li>
          <li>
            <span className="font-bold text-slate-900">Attendance & Participation:</span> Teams that fail to attend scheduled
            practices or disobey instructions may be disqualified from participating in
            tournaments or matches.
          </li>
          <li>
            <span className="font-bold text-slate-900">Discipline:</span> Students showing poor conduct, disrespect towards
            staff or teammates, or indiscipline may be removed from teams without prior notice.
          </li>
          <li>
            <span className="font-bold text-slate-900">Uniform & Equipment:</span> All players must wear the prescribed uniform
            and bring necessary gear for each game. Proper attire is mandatory during all
            official games, practices, and sports events.
          </li>
          <li>
            <span className="font-bold text-slate-900">Code of Conduct:</span> Players are expected to demonstrate discipline,
            follow all instructions from coaches and officials, and maintain sportsmanship
            both on and off the field.
          </li>
          <li>
            <span className="font-bold text-slate-900">Care of Equipment:</span> Sports materials and equipment issued by the
            college must be handled responsibly and returned in good condition. Misuse or
            loss may result in penalties.
          </li>
          <li>
            <span className="font-bold text-slate-900">Cleanliness & Safety:</span> Keep the grounds and facilities clean. Avoid
            littering, and report any damaged equipment or unsafe conditions immediately.
          </li>
          <li>
            <span className="font-bold text-slate-900">Ground Timings:</span> The sports ground is available for practice and
            recreational play from <span className="font-bold text-amber-700">4:00 p.m. to 6:00 p.m. on working days</span>.
            Students must not use the ground during class hours without permission.
          </li>
          <li>
            <span className="font-bold text-slate-900">External Participation:</span> Students are not allowed to play for
            outside clubs, organizations, or teams without the prior written approval of the
            Principal.
          </li>
          <li>
            <span className="font-bold text-slate-900">Dispute Resolution:</span> In case of any disagreements or disciplinary
            issues, the decision of the Principal will be final and binding.
          </li>
        </ol>
        <p className="text-base sm:text-lg text-slate-700 max-w-3xl mx-auto mt-6 italic">
          Following these rules ensures that everyone enjoys a safe, respectful, and competitive
          environment in all college sports activities. Let’s play fair and grow together!
        </p>
      </section>

      {/* Events and Plans Section */}
      <section className="backdrop-blur-md bg-white/92 border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-10 mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold uppercase mb-6 flex items-center justify-center gap-2">
          <span className="text-amber-500">🏆</span> Exciting Events & Future Endeavors
        </h2>
        <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">
          MGM College has been the proud host of countless iconic sports events over the years. One of the standout moments was the prestigious Ranji Cricket Meet in 1978, held on the vast grounds of the A.L.N. Rao playgrounds. The event was not only a testament to the college’s rich sporting legacy but also a celebration of skill, camaraderie, and sportsmanship.
        </p>
        <p className="text-base sm:text-lg text-slate-700 mb-4 leading-relaxed">
          Looking ahead, MGM College is setting its sights on even greater achievements. A state-of-the-art stadium is currently under construction as part of the celebration for Dr. T.M.A. Pai’s centenary. This ambitious project is set to elevate MGM College’s status on the global sports map and will serve as a world-class venue for future sports events, competitions, and training camps.
        </p>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          With a focus on innovation and expansion, MGM College aims to host national and international sports championships in the near future, providing students with even more opportunities to shine. The vision is clear: to become a hub of excellence for sports and education, fostering the next generation of champions.
        </p>
      </section>

      {/* Sports Facilities Section */}
      <section className="backdrop-blur-md bg-white/92 border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-10 mt-12 max-w-5xl mx-auto text-center hover:-translate-y-1 transition-transform duration-300">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold uppercase mb-6 flex items-center justify-center gap-2">
          <span className="text-amber-500">🏟️</span> Sports Facilities
        </h2>
        <p className="text-base sm:text-lg text-slate-700 font-medium">
          The Physical Education Department has a variety of sports facilities for students:
        </p>
        <ul className="text-base sm:text-lg text-slate-700 space-y-2 mt-4 max-w-xl mx-auto text-left list-disc pl-6">
          <li>400m running track</li>
          <li>Football, Basketball, and Volleyball courts</li>
          <li>Cricket pitch</li>
          <li>Indoor Sports Complex (worth ~Rs. 2 crores, funded by UGC)</li>
          <li>3 Badminton courts (can also be used for Volleyball)</li>
          <li>2 gyms (separate for boys and girls)</li>
          <li>3 Table Tennis tables and Chess boards</li>
        </ul>
        <p className="mt-6 text-base sm:text-lg text-slate-600 font-medium">
          Yoga, Pranayama, and regular fitness checks help keep students healthy and disciplined.
        </p>
      </section>

      {/* Achievements Section */}
      <section className="backdrop-blur-md bg-white/92 border border-slate-200/80 rounded-2xl shadow-xl p-6 sm:p-10 mt-12 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-slate-900 font-bold uppercase mb-6 flex items-center justify-center gap-2">
          <span className="text-amber-500">🌟</span> Achievements
        </h2>
        <ul className="list-disc text-left mx-auto pl-6 text-base sm:text-lg text-slate-700 space-y-3 max-w-xl">
          <li><span className="font-semibold text-slate-900">Mr. M. G. S. Shetty</span> – Asian Games silver medalist (Bangkok)</li>
          <li><span className="font-semibold text-slate-900">K. Gopal & Gopal Kidiyoor</span> – National Javelin Champs</li>
          <li><span className="font-semibold text-slate-900">Mr. B. Madhava Shetty</span> – Mr. Mysore titleholder</li>
          <li><span className="font-semibold text-slate-900">Miss Jacqueline Priyadarshini</span> – Sprint Queen (1997-98)</li>
          <li><span className="font-semibold text-slate-900">Upcoming Cricket Stadium</span> – MGM's legacy in progress</li>
        </ul>
      </section>

      {/* Fixed Footer with Back to Top link */}
      <BackToTop />
      </div>
    </div>
  );
};

export default SportsPage;
