export default function PageHeader({ title, subtitle }) {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white border-b border-slate-200">
      <div className="container-x py-14 md:py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}
