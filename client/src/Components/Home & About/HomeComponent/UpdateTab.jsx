import React from 'react';
import Announcement from '../UpdateComp/Announcement.jsx';
import LatestNews from '../UpdateComp/LatestNews.jsx';
import UpcomingEvents from '../UpdateComp/UpcomingEvents.jsx';

const Updatetab = () => {
  return (
    <div
      id="update-tab-section"
      className="bg-slate-900/80 backdrop-blur-md px-5 py-12 font-sans border-t border-b border-amber-500/30"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-amber-100 mb-10 drop-shadow-md">
          <span className="border-b-2 border-amber-500 pb-2">MGM College Updates</span>
        </h1>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

          {/* 🎓 Announcement card */}
          <div className="bg-white/95 text-slate-900 rounded-xl shadow-xl p-5 flex flex-col h-full border border-slate-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-amber-500/30">
            <Announcement />
          </div>

          {/* 📰 Latest News card */}
          <div className="bg-white/95 text-slate-900 rounded-xl shadow-xl p-5 flex flex-col h-full border border-slate-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-amber-500/30">
            <LatestNews />
          </div>

          {/* 🎉 Upcoming Events card */}
          <div className="bg-white/95 text-slate-900 rounded-xl shadow-xl p-5 flex flex-col h-full border border-slate-200 backdrop-blur-md hover:shadow-2xl hover:scale-[1.02] transition duration-300 ring-1 ring-amber-500/30">
            <UpcomingEvents />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Updatetab;