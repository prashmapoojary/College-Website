import React, { useState, useEffect } from 'react';

const slrBlk = "/assets/HomeAbout/SliderImg/slr-blk.JPG";
const admin = "/assets/HomeAbout/SliderImg/Admin.JPG";
const newBuild = "/assets/HomeAbout/SliderImg/newBuild.JPG";
const library = "/assets/HomeAbout/SliderImg/librarymgm.jpeg";
const pucBlk = "/assets/HomeAbout/SliderImg/pu-blk.JPG";
const girlsHostel = "/assets/HomeAbout/SliderImg/girls_hostel.jpg";
const indoorSports = "/assets/HomeAbout/SliderImg/indoorsports.JPG";



const pulseKeyframes = `
  @keyframes pulse-scale {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const slides = [
  {
    image: slrBlk,
    heading: 'Registration Open on 24th August',
    subheading: 'Admissions Open for September 2026',
    buttonText: 'Register Now',
    buttonLink: '#',
  },
  {
    image: admin,
    heading: 'Your Future Starts Here',
    subheading: 'Graduate with confidence and purpose',
  },
  {
    image: newBuild,
    heading: 'Symbol of Progress',
    subheading: 'Honoring 75 years of growth, learning, and innovation',
  },
  {
    image: library,
    heading: 'Knowledge Hub',
    subheading: 'A vast collection of books, journals, and digital resources',
  },
  {
    image: pucBlk,
    heading: 'Beautiful Campus',
    subheading: 'A green and inspiring environment to learn and grow',
  },
  {
    image: girlsHostel,
    heading: 'Vidyarthini Nilaya',
    subheading: 'Dedicated hostel providing a safe and empowering space for women students',
  },
  {
    image: indoorSports,
    heading: 'Indoor Sports Complex',
    subheading: 'State-of-the-art facilities for games, fitness, and recreation',
  },
];

const SliderTab = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSocial, setShowSocial] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToUpdateTab = () => {
    const updateTabElement = document.getElementById('update-tab-section');
    if (updateTabElement) {
      updateTabElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSocialButtons = () => {
    setShowSocial((prev) => !prev);
  };

  return (
    <div className="relative w-full h-[75vh] overflow-hidden font-sans">
      {/* Inject animation style */}
      <style>{pulseKeyframes}</style>

      {/* 🔵 MGM Updates Button */}
      <button
        onClick={scrollToUpdateTab}
        className="absolute top-5 right-5 z-20 text-slate-950 font-bold py-3 px-6 rounded-full shadow-2xl transition duration-300 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 border border-amber-300 tracking-wide"
        style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
        aria-label="Go to Updates"
      >
        Click For MGM Updates!!
      </button>

      {/* 🔷 Follow MGM Button */}
      <button
        onClick={toggleSocialButtons}
        className="absolute top-20 right-5 z-20 text-amber-300 font-semibold py-3 px-6 rounded-full shadow-xl transition duration-300 bg-slate-950/90 hover:bg-slate-900 border border-amber-500/50 backdrop-blur-md"
        style={{ animation: 'pulse-scale 2s ease-in-out infinite' }}
        aria-label="Show Social Links"
      >
        Follow MGM
      </button>

      {/* 🌐 Social Media Buttons Dropdown with animation */}
      <div
        className={`absolute right-5 z-20 flex flex-col gap-3 transition-all duration-500 ease-in-out ${
          showSocial ? 'opacity-100 translate-y-0 top-36' : 'opacity-0 -translate-y-5 top-20 pointer-events-none'
        }`}
      >
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-slate-900 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 shadow-xl hover:bg-amber-500 hover:text-slate-950 transition"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f text-lg"></i>
        </a>
        <a
          href="https://www.instagram.com/mgm_journalism_/#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-slate-900 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 shadow-xl hover:bg-amber-500 hover:text-slate-950 transition"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram text-lg"></i>
        </a>
        <a
          href="https://www.linkedin.com/school/mgm-college-udupi/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-slate-900 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 shadow-xl hover:bg-amber-500 hover:text-slate-950 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin-in text-lg"></i>
        </a>
        <a
          href="https://www.youtube.com/@MGM.Journalism"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-slate-900 border border-amber-500/40 rounded-full flex items-center justify-center text-amber-400 shadow-xl hover:bg-amber-500 hover:text-slate-950 transition"
          aria-label="YouTube"
        >
          <i className="fab fa-youtube text-lg"></i>
        </a>
      </div>

      {/* 🔄 Slide Loop */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.heading}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute top-[35%] left-[5%] max-w-[500px] text-white">
            <div className="bg-slate-950/75 backdrop-blur-md p-6 rounded-xl border border-amber-500/30 shadow-2xl">
              <h1 className="text-[2.3rem] md:text-[2.6rem] font-bold mb-2 leading-tight text-amber-100 drop-shadow-[3px_3px_10px_rgba(0,0,0,0.9)]">
                {slide.heading}
              </h1>
              <p className="text-[1.1rem] mb-4 leading-snug text-slate-200 drop-shadow-[2px_2px_8px_rgba(0,0,0,0.85)]">
                {slide.subheading}
              </p>
              {slide.buttonText && slide.buttonLink && (
                <a
                  href={slide.buttonLink}
                  className="inline-block px-6 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold rounded-full hover:from-amber-400 hover:to-amber-500 transition shadow-lg"
                >
                  {slide.buttonText}
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderTab;