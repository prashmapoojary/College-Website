import React from 'react';
const Vanitha = "/assets/HomeAbout/Vanitha.gif";
const OldBlk = "/oldblck.jpg";

function App() {
  return (
    <div className="college-page-container flex items-center justify-center p-4 sm:p-6 py-10">
      <div className="w-full max-w-5xl college-glass-card p-6 sm:p-8 shadow-2xl">
        <header className="flex justify-center items-center mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 text-center tracking-wide">
            Principal's Welcome
          </h1>
        </header>

        {/* Title Bar */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-lg md:text-xl font-bold text-center py-3 rounded-t-xl shadow-md border-y border-amber-500/40 mb-6 tracking-wider uppercase">
          Message from Principal
        </div>

        {/* Content Area */}
        <div className="bg-white/95 rounded-xl p-6 sm:p-8 border border-slate-200 shadow-lg">
          {/* Text and Image Side-by-Side */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Text Content */}
            <div className="flex-1 space-y-4 text-justify text-slate-700 leading-relaxed font-normal">
              <p>
                We are all proud of our - Mahatma Gandhi Memorial College. Our college makes one of the recognizable landmarks, located near the Lord Krishna temple of Udupi.
              </p>
              <p>
                We are creating responsible and educated students and equipping them with necessary skills to tackle the needs of today's career and life.
                I welcome your interest in MGM College and hope you will find the courses suitably matching your aptitude, aspirations and the goals of your life.
              </p>
              <p>
                Our College is a great place to learn. Our teaching staff are energetic, enthusiastic and passionate in what they teach.
                We have eminent local personalities and countless accomplished personalities spread far and wide in the globe and you might hear many of them call M.G.M their ‘Alma Mater’.
                And most of all, our teachers are optimistic about the future of India, that is… YOU.
                They see great artists, creative minds, technocrats sprouting in you.
                We have a highly skilled and professional team of staff waiting to guide and support you through your learning experience at college.
                We, at MGM strongly believe that the only constant thing about life is ‘change’.
                And we offer courses to meet the ever-changing needs of the society from creative social sciences to fundamental sciences and applied sciences.
                We never tire in improving ourselves, for we believe that he who thinks that the improvement is complete stagnates himself.
                In MGM, students are helped to focus on confidence building, while nurturing a strong sense of social and environmental responsibility through academic and co-curricular activities.
              </p>
              <p className="font-semibold text-slate-900">I look forward to welcome you to the college in the near future.</p>
              <p className="text-slate-800 font-medium">Thanking you</p>
              <p className="text-slate-800 font-medium">Yours Sincerely</p>
              <p className="font-bold text-amber-700 text-lg">
                Prof. Vanitha Maiya<br />
                <span className="text-slate-600 text-sm font-semibold">(Principal)</span>
              </p>
            </div>

            {/* Principal Image */}
            <div className="mt-6 md:mt-0 shrink-0 flex justify-center">
              <img
                src={Vanitha}
                alt="Principal Vanitha"
                className="w-48 md:w-56 h-auto rounded-xl shadow-xl border-2 border-amber-500/40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;