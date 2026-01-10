"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const highlights = [
  {
    title: "Technical Expertise",
    desc: "Experienced sculptor, engineers & skilled workforce",
    img: "/images/hero11.jpeg",
  },
  {
    title: "Quality & Safety",
    desc: "Strict quality control and safety practices.",
    images: [
      "/images/safety.png",
      "/images/Safety2.jpeg",
      "/images/Safety3.jpeg",
      "/images/Safety4.jpeg",
      "/images/Safety5.jpeg",
    ],
  },
  {
    title: "Timely Delivery",
    desc: "Systematic project execution.",
    img: "/images/hero13.jpeg",
  },
];

export default function HomeHighlights() {
  const scrollRef = useRef(null);
  const indexRef = useRef(0);

  // AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const total = container.children.length;

      indexRef.current = (indexRef.current + 1) % total;

      container.scrollTo({
        left: container.offsetWidth * indexRef.current,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToIndex = (direction) => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const total = container.children.length;

    indexRef.current =
      direction === "left"
        ? (indexRef.current - 1 + total) % total
        : (indexRef.current + 1) % total;

    container.scrollTo({
      left: container.offsetWidth * indexRef.current,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ILLUMINATI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-500 ease-out"
            >
              {/* IMAGE / AUTO SCROLLER */}
              {h.images ? (
                <div className="relative">
                  {/* SCROLL AREA */}
                  <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory"
                  >
                    {h.images.map((img, idx) => (
                      <div key={idx} className="min-w-full snap-center">
                        <Image
                          src={img}
                          alt={`${h.title} ${idx + 1}`}
                          width={400}
                          height={250}
                          className="w-full h-[220px] sm:h-[250px] object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* LEFT BUTTON */}
                  <button
                    onClick={() => scrollToIndex("left")}
                    className="absolute top-1/2 left-2 -translate-y-1/2
                    bg-black/50 text-white w-8 h-8 rounded-full
                    flex items-center justify-center hover:bg-black transition"
                  >
                    ‹
                  </button>

                  {/* RIGHT BUTTON */}
                  <button
                    onClick={() => scrollToIndex("right")}
                    className="absolute top-1/2 right-2 -translate-y-1/2
                    bg-black/50 text-white w-8 h-8 rounded-full
                    flex items-center justify-center hover:bg-black transition"
                  >
                    ›
                  </button>
                </div>
              ) : (
                <Image
                  src={h.img}
                  alt={h.title}
                  width={400}
                  height={250}
                  className="w-full h-[220px] sm:h-[250px] object-cover"
                />
              )}

              {/* TEXT */}
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
                <p className="text-gray-600 text-sm">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
