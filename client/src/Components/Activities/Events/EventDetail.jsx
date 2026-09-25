// src/Events-karthikRaj/EventDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const Cluster2k25Img = "/assets/Activities/Events/events/Cluster2k25.JPG";
const Elixir2K25Img = "/assets/Activities/Events/events/Elixir2K25.JPG";
const MBCAsessionImg = "/assets/Activities/Events/events/Evening-BCA-Session.JPG";
const galleryImg = "/assets/Activities/Events/events/gallery.jpg";
const EBCAsessionImg = "/assets/Activities/Events/events/Morning-BCA-Session.JPG";
const IOSnativeImg = "/assets/Activities/Events/events/ios&native.png";
const talkImg = "/assets/Activities/Events/events/talk.jpg";
const amruthamahotsavaImg = "/assets/Activities/Events/events/amruthamahotsava.jpg";
const Spectrum2k24Img = "/assets/Activities/Events/events/Spectrum2K24.JPG";
const RaniAbbakkaProgramImg = "/assets/Activities/Events/events/Rani-Abbakka-Program.jpg";

const eventList = [
  {
    title: "Cluster 2k25.",
    date: "Jul 26, 2025",
    time: "1:00pm-2:30pm",
    desc: "Cluster 2k25.",
    image: Cluster2k25Img,
    type: "Talk",
    location: "A.V Hall",
  },
  {
    title: "An initiative dedicated to honoring & promoting history & legacy of a legendary queen & freedom fighter from Karnataka",
    date: "Aug 3 – Sep 3, 2025",
    time: "1:00pm-3:00pm",
    desc: "Small talk about Rani Abbakka.",
    image: RaniAbbakkaProgramImg,
    type: "History",
    location: "A.V Hall",
  },
  {
    title: "PG session for UG Evening BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "3:00pm-5:30pm",
    desc: "About MSc Computer Science.",
    image: EBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Apr 9, 2025",
    time: "1:00pm-2:30pm",
    desc: "About MSc Computer Science.",
    image: MBCAsessionImg,
    type: "Session",
    location: "CS Lab",
  },
  {
    title: "PG session for UG Morning BCA Undergraduates 2k25",
    date: "Aug 13, 2025",
    time: "1:00pm – 2:30pm",
    desc: "About MSc Computer Science.",
    image: galleryImg,
    type: "Session",
    location: "Webinar",
  },
  {
    title: "Elixir 2K25: Chemistry Fest Oraganised by Manglore University",
    date: "Apr 3, 2025",
    time: "9:00am-5:00pm",
    desc: "Manglore University Elixir 2K25",
    image: Elixir2K25Img,
    type: "Fest",
    location: "Manglore University",
  },
  {
    title: "2 day Workshop on Basics of React Native and IOS Application.",
    date: "Apr 14-15, 2025",
    time: "9am – 5pm",
    desc: "Workshop on React Native & IOS App.",
    image: IOSnativeImg,
    type: "Workshop",
    location: "CS Lab",
  },
  {
    title: "Workshop on Hardware Implimentation on Internet of Things.",
    date: "Sep 3, 2025",
    time: "1:00pm-5:00pm",
    desc: "Workshop on IOT.",
    image: talkImg,
    type: "Workshop",
    location: "Gallery West",
  },
  {
    title: "Amrutha Mahotsava: Celebrating 75th year Anniversary of MGM College.",
    date: "Nov 29 - Dec 1, 2024",
    time: "8:30pm",
    desc: "Amrutha Mahotsava.",
    image: amruthamahotsavaImg,
    type: "Screening",
    location: "Field Lawn",
  },
  {
    title: "Spectrum 2k24: Annual Day Fest Celebrated by Students of MGM",
    date: "May 31, 2024",
    time: "5:30pm",
    desc: "Spectrum 2k24.",
    image: Spectrum2k24Img,
    type: "Fest",
    location: "Mudana Mantapa",
  },
  // Other events can be added here
];

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
}

export default function EventDetail() {
  const { slug } = useParams();

  const event = eventList.find((ev) => slugify(ev.title) === slug);

  if (!event) {
    return (
      <div
        className="college-page-container min-h-screen py-12 px-4 font-sans flex items-center justify-center"
      >
        <div className="max-w-md w-full backdrop-blur-md bg-white/90 rounded-2xl shadow-xl border border-white/60 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Event not found</h2>
          <Link to="/events" className="text-blue-600 font-bold hover:underline">
            &larr; Back to Events
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="college-page-container min-h-screen py-12 px-4 font-sans"
    >
      <div className="max-w-2xl mx-auto backdrop-blur-md bg-white/90 rounded-2xl shadow-xl border border-white/60 p-6 md:p-8">
        <Link to="/events" className="inline-block mb-6 text-blue-700 font-bold hover:underline">
          &larr; Back to Events
        </Link>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-80 object-cover rounded-xl shadow-md mb-6"
        />
        <span className="inline-block bg-blue-100 text-blue-800 font-semibold text-sm px-4 py-1.5 rounded-full mb-3">
          {event.type}
        </span>
        <div className="text-gray-600 mb-4 text-base flex gap-6 font-medium">
          <span>📅 {event.date}</span>
          <span>⏰ {event.time}</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-4">{event.title}</h1>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">{event.desc}</p>
        <div className="flex items-center gap-4 text-gray-800 text-base font-medium">
          <span className="bg-cyan-100 text-cyan-800 rounded-xl px-4 py-2 font-semibold">📍 {event.location}</span>
        </div>
      </div>
    </div>
  );
}
