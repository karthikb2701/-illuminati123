"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const clients = [
  { name: "Reliance Jio", logo: "/images/clients/jio.png" },
  { name: "Tata Group", logo: "/images/clients/tata.png" },
  { name: "Patanjali", logo: "/images/clients/patanjali.png" },
  { name: "Reliance", logo: "/images/clients/reliance.png" },
];

export default function ClientSlider() {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const visibleCount = 3;
  const maxIndex = clients.length - visibleCount;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex));

  /* 🔑 KEYBOARD HANDLER */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    const slider = sliderRef.current;
    if (slider) slider.addEventListener("keydown", handleKey);

    return () => {
      if (slider) slider.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <div
      ref={sliderRef}
      tabIndex={0} // 🔑 makes div focusable
      className="relative max-w-7xl mx-auto px-6 outline-none"
    >
      {/* Slider */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 33.333}%)` }}
        >
          {clients.map((client, i) => (
            <div key={i} className="min-w-full sm:min-w-1/2 md:min-w-1/3 px-4">
              <div
                className="bg-white rounded-xl border border-gray-200
                p-10 h-full flex flex-col items-center justify-center
                hover:border-[#F59E0B] hover:shadow-xl transition"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="
    object-contain
    transition duration-500
    hover:grayscale-0
  "
                />

                <p className="mt-4 text-sm font-medium text-[#0F172A]">
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
        className="absolute left-0 top-1/2 -translate-y-1/2
        bg-[#0F172A] text-white p-3 rounded-full
        disabled:opacity-40"
      >
        ‹
      </button>

      <button
        onClick={next}
        disabled={index === maxIndex}
        aria-label="Next"
        className="absolute right-0 top-1/2 -translate-y-1/2
        bg-[#0F172A] text-white p-3 rounded-full
        disabled:opacity-40"
      >
        ›
      </button>
    </div>
  );
}
