import { MotionArticle, MotionButton, MotionContainer, MotionSection } from "./Animated";

const details = [
  ["Location", "11 Veerasamy Rd, Singapore 207319"],
  ["Dining Hours", "7:00 AM – 11:30 PM, Daily"],
  ["For Groups", "Private dining and bespoke catering"],
];

export default function ReservationCTA() {
  return (
    <MotionSection
      id="reservations"
      className="relative overflow-hidden py-[5rem]"
      style={{ background: "linear-gradient(160deg, #0a2459, #1565c0)" }}
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(66,165,245,0.18),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:px-10">

        {/* Left — info */}
        <div>
          <p className="mb-5 inline-block text-[0.6875rem] font-semibold tracking-[0.28em] uppercase text-[#42a5f5]">
            Reservations
          </p>
          <h2
            className="text-4xl font-bold leading-tight text-[#e3f2fd] md:text-5xl"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
          >
            Plan the table,
            <br />
            <em className="font-normal italic text-[#e64a19]">the feast, the occasion.</em>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-8 text-[#e3f2fd]/55">
            Book for a quiet dinner, a family celebration, or a larger hosted
            meal. Our team shapes the menu around spice preference, guest count,
            and service style.
          </p>

          <MotionContainer className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {details.map(([label, value]) => (
              <MotionArticle
                key={label}
                className="rounded-2xl border border-[#e3f2fd]/12 bg-[#e3f2fd]/06 p-5 backdrop-blur-sm"
              >
                <p className="mb-2 inline-block text-[0.6875rem] font-semibold tracking-[0.28em] uppercase text-[#42a5f5]">
                  {label}
                </p>
                <p className="text-sm font-medium text-[#e3f2fd]/80">{value}</p>
              </MotionArticle>
            ))}
          </MotionContainer>
        </div>

        {/* Right — form */}
        <form className="rounded-3xl border border-[#e3f2fd]/12 bg-[#e3f2fd]/06 p-7 backdrop-blur-sm md:p-9">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: "Name",   type: "text",   placeholder: "Your name", span: 1 },
              { label: "Phone",  type: "tel",    placeholder: "+65",       span: 1 },
              { label: "Guests", type: "number", placeholder: "4",         span: 1 },
            ].map(({ label, type, placeholder, span }) => (
              <label key={label} className={`block ${span === 2 ? "md:col-span-2" : ""}`}>
                <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#e3f2fd]/50 uppercase">
                  {label}
                </span>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="w-full rounded-xl border border-[#e3f2fd]/14 bg-[#e3f2fd]/06 px-4 py-3 text-sm text-[#e3f2fd] placeholder:text-[#e3f2fd]/30 outline-none transition focus:border-[#42a5f5]/60 focus:bg-[#e3f2fd]/10"
                />
              </label>
            ))}

            <label className="block">
              <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#e3f2fd]/50 uppercase">
                Occasion
              </span>
              <select className="w-full rounded-xl border border-[#e3f2fd]/14 bg-[#0a2459] px-4 py-3 text-sm text-[#e3f2fd]/70 outline-none transition focus:border-[#42a5f5]/60">
                <option>Casual dining</option>
                <option>Birthday</option>
                <option>Family celebration</option>
                <option>Corporate meal</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#e3f2fd]/50 uppercase">
                Preferred Date & Time
              </span>
              <input
                type="datetime-local"
                className="w-full rounded-xl border border-[#e3f2fd]/14 bg-[#e3f2fd]/06 px-4 py-3 text-sm text-[#e3f2fd]/70 outline-none transition focus:border-[#42a5f5]/60 focus:bg-[#e3f2fd]/10"
              />
            </label>

            <label className="block md:col-span-2">
              <span className="mb-2 block text-[0.65rem] font-semibold tracking-[0.2em] text-[#e3f2fd]/50 uppercase">
                Special Requests
              </span>
              <textarea
                rows={4}
                placeholder="Dietary notes, seating preferences, celebration details…"
                className="w-full resize-none rounded-xl border border-[#e3f2fd]/14 bg-[#e3f2fd]/06 px-4 py-3 text-sm text-[#e3f2fd] placeholder:text-[#e3f2fd]/30 outline-none transition focus:border-[#42a5f5]/60 focus:bg-[#e3f2fd]/10"
              />
            </label>
          </div>

          <MotionButton type="submit" className="btn-primary mt-6 w-full py-4 text-sm">
            Request Reservation
          </MotionButton>
        </form>
      </div>
    </MotionSection>
  );
}
