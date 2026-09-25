// Image imports from public/assets/HomeAbout/TrustImg
const ballal = "/assets/HomeAbout/TrustImg/ballal.jpg";
const satish = "/assets/HomeAbout/TrustImg/satish.jpg";
const narayana = "/assets/HomeAbout/TrustImg/narayana.jpg";
const ranjan = "/assets/HomeAbout/TrustImg/ranjan.jpg";
const shailaja = "/assets/HomeAbout/TrustImg/shailaja.jpg";
const vanitha = "/assets/HomeAbout/TrustImg/vanitha.jpg";
const vasanth = "/assets/HomeAbout/TrustImg/vasanth.jpg";
const vasu = "/assets/HomeAbout/TrustImg/vasu.jpg";
const Venkatesh = "/assets/HomeAbout/TrustImg/Venkatesh.jpg";
const vp = "/assets/HomeAbout/TrustImg/vp.jpg";

const oldblck = "/oldblck.jpg";

const DemoPage = () => {
    const admins = [
        { name: "Sri T. Satish U Pai", title: "President", image: satish },
        { name: "Dr. Narayana Sabhahit", title: "Member", image: narayana },
        { name: "Dr. Ranjan R Pai", title: "Member", image: ranjan },
        { name: "Mr. H. S. Ballal", title: "Member", image: ballal },
        { name: "Lt. Gen. (Dr) M.D. Venkatesh", title: "Member", image: Venkatesh },
        { name: "Prof. Vanitha Maiya", title: "Principal/Secretary", image: vanitha },
    ];

    const collegeCouncil = [
        { name: 'Prof. Vanitha Maiya', qual: 'M.Com', image: vanitha },
        { name: 'Mrs. Shailaja H', qual: 'M.Phil., M.Sc.', image: shailaja },
        { name: 'Dr. Vasumathi Bhat', qual: 'M.A., Ph.D', image: vasu },
        { name: 'Dr. Vishwanath Pai', qual: 'B.E (C.S.), CNE, M.Sc. (IT), M.Phil., Ph.D.', image: vp },
        { name: 'Dr. Puthi Vasanth Kumar', qual: 'M.A., M.Phil., Ph.D.', image: vasanth },
    ];

    return (
        <section className="college-page-container py-12 px-4">
            {/* Content Container */}
            <div className="relative z-10 max-w-6xl mx-auto college-glass-card p-6 md:p-10 space-y-10">
                {/* Committee Text */}
                <div className="text-center space-y-4">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-slate-950 via-slate-800 to-slate-950 text-amber-400 py-4 px-6 rounded-xl shadow-xl border-y border-amber-500/40 tracking-wider uppercase">
                        🏛️ M.G.M. Management Committee
                    </h1>
                    <div className="text-base leading-relaxed max-w-3xl mx-auto text-slate-700 font-medium">
                        <p>
                            The Mahatma Gandhi Memorial College is sponsored and administered by the Academy of General Education, Manipal.
                        </p>
                        <p className="mt-2">
                            The management of the College is vested in the Mahatma Gandhi College Trust, a registered body, having full control over the affairs of the institution.
                        </p>
                    </div>
                    
                    <div className="border-t border-amber-500/40 my-8"></div>
                </div>

                {/* Reusable Card Section */}
                {[
                    { title: "College Trust", data: admins, isCouncil: false },
                    { title: "Governing Council", data: admins, isCouncil: false },
                    { title: "College Council", data: collegeCouncil, isCouncil: true },
                ].map((section, idx) => (
                    <div key={idx} className="bg-slate-900/5 p-6 rounded-2xl border border-slate-200">
                        <h2 className="text-2xl font-bold text-center mb-6 text-slate-900 border-b-2 border-amber-500 pb-2 inline-block mx-auto">
                            {section.title}
                        </h2>
                        <div className="relative overflow-x-auto whitespace-nowrap py-4">
                            <div className="relative z-10 flex space-x-6 px-2">
                                {section.data.map((person, index) => (
                                    <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg transform transition-transform duration-300 hover:scale-105 w-[320px] flex-shrink-0 border border-slate-200 hover:border-amber-500">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="mx-auto w-32 h-32 object-cover rounded-full border-4 border-amber-400 shadow-md"
                                        />
                                        <h3 className="text-lg font-bold text-slate-900 mt-4 whitespace-normal">{person.name}</h3>
                                        <p className="text-sm font-semibold text-amber-600 mt-1 whitespace-normal">
                                            {section.isCouncil ? person.qual : person.title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DemoPage;