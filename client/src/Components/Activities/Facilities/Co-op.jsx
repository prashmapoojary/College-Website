import React from 'react';

const banner = "/assets/Activities/Facilities/co-op banner.webp";
const coOp1 = "/assets/Activities/Facilities/co-op1.jpg";
const coOp2 = "/assets/Activities/Facilities/co-op2.jpg";
// import coOp3 from '../../assets/Facilities-Thejas/co-op.jpg';

const coopCards = [
  { img: coOp1 },
  { img: coOp2 },
  // { img: coOp3 },
];

const CoOpStore = () => {
  return (
    <div className="py-6">
      {/* Top Banner */}
      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-amber-500/30 mb-8">
        <img
          src={banner}
          alt="Co-operative Store Banner"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/60 to-slate-950/80 flex flex-col justify-center px-8 md:px-12">
          <h1 className="text-amber-400 text-3xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
            MGM Students’ Co-operative Store
          </h1>
          <p className="text-slate-200 text-base md:text-xl font-medium italic opacity-95">
            Supporting students with affordable academic essentials since 1952
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full opacity-70"></div>

      {/* Info Section with Glassmorphism */}
      <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white/92 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200/80">
        <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed">
          The <i className="font-semibold text-slate-900">MGM Students’ Co-operative Store</i> was registered as a Co-operative Society in <b className="text-slate-900">June 1952</b> and has since been an integral part of campus life. The store was established with the aim of providing essential academic materials to students at competitive rates, making education more affordable and accessible.
        </p>

        {/* Membership */}
        <section className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Membership</h2>
          <p className="text-slate-700 leading-relaxed">
            All students of the college are considered Associative Members or Shareholders of the store, which makes it a student-owned initiative. By being a part of this co-operative system, students contribute to its smooth functioning and benefit directly from its services.
          </p>
        </section>

        {/* Facilities and Services */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Facilities and Services</h2>
          <p className="text-slate-700 leading-relaxed">
            The store supplies all the textbooks, stationery, and academic essentials required by students throughout the year. It also keeps other necessary articles for daily student use. Students are encouraged to make their purchases from the store to ensure quality products at reasonable prices.
          </p>
        </section>

        {/* Social Commitment */}
        <section className="mb-6 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Social Commitment</h2>
          <p className="text-slate-700 leading-relaxed">
            One of the unique features of the Co-operative Store is its social responsibility. The profits generated are not retained for business but are distributed as scholarships to deserving and needy students, making it a noble initiative that supports education and inclusivity.
          </p>
        </section>

        {/* Management */}
        <section className="mb-2 pt-4 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 border-b border-amber-500/30 pb-2">Management</h2>
          <p className="text-slate-700 leading-relaxed">
            The store is efficiently managed under the supervision of <b className="text-slate-900">Mr. Anil Kumar B., M.Com., Lecturer, Honourary Secretary</b> and <b className="text-slate-900">Mr. B. Udaya, Sales Clerk,</b> who ensure the smooth day-to-day functioning of the store.
          </p>
        </section>
      </div>

      {/* Bottom CoOp Image Cards with dynamic alignment */}
      <div
        className={`max-w-5xl mx-auto px-4 grid gap-6 ${
          coopCards.length === 1
            ? "grid-cols-1 justify-items-center"
            : coopCards.length === 2
            ? "grid-cols-2 justify-items-center"
            : "grid-cols-1 md:grid-cols-3"
        } mt-10 mb-6`}
      >
        {coopCards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 border-2 border-amber-500/30 max-w-xs w-full"
          >
            <img
              src={card.img}
              alt={`Co-op Image ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoOpStore;
