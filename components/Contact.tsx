import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Contact() {
  const contactCards = [
    {
      label: "Address",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      values: ["11 Veerasamy Rd", "Singapore 207319"],
    },
    {
      label: "Phone",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l1.44-1.44a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      values: ["+65 9865 0140"],
    },
    {
      label: "Email",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <path d="M4 5h16v14H4z" /><path d="M22 7L12 13 2 7" />
        </svg>
      ),
      values: ["hello@ayyanarrestaurant.com"],
    },
    {
      label: "Hours",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <circle cx="12" cy="12" r="8" /><path d="M12 8v4l2 2" />
        </svg>
      ),
      values: ["Mon – Sun", "7:00 AM – 11:30 PM"],
    },
  ];

  return (
    <MotionSection id="contact" className="bg-[#e3f2fd] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-4">Location & Contact</p>
            <h2
              className="text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Visit us for lunch,
              <br />
              <em className="font-normal italic text-[#e64a19]">dinner, or a celebration.</em>
            </h2>
          </div>
          <p className="text-sm leading-7 text-[#4a6fa5] lg:self-end">
            Reach us for reservations, catering requests, private dining, and
            special event menus.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          {/* Contact cards */}
          <MotionContainer className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card) => (
              <MotionArticle
                key={card.label}
                className="rounded-2xl border border-[#bbdefb] bg-white p-6 shadow-[0_4px_16px_rgba(13,27,62,0.06)] transition hover:border-[#1e88e5]/40 hover:shadow-[0_8px_28px_rgba(13,71,161,0.10)]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#e3f2fd] text-[#1565c0]">
                  {card.icon}
                </div>
                <p className="eyebrow mb-3">{card.label}</p>
                <div className="space-y-1">
                  {card.values.map((v) => (
                    <p key={v} className="text-sm font-medium text-[#0d1b3e]">{v}</p>
                  ))}
                </div>
              </MotionArticle>
            ))}
          </MotionContainer>

          {/* Map */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-[#bbdefb] shadow-[0_8px_40px_rgba(13,71,161,0.16)]">
            <iframe
              title="Ayyanar Restaurant location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779047491051!2d103.8532823!3d1.3077817999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19455a495c35%3A0x2a666437645110f0!2sAYYANAR%20RESTAURANT!5e0!3m2!1sen!2sin!4v1778680576237!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-5 left-5 right-5 z-10 rounded-2xl border border-[#bbdefb] bg-[#e3f2fd]/95 px-6 py-5 shadow-[0_8px_24px_rgba(13,71,161,0.16)] backdrop-blur-sm">
              <p className="eyebrow mb-2">Ayyanar Restaurant</p>
              <p className="font-semibold text-[#0d1b3e]">11 Veerasamy Rd, Singapore 207319</p>
              <a
                href="https://maps.app.goo.gl/example"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1565c0] transition hover:text-[#0d47a1]"
              >
                Get Directions
                <svg viewBox="0 0 16 16" fill="currentColor" className="h-3.5 w-3.5">
                  <path fillRule="evenodd" d="M1 8a.75.75 0 01.75-.75h9.646L7.47 3.354a.75.75 0 111.06-1.06l5 5a.75.75 0 010 1.06l-5 5a.75.75 0 11-1.06-1.06l3.926-3.896H1.75A.75.75 0 011 8z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
