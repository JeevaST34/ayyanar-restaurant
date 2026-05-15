import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Contact() {
  const contactCards = [
    {
      label: "Address",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      ),
      values: ["11 Veerasamy Rd,", "Singapore - 207319","Landmark:Sri Veeramakaliamman Temple"],
    },
    {
      label: "Contact",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013 5.18 2 2 0 015 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.91 10.09a16 16 0 006 6l1.44-1.44a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      values: ["+65 8335 6561", "ayyanarrestaurant2026@gmail.com"],
    },
    {
      label: "Hours",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
          <circle cx="12" cy="12" r="8" /><path d="M12 8v4l2 2" />
        </svg>
      ),
      values: ["Mon – Sun", "6:00 AM – 11:00 PM"],
    },
  ];

  return (
    <MotionSection id="contact" className="bg-[#f0f9ff] py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-5">Location & Contact</p>
            <h2
              className="text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Visit us for lunch,
              <br />
              <em className="font-bold italic text-[#f97316]">dinner, or a celebration.</em>
            </h2>
          </div>
          <p className="text-[0.95rem] font-medium leading-8 text-[#0369a1] lg:self-end">
            Reach us for reservations, catering requests, private dining, and
            special event menus.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-start">

          {/* Contact cards */}
          <MotionContainer className="grid gap-5">
            {contactCards.map((card) => (
              <MotionArticle
                key={card.label}
                className="group rounded-[24px] border border-[#bae6fd] bg-white p-7 shadow-[0_8px_24px_rgba(2,132,199,0.06)] transition duration-400 hover:border-[#7dd3fc] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(2,132,199,0.15)] overflow-hidden"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#f0f9ff] text-[#0284c7] transition-colors duration-300 group-hover:bg-[#f97316] group-hover:text-white">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="mb-3 text-[0.65rem] font-bold tracking-[0.2em] text-[#0284c7] uppercase">{card.label}</p>
                    <div className="space-y-1.5 min-w-0">
                      {card.values.map((v) => {
                        if (v.toLowerCase().startsWith("landmark:")) {
                          const [prefix, ...rest] = v.split(":");
                          return (
                            <p key={v} className="text-[0.9rem] font-black text-[#075985] break-all whitespace-normal min-w-0">
                              <span className="text-[#0284c7] font-bold">{prefix}:</span> {rest.join(":").trim()}
                            </p>
                          );
                        }

                        return (
                          <p key={v} className="text-[0.9rem] font-black text-[#075985] break-all whitespace-normal min-w-0">{v}</p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </MotionArticle>
            ))}
          </MotionContainer>

          {/* Map */}
          <div className="relative overflow-hidden rounded-[32px] border border-[#bae6fd] shadow-[0_16px_56px_rgba(2,132,199,0.15)]" style={{ minHeight: "475px" }}>
            <iframe
              title="Ayyanar Restaurant location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779047491051!2d103.8532823!3d1.3077817999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19455a495c35%3A0x2a666437645110f0!2sAYYANAR%20RESTAURANT!5e0!3m2!1sen!2sin!4v1778680576237!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Map info card */}
            <div className="absolute bottom-6 left-6 right-6 z-10 rounded-[24px] border border-[#bae6fd] bg-white/90 px-7 py-6 shadow-[0_12px_40px_rgba(2,132,199,0.2)] backdrop-blur-md sm:right-auto sm:w-[320px]">
              <p className="eyebrow mb-2">Ayyanar Restaurant</p>
              <p className="mt-3 font-black text-[#075985] text-[1.1rem]">11 Veerasamy Rd</p>
              <p className="text-[0.85rem] font-medium text-[#0369a1]">Sri Veeramakaliamman Temple</p>
              <p className="text-[0.85rem] font-medium text-[#0369a1]">Singapore 207319</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11+Veerasamy+Rd,+Singapore+207319"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#f0f9ff] border border-[#bae6fd] px-4 py-2 text-xs font-bold text-[#0284c7] transition hover:bg-[#f97316] hover:text-white hover:border-[#f97316]"
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
