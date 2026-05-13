import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Contact() {
  const contactCards = [
    {
      label: "Address",
      value: ["11 Veerasamy Rd", "Singapore 207319", "Singapore"],
    },
    {
      label: "Phone",
      value: ["+65 9865 0140"],
    },
    {
      label: "Email",
      value: [
        "hello@ayyanarrestaurant.com",
        "reservations@ayyanarrestaurant.com",
      ],
    },
    {
      label: "Hours",
      value: [
        "Monday - Sunday: 7:00 AM - 11:30 PM",
        // "Lunch: 11:00 AM - 3:00 PM",
        // "Dinner: 6:00 PM - 11:00 PM",
      ],
    },
  ];

  return (
    <MotionSection id="contact" className="bg-[#FFF7F1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Location and contact
            </p>
            <h2 className="text-4xl leading-tight font-semibold md:text-5xl">
              Visit for lunch, dinner, or a celebration worth dressing up for.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#5B4A42]">
            Reach us for reservations, catering requests, private dining, and
            special event menus. The map area is ready for a live embed when the
            final location link is available.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <MotionContainer className="grid gap-6 sm:grid-cols-2">
            {contactCards.map((card) => (
              <MotionArticle
                key={card.label}
                className="card-surface overflow-hidden p-6"
              >
                <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
                  {card.label}
                </p>
                <div className="mt-4 space-y-1 text-sm leading-6 break-words text-[#6B7280]">
                  {card.value.map((line) => (
                    <p key={line} className="break-words whitespace-normal">
                      {line}
                    </p>
                  ))}
                </div>
              </MotionArticle>
            ))}
          </MotionContainer>

          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-[#C89C7A] bg-[#F5E6DA] shadow-[0_18px_42px_rgba(234,88,40,0.1)]">
            <iframe
              title="Ayyanar Restaurant location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.779047491051!2d103.8532823!3d1.3077817999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19455a495c35%3A0x2a666437645110f0!2sAYYANAR%20RESTAURANT!5e0!3m2!1sen!2sin!4v1778680576237!5m2!1sen!2sin"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15),rgba(255,255,255,0.05))]" />
            <div className="glass-panel absolute right-6 bottom-6 left-6 z-10 p-6">
              <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
                Ayyanar Restaurant
              </p>
              <p className="mt-3 text-lg font-semibold text-[#3B2A24]">
                11 Veerasamy Rd, Singapore 207319
              </p>
              <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                This section displays a Google Maps embed for the restaurant
                location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
