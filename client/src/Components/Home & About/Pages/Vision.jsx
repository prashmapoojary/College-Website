import React from 'react';
const OldBlk = "/oldblck.jpg";
function App() {
  return (
    <div className="college-page-container">
      {/* Content container */}
      <div className="px-4 sm:px-6 py-10 md:px-16 lg:px-28 bg-slate-900/40 backdrop-blur-[2px] text-slate-800 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Vision Section */}
          <section className="mb-12">
            <h2 className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-2xl sm:text-3xl font-bold py-3 text-center w-full rounded-lg shadow-lg border-y border-amber-500/40 tracking-wider uppercase mb-6">
              Our Vision
            </h2>
            <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 border border-slate-200 border-l-4 border-l-amber-500 mb-6">
              <ul className="list-disc list-inside space-y-2 text-slate-800 font-medium">
                <li>Endowed with the spirit of enquiry</li>
                <li>Eager to acquire knowledge and skills</li>
                <li>Competent to be employed in his/her field</li>
                <li>Possessing qualities of leadership, responsible to family, society and nation</li>
                <li>Capable of appreciating aesthetics and understanding our cultural heritage and rational and humane in attitude</li>
              </ul>
            </div>
            <div className="bg-amber-50/95 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-md">
              <h3 className="font-bold text-amber-900 mb-2 text-lg">Vision Statement</h3>
              <p className="italic text-slate-700">
                "To be the leading institution of higher learning, fostering innovation, excellence, and global citizenship while preparing students for the challenges of tomorrow."
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-12">
            <h2 className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-2xl sm:text-3xl font-bold py-3 text-center w-full rounded-lg shadow-lg border-y border-amber-500/40 tracking-wider uppercase mb-6">
              Our Mission
            </h2>
            <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 border border-slate-200 border-l-4 border-l-amber-500 mb-6">
              <ul className="list-disc list-inside space-y-2 text-slate-800 font-medium">
                <li>To provide students with quality education using innovative and humane methods of teaching and learning</li>
                <li>To develop in them competence for employment as well as entrepreneurship</li>
                <li>To organize activities that will contribute to the understanding of their responsibilities to the family, the society and the nation</li>
                <li>To promote national integration through cordial relationships</li>
              </ul>
            </div>
            <div className="bg-amber-50/95 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-md">
              <h3 className="font-bold text-amber-900 mb-2 text-lg">Mission Statement</h3>
              <p className="italic text-slate-700">
                The vision of our founder Dr. T.M.A. Pai was "to take education to the doorsteps of the people in and around Udupi." The lamp lit by him has lit hundreds of lamps. The college believes in the words of the Mahatma – 
                "The end of all knowledge must be building up of character".
              </p>
            </div>
          </section>

          {/* Objectives Section */}
          <section className="mb-12">
            <h2 className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 text-2xl sm:text-3xl font-bold py-3 text-center w-full rounded-lg shadow-lg border-y border-amber-500/40 tracking-wider uppercase mb-6">
              Our Objectives
            </h2>
            <div className="mb-8 bg-amber-50/95 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-md">
              <p className="text-slate-800 text-center font-medium">
                Provide quality education through innovative methods, develop student competence for employment and entrepreneurship, foster thinking and creativity, and promote social responsibility.
              </p>
            </div>

            {/* Objective Cards */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 border border-slate-200 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-amber-600">1.</span> Character Building
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">To foster holistic development by:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                  <li>Instilling integrity and ethical responsibility</li>
                  <li>Cultivating empathy and community service</li>
                  <li>Building resilience and self-discipline</li>
                </ul>
              </div>

              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 border border-slate-200 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-amber-600">2.</span> Excellence in Teaching-Learning
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">Ensuring high standards by:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                  <li>Innovative teaching methodologies</li>
                  <li>Continuous faculty development</li>
                  <li>Integrating technology and research</li>
                </ul>
              </div>

              <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-xl p-6 border border-slate-200 border-l-4 border-l-amber-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <span className="text-amber-600">3.</span> Employability / Entrepreneurship
                </h3>
                <p className="text-slate-600 leading-relaxed mb-3">Enhancing competence through:</p>
                <ul className="list-disc list-inside space-y-2 text-slate-700 font-medium">
                  <li>Hands-on learning and industry exposure</li>
                  <li>Diverse cultural and collaborative projects</li>
                  <li>Mentorship and incubation support</li>
                </ul>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-8 bg-amber-50/95 border-l-4 border-amber-500 p-5 rounded-r-xl shadow-md">
              <h3 className="font-bold text-amber-900 mb-2 text-lg">Commitment to Excellence</h3>
              <p className="italic text-slate-700">
                "These objectives guide our strategic planning. We are committed to excellence with integrity in all we do."
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
