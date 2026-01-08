import PageHeader from "@/components/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description:
    "Learn about ILLUMINATI Construction, our vision, mission and expertise.",
};

export default function About() {
  return (
    <>
      <PageHeader
        title="About ILLUMINATI"
        subtitle="Quality-driven construction with engineering precision"
      />

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-700 mb-6">
            ILLUMINATI is a professionally managed construction and contracting
            company delivering high-quality architectural and structural
            solutions.
          </p>

          {/* Vertical Timeline */}
          <div className="border-l-2 border-[#F59E0B] pl-6 space-y-8">
            {[
              "Company Established",
              "Expanded into GRC & FRP",
              "Delivered Commercial Projects",
              "Trusted Industry Partner",
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-3 top-1 w-4 h-4 bg-[#F59E0B] rounded-full"></span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/images/about.jpg"
          alt="Construction team"
          width={520}
          height={380}
          className="rounded-lg shadow-lg"
        />
      </section>
    </>
  );
}
