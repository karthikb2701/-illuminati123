import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | ILLUMINATI Construction",
  description:
    "Contact ILLUMINATI Construction for professional architectural and construction solutions.",
};

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Let’s discuss your next project"
      />

      <section className="px-6 py-16">
        <ContactForm />
      </section>
    </>
  );
}
