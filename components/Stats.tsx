export default function Stats() {
  const stats = [
    { number: "25+", label: "Signature dishes" },
    { number: "10K+", label: "Guests served" },
    { number: "4.8/5", label: "Guest rating" },
    { number: "15+", label: "Years of recipes" },
  ];

  return (
    <section className="border-y border-white/10 bg-[#17140f] py-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#17140f] px-5 py-7 text-center">
              <div className="mb-2 text-3xl font-semibold text-primary md:text-4xl">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/58">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
