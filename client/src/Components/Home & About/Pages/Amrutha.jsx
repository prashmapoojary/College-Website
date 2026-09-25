const OldBlk = "/oldblck.jpg";

const AmruthaMahotsava = () => {
  return (
    <section className="college-page-container px-4 py-12 font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto college-glass-card p-6 md:p-10 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-5 px-6 rounded-2xl shadow-xl border-y border-amber-500/40 tracking-wider uppercase mb-6">
            🎉 Amrutha Mahotsava – 75 Years of Excellence
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium">
            MGM College Udupi celebrated its 75th anniversary with a grand three-day event blending cultural heritage, academic achievement, and community spirit. From vibrant processions and Yakshagana performances to exhibitions and keynote addresses, the Amrutha Mahotsava honored the institution’s legacy of nurturing talent and shaping futures.
          </p>
        </div>

        {/* YouTube Streams Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center tracking-wide border-b-2 border-amber-500 pb-2 inline-block mx-auto">
            🎥 Watch the Celebration Streams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Day 1 – Inauguration & Exhibition', url: 'https://www.youtube.com/embed/jHsbp_e_lrs' },
              { title: 'Day 2 – Cultural Parade & Symposium', url: 'https://www.youtube.com/embed/ed6Nuhi-MA4' },
              { title: 'Day 2 – Evening Performances (Part 2)', url: 'https://www.youtube.com/embed/S8c_KSl5uts' },
              { title: 'Day 3 – Felicitations & Closing Ceremony', url: 'https://www.youtube.com/embed/824Aao8JCZ8' },
            ].map((stream, idx) => (
              <div
                key={idx}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-slate-200 hover:border-amber-500 transition duration-300 hover:scale-[1.02]"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-wide">
                  {stream.title}
                </h3>
                <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={stream.url}
                    title={stream.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>

          {/* Visit Channel Button */}
          <div className="mt-12 text-center">
            <a
              href="https://www.youtube.com/@MGM.Journalism"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition duration-300 tracking-wider text-sm sm:text-base uppercase"
            >
              Visit MGM Journalism YouTube Channel
            </a>
            <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium">
              The MGM Journalism channel documents campus events, student creativity, and academic milestones — including full coverage of the Amrutha Mahotsava celebrations.
            </p>
          </div>
        </div>

        {/* Instagram Section */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 border border-slate-200 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram Logo"
              className="w-8 h-8"
            />
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-wide">
              Instagram Highlights
            </h2>
          </div>
          <p className="text-base text-slate-600 mb-8 font-medium max-w-xl mx-auto">
            Explore behind-the-scenes moments, student performances, and cultural glimpses from the celebration.
          </p>

          {/* Instagram Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              'https://www.instagram.com/reel/DCWRVUjRuHW/',
              'https://www.instagram.com/reel/DCURnHHRzvu/',
              'https://www.instagram.com/p/DCWvPG5twDQ/',
              'https://www.instagram.com/reel/DCmbY1Lu0wu/',
            ].map((link, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-2xl overflow-hidden shadow-md border border-slate-200"
              >
                <iframe
                  src={`${link}embed`}
                  className="w-full h-full"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title={`Instagram Preview ${idx + 1}`}
                ></iframe>
              </div>
            ))}
          </div>

          {/* Centered Button */}
          <div className="text-center">
            <a
              href="https://www.instagram.com/mgm_journalism_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold py-3 px-8 rounded-full transition duration-300 tracking-wider shadow-lg bg-gradient-to-r from-[#833AB4] via-[#C13584] to-[#F77737] hover:opacity-90 text-sm sm:text-base uppercase"
            >
              View Full Gallery on Instagram
            </a>
          </div>
        </div>

        {/* Footer Placeholder */}
        <div className="text-center mt-8">
          <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-wide">
            More Memories Coming Soon
          </h3>
          <p className="text-sm text-slate-600 font-medium">
            Stay tuned for photo galleries, student interviews, and press coverage from the Amrutha Mahotsava.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmruthaMahotsava;