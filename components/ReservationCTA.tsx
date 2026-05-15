import { MotionArticle, MotionButton, MotionContainer, MotionSection } from "./Animated";

const details = [
  ["Location", "11 Veerasamy Rd, Sri Veeramakaliamman Temple, Singapore 207319"],
  ["Dining Hours", "6:00 AM – 11:00 PM, Daily"],
  ["For Groups", "Private dining and bespoke catering"],
];

export default function ReservationCTA() {
  return (
    <MotionSection
      id="reservations"
      className="relative overflow-hidden py-[6rem]"
      style={{ background: "radial-gradient(circle at top left, #38bdf8 0%, #0284c7 100%)" }}
    >
      <div className="absolute -right-32 -bottom-32 h-[500px] w-[500px] rounded-full bg-[#bae6fd]/30 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 sm:px-8 lg:grid-cols-2 lg:px-10">

        {/* Left — info */}
        <div>
          <p className="mb-5 inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.26em] text-white uppercase">
            <span className="h-1 w-6 rounded-full bg-[#f97316]" />
            Reservations
          </p>
          <h2
            className="text-4xl font-black leading-[1.1] text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
          >
            Plan the table,
            <br />
            <em className="font-bold italic text-[#f97316]">the feast, the occasion.</em>
          </h2>
          <p className="mt-8 max-w-md text-[1rem] font-medium leading-8 text-white/90">
            Book for a quiet dinner, a family celebration, or a larger hosted
            meal. Our team shapes the menu around spice preference, guest count,
            and service style.
          </p>

          <MotionContainer className="mt-12 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(([label, value]) => (
              <MotionArticle
                key={label}
                className="rounded-[20px] border border-white/25 bg-white/10 p-6 backdrop-blur-md shadow-sm"
              >
                <p className="mb-2 block text-[0.65rem] font-black tracking-[0.2em] text-[#f97316] uppercase">
                  {label}
                </p>
                <p className="text-[0.95rem] font-bold text-white break-all whitespace-normal min-w-0">{value}</p>
              </MotionArticle>
            ))}
          </MotionContainer>
        </div>

        {/* Right — form */}
        <form className="relative rounded-[32px] border border-white/30 bg-white/20 p-8 backdrop-blur-lg shadow-[0_24px_80px_rgba(2,132,199,0.3)] md:p-10">
          <div className="relative z-10 grid gap-5 md:grid-cols-2">
            {[
              { label: "Name", type: "text", placeholder: "Your name", span: 1 },
              { label: "Phone", type: "tel", placeholder: "+65", span: 1 },
              { label: "Guests", type: "number", placeholder: "4", span: 1 },
            ].map(({ label, type, placeholder, span }) => (
              <label key={label} className={`block ${span === 2 ? "md:col-span-2" : ""}`}>
                <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase shadow-sm">
                  {label}
                </span>
                <input
                  type={type} placeholder={placeholder}
                  className="w-full rounded-2xl border border-white/40 bg-white/40 px-5 py-3.5 text-sm font-bold text-[#075985] placeholder:text-[#075985]/50 outline-none transition duration-300 focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"
                />
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase shadow-sm">
                Occasion
              </span>
              <select className="w-full rounded-2xl border border-white/40 bg-white/40 px-5 py-3.5 text-sm font-bold text-[#075985] outline-none transition duration-300 focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]">
                <option>Casual dining</option>
                <option>Birthday</option>
                <option>Family celebration</option>
                <option>Corporate meal</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase shadow-sm">
                Preferred Date & Time
              </span>
              <input
                type="datetime-local"
                className="w-full rounded-2xl border border-white/40 bg-white/40 px-5 py-3.5 text-sm font-bold text-[#075985] outline-none transition duration-300 focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-[0.65rem] font-bold tracking-[0.2em] text-white uppercase shadow-sm">
                Special Requests
              </span>
              <textarea
                rows={4}
                placeholder="Dietary notes, seating preferences, celebration details…"
                className="w-full resize-none rounded-2xl border border-white/40 bg-white/40 px-5 py-3.5 text-sm font-bold text-[#075985] placeholder:text-[#075985]/50 outline-none transition duration-300 focus:border-white focus:bg-white focus:shadow-[0_0_0_4px_rgba(255,255,255,0.3)]"
              />
            </label>
          </div>

          <MotionButton type="submit" className="btn-primary relative z-10 mt-8 w-full py-4 text-[0.85rem] justify-center bg-[#f97316]">
            Request Reservation
          </MotionButton>
        </form>
      </div>
    </MotionSection>
  );
}
