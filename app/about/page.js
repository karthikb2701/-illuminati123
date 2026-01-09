"use client";

import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About ILLUMINATI"
        subtitle="Quality-driven construction with engineering precision"
      />

      {/* ================= INTRO ================= */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>

          <p className="text-gray-700 leading-relaxed">
            <strong>ILLUMINATI</strong> is a professionally managed construction
            and contracting company delivering high-quality architectural,
            structural, and finishing solutions across residential, commercial,
            and industrial projects.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With a strong focus on quality, safety, and timely execution,
            ILLUMINATI has established itself as a reliable partner for clients
            seeking excellence in construction and allied works.
          </p>
        </div>

        <Image
          src="/images/about.jpg"
          alt="ILLUMINATI Construction Team"
          width={520}
          height={380}
          className="rounded-lg shadow-lg"
        />
      </motion.section>

      {/* ================= EXPERTISE ================= */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Our Expertise</h2>

          <p className="text-gray-700 mb-6 leading-relaxed">
            We specialize in innovative construction techniques and decorative
            concrete solutions, including <strong>Ferrocement works</strong>,
            <strong> GRC (Glassfiber Reinforced Concrete)</strong>,
            <strong> FRP (Fibre Reinforced Plastic)</strong>, architectural
            mouldings, façades, columns, claddings, and customized civil works.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our expertise lies in translating architectural concepts into
            durable and aesthetically superior structures through engineering
            precision and skilled execution.
          </p>
        </div>
      </motion.section>

      {/* ================= CORE STRENGTHS ================= */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-12">Our Core Strengths</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            "Experienced technical and execution team",
            "Expertise in Ferrocement & GRC works",
            "High-quality workmanship and finishing",
            "Strong site management & safety practices",
            "Timely project delivery with transparent coordination",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow
              hover:-translate-y-2 hover:shadow-xl
              transition-all duration-300"
            >
              <p className="font-medium text-gray-800">{item}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ================= VISION & MISSION ================= */}
      <motion.section
        className="bg-gray-900 text-white py-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To be a trusted name in the construction industry by delivering
              innovative, sustainable, and high-quality construction solutions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To exceed client expectations through professionalism, technical
              excellence, and consistent project performance while maintaining
              integrity and long-term relationships.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= CLOSING ================= */}
      <motion.section
        className="max-w-5xl mx-auto px-6 py-16 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          <strong>ILLUMINATI</strong> stands for quality, reliability, and
          innovation — building structures that last and designs that inspire.
        </p>
      </motion.section>
    </>
  );
}
