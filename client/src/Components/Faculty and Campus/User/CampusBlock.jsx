import React from "react";

export default function Block() {
  const blocksData = [
    {
      name: "Madhava Raksha",
      description: [
        "The administrative block was inaugurated by Dr. Murali Manohar Joshi on 30th April, 1998.",
        "The Principal's chamber, Vice principal's chamber, Conference hall, Administrative office, NSS office, Student counsellor's office, Faculty room and Cooperative society are all located in this block.",
      ],
    },
    {
      name: "Nuthana Ravindra Mantapa",
      description: [
        "Was inaugurated by Sri. Damu Javeri on 4th February, 1992.",
        "This auditorium is well furnished and can accommodate around 450 people.",
        "The hall is fully air-conditioned, providing a comfortable environment for all events and gatherings.",
      ],
    },
    {
      name: "Old Administrative Block",
      description: [
        'The Old Administrative Block has two wings - The "Anantha Baliga Memorial Hall" and the "Silver Jubilee Memorial Hall".',
        "The Karnataka State Open University office is situated in this block.",
      ],
    },
    {
      name: "Vikramashila",
      description: [
        "Was inaugurated by Sri. A R Badarinarayana (the then Mysore State Education Minister).",
      ],
    },
    { name: "Vajrasoudha", description: ["Computer Science Block"] },
    {
      name: "Indoor Stadium",
      description: [
        "Full-fledged indoor sports complex consists of 3 Badminton courts, 2 gyms, 3 Table Tennis and Chess Board facilities.",
      ],
    },
    {
      name: "Parvathi Nilaya",
      description: ["The ladies retiring room was inaugurated in 1975."],
    },
    {
      name: "Gitanjali",
      description: [
        "(House of Culture) acts as a conference hall for the RRC.",
      ],
    },
    { name: "Muddana Mantapa", description: ["Open Air Theatre"] },
    {
      name: "Madhava Pai Vijnana Mandir",
      description: ["Was inaugurated by H A B Parpia in 1961."],
    },
    {
      name: "Gurukula",
      description: [
        "The college provides quarters facilities for the teaching and the non-teaching staff.",
        "There are 34 staff quarters in the college campus.",
      ],
    },
    {
      name: "Rashtrakavi Govind Pai Samshodhana Kendra (Sister Institution)",
      description: [
        "Was inaugurated by Sri D V Arasu (Vice Chancellor, Mysore University) in 1976.",
      ],
    },
    {
      name: "Nalanda (Sister Institution)",
      description: [
        "Was inaugurated by Sri K Sooryanarayana Adiga ( Dir. of Karnataka Bank Ltd. ) on 14th August, 1980.",
        "A full fledged bank(Syndicate Bank Branch) and not an extension as in many other colleges operates in the ground floor of Nalanda.",
      ],
    },
    {
      name: "Kamalaksha-Gurubhavana (Sister Institution)",
      description: ["5 Apartments and a Yakshagana Museum"],
    },
  ];

  const marqueeImages = [
    "/assets/FacultyCampus/NewBuild.jpg",
    "/assets/FacultyCampus/Madava.jpg",
    "/assets/FacultyCampus/Vijnana.jpg",
    "/assets/FacultyCampus/Old.jpg",
    "/assets/FacultyCampus/Vajra.jpg",
    "/assets/FacultyCampus/Indoor.jpg",
    "/assets/FacultyCampus/Ind.jpg",
    "/assets/FacultyCampus/Vikrama.jpg",
  ];

  return (
    <div className="college-page-container py-8 px-4 font-sans">
      <div className="max-w-6xl mx-auto p-6 md:p-8 college-glass-card relative">
        {/* Marquee */}
        <div className="relative overflow-hidden w-full h-72 mx-auto mb-10 rounded-2xl shadow-md border border-slate-200">
          <div className="flex animate-scroll w-max gap-4 hover:[animation-play-state:paused]">
            {marqueeImages.concat(marqueeImages).map((img, i) => (
              <div className="flex-none mr-4" key={i}>
                <img
                  src={img}
                  alt={`Campus Block ${i + 1}`}
                  className="w-[380px] h-72 object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-amber-400 shadow-xl rounded-2xl py-5 px-8 mb-10 bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 border-y border-amber-500/40 tracking-wider uppercase">
          🏛️ Campus Blocks
        </h2>

        {/* Grid of Blocks */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
          {blocksData.map((block, index) => (
            <div
              key={index}
              className="bg-white/95 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1.5 transition duration-300 border border-slate-200 hover:border-amber-500 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 p-4 text-amber-400 border-b border-amber-500/30">
                <h3 className="text-lg font-bold">{block.name}</h3>
              </div>
              <div className="p-5">
                <ul className="list-disc list-inside text-slate-700 space-y-2 text-sm leading-relaxed font-medium">
                  {block.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
