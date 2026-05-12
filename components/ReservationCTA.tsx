export default function ReservationCTA() {
  const details = [
    ["Location", "T. Nagar, Chennai"],
    ["Dining hours", "11:00 AM - 11:00 PM"],
    ["For groups", "Private dining and catering"],
  ];

  return (
    <section
      id="reservations"
      className="relative overflow-hidden bg-[#0B1A2F] py-24 text-white"
    >
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(245,90,36,0.4),transparent_50%),linear-gradient(0deg,rgba(58,169,245,0.12),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-primary mb-4 text-xs font-semibold tracking-[0.28em] uppercase">
            Reservations
          </p>
          <h2 className="max-w-xl text-4xl leading-tight font-semibold md:text-5xl">
            Plan the table, the feast, and the occasion.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/68">
            Book for a quiet dinner, a family celebration, or a larger hosted
            meal. Our team can help shape the menu around spice preference,
            guest count, and service style.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(([label, value]) => (
              <div key={label} className="bg-[#0B1A2F]/60 p-5">
                <p className="text-primary text-xs tracking-[0.2em] uppercase">
                  {label}
                </p>
                <p className="mt-2 font-medium text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <form className="border border-white/15 bg-[#0B1A2F]/85 p-6 shadow-2xl shadow-black/25 backdrop-blur md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Name
              </span>
              <input
                type="text"
                className="focus:border-primary w-full border border-white/15 bg-white/10 px-4 py-3 text-white transition outline-none placeholder:text-white/35"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Phone
              </span>
              <input
                type="tel"
                className="focus:border-primary w-full border border-white/15 bg-white/10 px-4 py-3 text-white transition outline-none placeholder:text-white/35"
                placeholder="+91"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Guests
              </span>
              <input
                type="number"
                min="1"
                className="focus:border-primary w-full border border-white/15 bg-white/10 px-4 py-3 text-white transition outline-none placeholder:text-white/35"
                placeholder="4"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Occasion
              </span>
              <select className="focus:border-primary w-full border border-white/15 bg-[#0B1A2F] px-4 py-3 text-white transition outline-none">
                <option>Casual dining</option>
                <option>Birthday</option>
                <option>Family celebration</option>
                <option>Corporate meal</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Preferred time
              </span>
              <input
                type="datetime-local"
                className="focus:border-primary w-full border border-white/15 bg-white/10 px-4 py-3 text-white transition outline-none"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.18em] text-white/55 uppercase">
                Requests
              </span>
              <textarea
                rows={4}
                className="focus:border-primary w-full resize-none border border-white/15 bg-white/10 px-4 py-3 text-white transition outline-none placeholder:text-white/35"
                placeholder="Dietary notes, preferred seating, celebration details"
              />
            </label>
          </div>

          <button
            type="submit"
            className="bg-primary hover:bg-accent mt-6 w-full px-7 py-4 text-sm font-bold tracking-[0.18em] text-[#17120b] uppercase transition"
          >
            Request Reservation
          </button>
        </form>
      </div>
    </section>
  );
}
