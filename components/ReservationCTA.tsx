import {
  MotionArticle,
  MotionButton,
  MotionContainer,
  MotionSection,
} from "./Animated";

export default function ReservationCTA() {
  const details = [
    ["Location", "11 Veerasamy Rd, Singapore 207319"],
    ["Dining hours", "7:00 AM - 11:30 PM"],
    ["For groups", "Private dining and catering"],
  ];

  return (
    <MotionSection
      id="reservations"
      className="relative overflow-hidden bg-[#F5E6DA] py-16 text-[#3B2A24]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(234,88,40,0.18),transparent_50%),linear-gradient(0deg,rgba(255,255,255,0.52),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
            Reservations
          </p>
          <h2 className="max-w-xl text-4xl leading-tight font-semibold md:text-5xl">
            Plan the table, the feast, and the occasion.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#5B4A42]">
            Book for a quiet dinner, a family celebration, or a larger hosted
            meal. Our team can help shape the menu around spice preference,
            guest count, and service style.
          </p>

          <MotionContainer className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(([label, value]) => (
              <MotionArticle key={label} className="card-surface p-6">
                <p className="text-xs tracking-[0.2em] text-[#EA5828] uppercase">
                  {label}
                </p>
                <p className="mt-3 font-medium text-[#3B2A24]">{value}</p>
              </MotionArticle>
            ))}
          </MotionContainer>
        </div>

        <form className="glass-panel p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#5B4A42] uppercase">
                Name
              </span>
              <input
                type="text"
                className="w-full border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none placeholder:text-[#6B7280] focus:border-[#EA5828]"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#5B4A42] uppercase">
                Phone
              </span>
              <input
                type="tel"
                className="w-full border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none placeholder:text-[#6B7280] focus:border-[#EA5828]"
                placeholder="+65"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#5B4A42] uppercase">
                Guests
              </span>
              <input
                type="number"
                min="1"
                className="w-full border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none placeholder:text-[#6B7280] focus:border-[#EA5828]"
                placeholder="4"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#5B4A42] uppercase">
                Occasion
              </span>
              <select className="w-full border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none focus:border-[#EA5828]">
                <option>Casual dining</option>
                <option>Birthday</option>
                <option>Family celebration</option>
                <option>Corporate meal</option>
              </select>
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#6B7280] uppercase">
                Preferred time
              </span>
              <input
                type="datetime-local"
                className="w-full border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none focus:border-[#EA5828]"
              />
            </label>
            <label className="block md:col-span-2">
              <span className="mb-2 block text-xs tracking-[0.18em] text-[#6B7280] uppercase">
                Requests
              </span>
              <textarea
                rows={4}
                className="w-full resize-none border border-[#C89C7A] bg-white px-4 py-3 text-[#3B2A24] transition outline-none placeholder:text-[#6B7280] focus:border-[#EA5828]"
                placeholder="Dietary notes, preferred seating, celebration details"
              />
            </label>
          </div>

          <MotionButton
            type="submit"
            className="mt-6 w-full rounded-full bg-[#EA5828] px-7 py-4 text-sm font-bold tracking-[0.18em] text-white uppercase shadow-[0_18px_40px_rgba(234,88,40,0.18)] transition hover:bg-[#F80901]"
          >
            Request Reservation
          </MotionButton>
        </form>
      </div>
    </MotionSection>
  );
}
