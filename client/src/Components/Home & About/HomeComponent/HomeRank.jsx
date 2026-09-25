import React from 'react';

const pallavi = "/assets/HomeAbout/Rankimg/pallavi.jpg";
const sushmitha = "/assets/HomeAbout/Rankimg/sushmitha.jpg";
const vasudha = "/assets/HomeAbout/Rankimg/vasudha.jpg";
const vinay = "/assets/HomeAbout/Rankimg/vinay.jpg";
const ria = "/assets/HomeAbout/Rankimg/ria.jpg";
const rakshita = "/assets/HomeAbout/Rankimg/rakshita.jpg";

const HomeRank = () => {
  const achievers = [
    { id: 1, name: 'Pallavi Kodagu', class: 'B.A.(E)(H)', rank: 'IV', image: pallavi },
    { id: 2, name: 'Sushmitha U G', class: 'B.Com.(Voc)', rank: 'VII', image: sushmitha },
    { id: 3, name: 'Vasudha Kamath', class: 'B.Sc.(Z)', rank: 'VI', image: vasudha },
    { id: 4, name: 'Vinay Kumar', class: 'B.A.(E)(H)', rank: 'X', image: vinay },
    { id: 5, name: 'Ria Lobo', class: 'B.A.(E)(H)', rank: 'IX', image: ria },
    { id: 6, name: 'Rakshitha Rajaram', class: 'B.Sc.(BZ)', rank: 'X', image: rakshita },
  ];

  const handleImgError = (event) => {
    event.currentTarget.src =
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="180" viewBox="0 0 160 180">
          <rect width="160" height="180" fill="#f0f0f0"/>
          <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#999" font-family="Arial, sans-serif" font-size="10">No Image</text>
        </svg>`
      );
  };

  return (
    <section className="bg-slate-900/85 backdrop-blur-md py-12 px-5 font-[Poppins] border-t border-b border-amber-500/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[32px] sm:text-[36px] font-extrabold text-amber-300 border-b-[3px] border-amber-500 pb-2 mb-2 tracking-wide inline-block">
            MGM Rank Holders – 2024
          </h2>
          <p className="text-[18px] sm:text-[20px] text-amber-400 font-bold mt-2">
            CONGRATULATIONS TO THE RANK HOLDERS!!
          </p>
          <p className="text-[16px] sm:text-[18px] text-slate-200 font-medium mt-1">
            We proudly celebrate the exceptional academic accomplishments of our rank holders.
          </p>
          <p className="text-[15px] sm:text-[16px] text-slate-300 font-normal mt-1">
            Their dedication, discipline, and pursuit of excellence reflect the true spirit of MGM.
          </p>
        </div>

        {/* Scrollable Achievers Section */}
        <div className="flex flex-nowrap justify-start gap-5 mt-8 overflow-x-auto p-4 scroll-smooth scrollbar-thin scrollbar-thumb-amber-600 scrollbar-track-transparent bg-slate-950/60 border border-amber-500/20 rounded-2xl shadow-xl">
          {achievers.map((person) => (
            <article
              key={person.id}
              className="w-[220px] min-h-[300px] bg-white/95 border border-slate-200 rounded-[15px] p-5 text-center flex flex-col items-center justify-start shrink-0 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl hover:border-amber-500"
            >
              <img
                className="block w-full h-[190px] object-cover object-top rounded-[10px] mb-3 shadow"
                src={person.image}
                alt={`${person.name} - ${person.rank}`}
                onError={handleImgError}
              />
              <h3 className="mt-2 mb-1 text-[18px] font-extrabold text-slate-900 uppercase tracking-wide leading-[1.3]">
                {person.name}
              </h3>
              <p className="my-1 text-[13px] font-medium text-slate-600 leading-[1.2]">
                {person.class}
              </p>
              <p className="text-[15px] font-bold text-amber-600">
                {person.rank}
              </p>
            </article>
          ))}
        </div>

        {/* Archive Button */}
        <div className="mt-10 text-center">
          <a
            href="/ranklist"
            className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 tracking-wide uppercase text-sm"
          >
            View Rank Holders from Previous Years
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeRank;