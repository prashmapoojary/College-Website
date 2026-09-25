import React, { useState } from "react";

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const cards = [
    {
      id: 1,
      category: "campus",
      title: "MGM Main Heritage Block",
      heading: "Heritage Administrative Block",
      description: "Iconic colonial-era architecture founded in 1949.",
      img: "/assets/FacultyCampus/Old.jpg",
    },
    {
      id: 2,
      category: "campus",
      title: "New Golden Jubilee Building",
      heading: "New Academic Complex",
      description: "State-of-the-art classrooms and auditoriums.",
      img: "/assets/FacultyCampus/NewBuild.jpg",
    },
    {
      id: 3,
      category: "labs",
      title: "Physics & Chemistry Labs",
      heading: "Science Research Laboratories",
      description: "Equipped with modern apparatus for scientific experimentation.",
      img: "/assets/Activities/Facilities/lab1.jpg",
    },
    {
      id: 4,
      category: "labs",
      title: "Computer Center",
      heading: "High-Tech Computer Science Lab",
      description: "250+ networked systems with high-speed internet connectivity.",
      img: "/assets/Activities/Facilities/cls2.jpg",
    },
    {
      id: 5,
      category: "sports",
      title: "Sports & Athletics Meet",
      heading: "Annual Inter-Collegiate Athletics",
      description: "Students demonstrating athletic excellence on the college grounds.",
      img: "/assets/Activities/Sports/A1.jpeg",
    },
    {
      id: 6,
      category: "sports",
      title: "Indoor Sports Complex",
      heading: "Badminton & Table Tennis Courts",
      description: "UGC-supported modern multi-court indoor stadium.",
      img: "/assets/Activities/Sports/A2.jpeg",
    },
    {
      id: 7,
      category: "events",
      title: "Audio-Visual Hall Sessions",
      heading: "Seminars and Guest Lectures",
      description: "Interactive seminars and cultural symposiums in the AV Hall.",
      img: "/assets/Activities/Facilities/cls3.jpg",
    },
    {
      id: 8,
      category: "campus",
      title: "Botanical Garden",
      heading: "Lush Green Campus Biosphere",
      description: "Extensive collection of medicinal, rare, and tropical flora.",
      img: "/assets/FacultyCampus/bot1.jpg",
    },
    {
      id: 9,
      category: "campus",
      title: "Central Library",
      heading: "Academic Resource Center",
      description: "Over 100,000 volumes, journals, and dedicated reading zones.",
      img: "/assets/Activities/Facilities/libr1.jpg",
    },
  ];

  // Filter + Search
  const visibleCards = cards.filter((c) => {
    const matchCat = filter === "all" || c.category === filter;
    const hay = `${c.title} ${c.heading} ${c.description}`.toLowerCase();
    const matchSearch = search === "" || hay.includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Stats
  const stats = {
    total: cards.length,
    events: cards.filter((c) => c.category === "events").length,
    faculty: cards.filter((c) => c.category === "faculty").length,
    campus: cards.filter((c) => c.category === "campus").length,
    labs: cards.filter((c) => c.category === "labs").length,
    sports: cards.filter((c) => c.category === "sports").length,
    amrutha: cards.filter((c) => c.category === "amrutha").length,
  };

  return (
    <div className="college-page-container min-h-screen text-slate-900 pb-12">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-amber-500/30 shadow-xl text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-wide uppercase">
                📸 College Image Gallery
              </h1>
              <p className="text-sm text-slate-300 font-medium">
                Browse photos by category. Click any image to view larger.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full md:w-auto">
              <input
                type="search"
                placeholder="Search (e.g., labs, fest, football)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full md:w-80 px-4 py-2 rounded-full border border-slate-700 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
              />
              <button
                onClick={() => setSearch("")}
                className="shrink-0 px-4 py-2 rounded-full border border-amber-500/40 text-amber-400 hover:bg-amber-500 hover:text-slate-950 text-sm font-semibold transition"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Filters */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {[
              "all",
              "events",
              "faculty",
              "campus",
              "labs",
              "sports",
              "amrutha",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold border transition ${
                  filter === cat
                    ? "bg-amber-500 text-slate-950 border-amber-400 shadow-md"
                    : "bg-slate-800 text-slate-200 border-slate-700 hover:border-amber-500"
                }`}
              >
                {cat === "all"
                  ? "All"
                  : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Stats Counters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {[
          { label: "Total", val: stats.total },
          { label: "Events", val: stats.events },
          { label: "Faculty", val: stats.faculty },
          { label: "Campus", val: stats.campus },
          { label: "Labs", val: stats.labs },
          { label: "Sports", val: stats.sports },
        ].map((item, i) => (
          <div key={i} className="p-4 text-center bg-white/95 rounded-xl border border-slate-200 shadow-md">
            <p className="text-xl font-extrabold text-amber-600">{item.val}</p>
            <p className="text-xs sm:text-sm text-slate-700 font-semibold">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Gallery */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleCards.length === 0 && (
            <div className="col-span-full text-center py-16 bg-white/90 rounded-2xl border border-slate-200 p-8">
              <p className="text-lg font-bold text-slate-800">
                No images match your filters.
              </p>
              <p className="text-sm text-slate-600 mt-1">
                Try clearing search or choose a different category.
              </p>
            </div>
          )}

          {visibleCards.map((card) => (
            <article
              key={card.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white/95 shadow-lg hover:shadow-2xl transition duration-300 hover:border-amber-500"
            >
              <figure className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </figure>
              <div className="p-5">
                <span className="inline-flex rounded-full bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 capitalize mb-2">
                  {card.category}
                </span>
                <h3 className="font-bold text-slate-900 text-lg">{card.heading}</h3>
                <p className="text-sm text-slate-600 mt-1">{card.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
