"use client";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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

export default function HomeShowcase() {
  return (
    <main className="bg-white animate-fadeIn">
      {/* ================= WHY CHOOSE ================= */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10 sm:mb-12">
            Why Choose ILLUMINATI
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div
                  className="bg-white rounded-lg shadow
                  hover:-translate-y-2 hover:shadow-xl
                  transition-all duration-500 ease-out"
                >
                  <Image
                    src={h.img}
                    alt={h.title}
                    width={400}
                    height={250}
                    className="w-full h-[220px] sm:h-[250px] object-cover rounded-t-lg"
                  />
                  <div className="p-6 text-center">
                    <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
                    <p className="text-gray-600 text-sm">{h.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= OUR SERVICES ================= */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Sculpture Art Installation",
                desc: "Indoor and outdoor sculpture for home and garden decoration the presence of sculptures can make you relax, bring more fun to your life and help you to maintain a more beautiful home and garden ours sculpture suitable for home, park, vila, hotels and garden etc.",
                img: "/images/hero13.jpeg",
              },
              {
                title: "Architectural Facades",
                desc: "We create a complete architectural façade with modern and traditional designs for our clients. we also under taking a labor contract for architectural façade.",
                img: "/images/hero13.jpeg",
              },
              {
                title: "Water Fountains",
                desc: "Totally unique, fountain technology specialise in only fountains and sculptural water features. We plan them, design them build the custom vaults, construct them maintain them and service them",
                img: "/images/hero13.jpeg",
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="h-full">
                  <div
                    className="flex flex-col h-full bg-white rounded-lg shadow
    hover:-translate-y-2 hover:shadow-xl
    transition-all duration-500 ease-out"
                  >
                    {/* TEXT CONTENT */}
                    <div className="flex-1 text-center px-4 py-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-sm line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    {/* IMAGE */}
                    <div className="overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={400}
                        height={250}
                        className="w-full h-[220px] sm:h-[250px] object-cover
        transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6
          grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <ScrollReveal>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-red-600 mb-8">
                Our Product Features & Customisation
              </h2>

              <ul className="space-y-6">
                {[
                  {
                    title: "High Quality",
                    desc: "Long life and seamless finish demanded across industries.",
                  },
                  {
                    title: "Beautifully Designed",
                    desc: "Capable of handling urgent and bulk orders on time.",
                  },
                  {
                    title: "Rust Proof",
                    desc: "Multiple designs, specifications and custom options.",
                  },
                ].map((f, i) => (
                  <li key={i}>
                    <h4 className="font-semibold">{f.title}</h4>
                    <p className="text-gray-600 text-sm">{f.desc}</p>
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <button
                  className="mt-8 bg-red-600 text-white px-6 py-3 rounded
                hover:bg-red-700 transition-all duration-300"
                >
                  Contact Now
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div
              className="overflow-hidden rounded-lg shadow-lg
              hover:scale-105 transition-all duration-500"
            >
              <Image
                src="/images/lion-sculpture.jpg"
                alt="Metal Sculpture"
                width={600}
                height={400}
                className="object-cover w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <ScrollReveal>
            <div className="relative h-[300px] sm:h-[400px] md:h-[450px]">
              <Image
                src="/images/buddha.jpg"
                alt="Invent Fine Art"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <h2
                  className="relative text-white text-3xl font-semibold tracking-wide
                  after:absolute after:left-0 after:-bottom-2 after:h-[2px]
                  after:w-0 after:bg-red-500
                  after:transition-all after:duration-500
                  hover:after:w-full"
                >
                  Invent Fine Art
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="px-6 sm:px-10 py-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Truly Multi-Purpose & Outstanding
              </h2>

              <p className="text-gray-600 mb-6">
                We bring outstanding art works to all facets of interior and
                architectural design.
              </p>

              <p className="text-gray-600">
                A team of sculptors, painters and designers translating ideas
                into successful, aesthetic and commercial projects.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-gradient-to-r from-gray-400 to-gray-700 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h3 className="text-white text-xl mb-10 text-center md:text-left">
            Our Clients
          </h3>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              "/images/client1.png",
              "/images/client2.png",
              "/images/client3.png",
              "/images/client4.png",
              "/images/client4.png",
            ].map((logo, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white p-4 rounded shadow
              hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo}
                  alt="Client Logo"
                  width={150}
                  height={80}
                  className="object-contain mx-auto"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 sm:py-20">
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6
          flex flex-col md:flex-row
          items-start md:items-center justify-between gap-6
          text-center md:text-left"
        >
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-2">
              Work With Us
            </h2>
            <p className="text-gray-600">
              We convert your ideas and imagination into reality.
            </p>
          </div>

          <Link href="/contact">
            <button
              className="border border-red-600 text-red-600
    px-8 py-3 rounded
    hover:bg-red-600 hover:text-white
    transition-all duration-300"
            >
              Quick Contact
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
