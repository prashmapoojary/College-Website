import React from 'react';

const banner = "/assets/Activities/Facilities/libr Banner.jpg";
const libr1 = "/assets/Activities/Facilities/libr1.jpg";
const libr2 = "/assets/Activities/Facilities/libr2.jpg";

// import libr3 from '../../assets/Facilities-Thejas/libr3.jpg';

const galleryCards = [
  { img: libr1 },
  { img: libr2 },
  // { img: libr3 },
];

const Library = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Library Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            Library
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            A key academic resource fostering learning and research
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Content Card with Glass Effect */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
          The <b className="text-slate-900">Library of MGM College</b> is one of the key learning resources on campus. Spanning an area of about <b className="text-slate-900">13,037 sq. ft. (carpet area),</b> it is housed in a separate and spacious building designed to provide a peaceful environment for study and research.
        </p>

        {/* Collection */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Collection</h2>
          <p className="text-slate-700 leading-relaxed">
            The library maintains a rich collection of textbooks, reference materials, journals, periodicals, and newspapers catering to both PU and Degree courses. The collection is updated from time to time to meet the academic needs of students and faculty.
          </p>
        </section>

        {/* Facilities */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Facilities</h2>
          <p className="text-slate-700 leading-relaxed">
            The library offers well-furnished reading halls with ample seating capacity for students and staff. Separate sections are maintained for textbooks, reference books, and periodicals, making it convenient for students to locate resources. The calm and studious atmosphere of the library encourages effective learning and concentration.
          </p>
        </section>

        {/* Role in Academics */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Role in Academics</h2>
          <p className="text-slate-700 leading-relaxed">
            Serving as the academic hub of the college, the library supports students in their curriculum, assignments, project work, and exam preparation. With its extensive collection and quiet setting, it continues to promote reading habits, self-study, and research-oriented learning.
          </p>
        </section>
      </div>

      {/* Bottom Images with dynamic alignment based on count */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-6 ${
          galleryCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : galleryCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-10 mb-6`}
      >
        {galleryCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full"
          >
            <img
              src={card.img}
              alt={`Library Image ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
