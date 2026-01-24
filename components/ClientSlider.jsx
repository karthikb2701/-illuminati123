"use client";

import { useState, useEffect, useRef } from "react";

const clients = [
  { name: "Jangid Construction" },
  { name: "Basilius International (Reliance)" },
  { name: "Terrain Greens Pvt Ltd" },
  { name: "Sankalp Realty" },
  { name: "Atharva Institute of Management" },
  { name: "Thakur College of Engineering and Technology" },
  { name: "Pacific Waterproofing Solutions" },
  { name: "Raj Hans Jain Desai Group" },
  { name: "Sushil Group" },
  { name: "Astha Group" },
  { name: "Gami Group" },
  { name: "Triveni Developers" },
  { name: "River Gate Resort" },
  { name: "Bonzer Infra Pvt Ltd" },
  { name: "Alpine Wood" },
  { name: "Uttekar Fisheries" },
  { name: "Sandurson Group" },
  { name: "Raj Group" },
  { name: "Navkar Construction" },
  { name: "Navneet Society" },
  { name: "Ascentis Delhi" },
  { name: "BARC Colony" },
  { name: "The Fern, Turbhe" },
  { name: "Seasons Naigaon" },
  { name: "KSR global aquarium Sawantwadi" },
];

export default function ClientSlider() {
  const visibleCount = 3;
  const maxIndex = Math.max(clients.length - visibleCount, 0);

  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  /* Keyboard navigation */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const slider = sliderRef.current;
    slider?.addEventListener("keydown", handleKey);

    return () => slider?.removeEventListener("keydown", handleKey);
  }, [maxIndex]);

  const slideWidth = 100 / visibleCount;

  return (
    <div
      ref={sliderRef}
      tabIndex={0}
      className="relative max-w-7xl mx-auto px-6 outline-none"
    >
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * slideWidth}%)` }}
        >
          {clients.map((client, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 md:w-1/3 px-4 flex-shrink-0"
            >
              <div className="bg-white rounded-xl border border-gray-200 p-10 h-full flex items-center justify-center hover:border-[#F59E0B] hover:shadow-xl transition">
                <p className="text-center text-sm font-semibold tracking-wide text-[#0F172A]">
                  {client.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        disabled={index === 0}
        aria-label="Previous"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white p-3 rounded-full disabled:opacity-40"
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === maxIndex}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#0F172A] text-white p-3 rounded-full disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
