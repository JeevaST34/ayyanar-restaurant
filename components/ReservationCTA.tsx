export default function ReservationCTA() {
  const details = [
    ["Location", "T. Nagar, Chennai"],
    ["Dining hours", "11:00 AM - 11:00 PM"],
    ["For groups", "Private dining and catering"],
  ];

  return (
    <section id="reservations" className="relative overflow-hidden bg-[#21150f] py-24 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(157,47,37,0.5),transparent_50%),linear-gradient(0deg,rgba(216,180,106,0.12),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
            Reservations
          </p>
          <h2 className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
            Plan the table, the feast, and the occasion.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
            Book for a quiet dinner, a family celebration, or a larger hosted
            meal. Our team can help shape the menu around spice preference,
            guest count, and service style.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(([label, value]) => (
              <div key={label} className="bg-[#11100d]/70 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
                <p className="mt-2 font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="border border-white/15 bg-[#11100d]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Name</span>
              <input
                type="text"
                className="w-full border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Phone</span>
              <input
                type="tel"
                className="w-full border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary"
                placeholder="+91"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Guests</span>
              <input
                type="number"
                min="1"
                className="w-full border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary"
                placeholder="4"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Occasion</span>
              <select className="w-full border border-white/15 bg-[#16120e] px-4 py-3 text-white outline-none transition focus:border-primary">
                <option>Casual dining</option>
                <option>Birthday</option>
                <option>Family celebration</option>
                <option>Corporate meal</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Preferred time</span>
              <input
                type="datetime-local"
                className="w-full border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition focus:border-primary"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-white/55">Requests</span>
              <textarea
                rows={4}
                className="w-full resize-none border border-white/15 bg-white/10 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-primary"
                placeholder="Dietary notes, preferred seating, celebration details"
              />
            </label>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-primary px-7 py-4 text-sm font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-accent"
          >
            Request Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
