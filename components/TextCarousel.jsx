"use client";
import { useEffect, useState } from "react";

const items = [
  "Architectural Façade Solutions",
  "Premium GRC & FRP Works",
  "Engineering Precision",
];

export default function TextCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="overflow-hidden h-8 text-[#F59E0B] text-lg">
      <div
        className="transition-transform duration-700"
        style={{ transform: `translateY(-${index * 32}px)` }}
      >
        {items.map((t, i) => (
          <div key={i} className="h-8">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}
