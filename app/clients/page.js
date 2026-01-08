import PageHeader from "@/components/PageHeader";
import ClientSlider from "@/components/ClientSlider";

export const metadata = {
  title: "Our Clients | ILLUMINATI Construction",
  description: "Trusted by developers, architects, builders and institutions.",
};

export default function Clients() {
  return (
    <>
      <PageHeader
        title="Our Clients"
        subtitle="Trusted partnerships across industries"
      />

      <section className="py-20 bg-[#F8FAFC]">
        <ClientSlider />
      </section>
    </>
  );
}
