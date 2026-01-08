"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    img: "/images/hero11.jpeg",
    title: "Building Excellence That Lasts",
    desc: "Architectural, structural & decorative construction solutions",
  },
  {
    img: "/images/hero12.jpeg",
    title: "Premium Façade & GRC Works",
    desc: "Engineering precision with superior finishing",
  },
  {
    img: "/images/hero13.jpeg",
    title: "Trusted Construction Partner",
    desc: "Residential, commercial & industrial projects",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] overflow-hidden">
      {/* Images */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
    ${i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"}
  `}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-6">
        <div className="max-w-6xl mx-auto text-white">
          <h1
            key={index}
            className="text-4xl md:text-6xl font-bold mb-4
  animate-[fadeUp_0.8s_ease-out]"
          >
            {slides[index].title}
          </h1>

          <p className="max-w-xl text-gray-200 mb-8">{slides[index].desc}</p>

          <a
            href="/contact"
            className="inline-block bg-[#F59E0B] text-black px-8 py-4 rounded font-semibold"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-[#F59E0B]" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
