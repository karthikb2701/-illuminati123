import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const highlights = [
  {
    title: "Technical Expertise",
    desc: "Experienced engineers & skilled workforce.",
    img: "/images/hero11.jpeg",
  },
  {
    title: "Quality & Safety",
    desc: "Strict quality control and safety practices.",
    img: "/images/hero12.jpeg",
  },
  {
    title: "Timely Delivery",
    desc: "Systematic project execution.",
    img: "/images/hero13.jpeg",
  },
];

export default function HomeHighlights() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ILLUMINATI
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className="bg-white rounded-lg shadow
                hover:-translate-y-2 hover:shadow-xl transition"
              >
                <Image
                  src={h.img}
                  alt={h.title}
                  width={400}
                  height={250}
                  className="object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
                  <p className="text-gray-600 text-sm">{h.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
