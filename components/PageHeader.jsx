export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-[#0F172A] text-white py-20 text-center px-6">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && (
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </section>
  );
}
