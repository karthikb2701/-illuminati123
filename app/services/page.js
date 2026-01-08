import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";

export const metadata = {
  title: "Our Services | ILLUMINATI Construction",
  description:
    "Ferrocement, GRC, FRP, façades, architectural mouldings and customized civil works.",
};

const services = [
  {
    title: "Ferrocement Works",
    img: "/images/ferrocement.jpg",
  },
  {
    title: "GRC (Glassfiber Reinforced Concrete)",
    img: "/images/grc.jpg",
  },
  {
    title: "FRP (Fibre Reinforced Plastic)",
    img: "/images/frp.jpg",
  },
  {
    title: "Façades & Claddings",
    img: "/images/facade.jpg",
  },
  {
    title: "Architectural Mouldings",
    img: "/images/moulding.jpg",
  },
  {
    title: "Customized Civil Works",
    img: "/images/civil.jpg",
  },
];

export default function Services() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Innovative construction techniques with superior finishing"
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div
                className="bg-white rounded-lg overflow-hidden
                shadow hover:shadow-xl transition-all duration-500
                hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    Precision-driven execution with high-quality workmanship and
                    attention to architectural detail.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
