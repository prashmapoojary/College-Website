import React, { useState, useEffect, useRef } from "react";
// Local assets under src/assets/img/
import i1 from "../assets/img/i1.jpeg";
import i2 from "../assets/img/i2.jpeg";
import i3 from "../assets/img/i3.jpeg";
import i4 from "../assets/img/i4.jpeg";
import i5 from "../assets/img/i5.jpeg";
import i6 from "../assets/img/i6.jpeg";
import i7 from "../assets/img/i7.jpeg";
import i8 from "../assets/img/i8.jpeg";
import i9 from "../assets/img/i9.jpeg";
import i10 from "../assets/img/i10.jpeg";
import i11 from "../assets/img/i11.jpeg";
import i12 from "../assets/img/i12.jpeg";
import i13 from "../assets/img/i13.jpeg";
import i14 from "../assets/img/i14.jpeg";
import i15 from "../assets/img/i15.jpeg";
// PDFs
import iiqaPdf from "../assets/pdf/IIQA_declaration.pdf";
import ssrDeclarationPdf from "../assets/pdf/SSR_Declaration.pdf";
import ssrPdf from "../assets/pdf/SSR.pdf";
import naac4Pdf from "../assets/pdf/NAAC4.pdf";

export default function Naac() {
  // Images imported from src/assets/img/
  const photos = [
    { src: i1, alt: "NAAC Photo 1" },
    { src: i2, alt: "NAAC Photo 2" },
    { src: i3, alt: "NAAC Photo 3" },
    { src: i4, alt: "NAAC Photo 4" },
    { src: i5, alt: "NAAC Photo 5" },
    { src: i6, alt: "NAAC Photo 6" },
    { src: i7, alt: "NAAC Photo 7" },
    { src: i8, alt: "NAAC Photo 8" },
    { src: i9, alt: "NAAC Photo 9" },
    { src: i10, alt: "NAAC Photo 10" },
    { src: i11, alt: "NAAC Photo 11" },
    { src: i12, alt: "NAAC Photo 12" },
    { src: i13, alt: "NAAC Photo 13" },
    { src: i14, alt: "NAAC Photo 14" },
    { src: i15, alt: "NAAC Photo 15" },
  ];

  const [open, setOpen] = useState(false);
  const galleryRef = useRef(null);
  // Track which card is expanded (null means none)
  const [expanded, setExpanded] = useState(null);

  const total = photos.length;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // When gallery opens, scroll it into view so it's fully visible
  useEffect(() => {
    if (open && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [open]);


  return (
    <div className="w-full max-w-none mx-auto px-0 md:px-6 py-8">
      {/* Gradient Header */}
      <div
        className="rounded-xl shadow-md overflow-hidden mb-6"
        style={{
          background:
            "linear-gradient(180deg, #4f8df5 0%, #2f6ddf 50%, #1d4ed8 80%, #e6f0ff 100%)",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
        }}
      >
        <div className="py-5 text-center">
          <h1 className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
            NAAC
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <div className="border-2 border-black rounded-2xl shadow-lg bg-[linear-gradient(180deg,#cddade_0%,#80b7e4_100%)]">
        <div className="p-6 md:p-8 space-y-3 text-[15px] leading-7 text-black">
          <a href={iiqaPdf} target="_blank" rel="noopener noreferrer" className="block text-black no-underline">
            IIQA Declaration
          </a>
          <a href={ssrDeclarationPdf} target="_blank" rel="noopener noreferrer" className="block text-black no-underline">
            Self Study Declaration
          </a>
          <a href={ssrPdf} target="_blank" rel="noopener noreferrer" className="block text-black no-underline">
            SSR 4th Cycle
          </a>

          <a href={naac4Pdf} target="_blank" rel="noopener noreferrer" className="block text-black no-underline pt-1">
            Accredited by NAAC with
            <span className="text-purple-700 font-semibold"> 'A+' </span>
            Grade (CGPA 3.36) in IV Cycle of Accreditation.
          </a>

          <button
            type="button"
            className="flex items-center px-3 py-1.5 mt-2 mx-auto text-sm font-medium rounded-md text-white bg-[#F4A261] hover:bg-[#E98A53] shadow"
            onClick={() => setOpen(true)}
          >
            View Images
          </button>

          {/* Inline gallery shown directly under the button */}
          {open && total > 0 && (
            <div ref={galleryRef} className="mt-4 scroll-mt-24">
              {/* Outer card at 50% width on md+ */}
              <div className="mx-auto w-full md:w-1/2">
                <div className="rounded-2xl shadow-xl p-4 border-2 border-black bg-[linear-gradient(180deg,#cddade_0%,#80b7e4_100%)]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-black">NAAC Photo Gallery</h3>
                  </div>

                  {/* Horizontal scroll row of 15 image cards */}
                  <div className="overflow-x-auto">
                    <div
                      className="flex gap-4 p-4 rounded-[12px] snap-x snap-mandatory bg-[linear-gradient(to_right,#f9fefe,#f3fbfb)] scroll-smooth"
                      style={{ scrollbarColor: '#0a7c75 transparent' }}
                    >
                      {photos.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => setExpanded(expanded === i ? null : i)}
                          className={`shrink-0 group snap-start cursor-pointer transition-all duration-300 ${
                            expanded === i
                              ? 'w-[360px] h-[480px] sm:w-[400px] sm:h-[540px] md:w-[440px] md:h-[600px] z-10'
                              : 'w-[260px] h-[340px] sm:w-[300px] sm:h-[400px] md:w-[340px] md:h-[460px] lg:w-[360px] lg:h-[480px]'
                          }`}
                        >
                          <div
                            className={`w-full h-full border-2 rounded-[15px] p-6 text-center flex flex-col justify-center items-center transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(9,58,91,0.18)] bg-[linear-gradient(180deg,#cddade_0%,#80b7e4_100%)] border-black text-black`}
                          >
                            {/* Image is intentionally smaller than the card */}
                            <img
                              src={img.src}
                              alt={img.alt || `NAAC Photo ${i + 1}`}
                              className={`block mx-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] ${
                                expanded === i
                                  ? 'max-h-64 sm:max-h-72 md:max-h-80 max-w-[95%]'
                                  : 'max-h-40 sm:max-h-48 md:max-h-56 max-w-[90%]'
                              }`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close inline gallery */}
              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-3 py-1.5 text-sm rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
                >
                  Close Gallery
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Accent Divider (multicolor bar) */}
        <div
          className="h-2 w-full rounded-b-xl"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, #f59e0b 0 60px, #b91c1c 60px 120px, #9333ea 120px 180px, #f59e0b 180px 240px)",
          }}
        />
      </div>

      {/* Removed popup overlay; gallery is inline above */}
    </div>
  );
}
