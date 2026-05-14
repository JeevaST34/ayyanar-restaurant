import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Contact() {
  const contactCards = [
    {
      label: "Address",
      icon: "location",
      values: [
        { icon: "home", text: "11 Veerasamy Rd" },
        { icon: "building", text: "Singapore 207319" },
        { icon: "flag", text: "Singapore" },
      ],
    },
    {
      label: "Phone",
      icon: "phone",
      values: [{ icon: "phone", text: "+65 8335 6561" }],
    },
    {
      label: "Email",
      icon: "mail",
      values: [{ icon: "mail", text: "ayyanarrestaurant2026@gmail.com" }],
    },
    {
      label: "Hours",
      icon: "clock",
      values: [{ icon: "clock", text: "Monday - Sunday: 6:00 AM - 11:00 PM" }],
    },
  ];

  const renderIcon = (type: string) => {
    switch (type) {
      case "location":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
        );
      case "phone":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72 12.22 12.22 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L9.91 10.09a16 16 0 0 0 6 6l1.44-1.44a2 2 0 0 1 2.11-.45 12.22 12.22 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case "mail":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <path d="M4 5h16v14H4z" />
            <path d="M22 7L12 13 2 7" />
          </svg>
        );
      case "clock":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l2 2" />
          </svg>
        );
      case "home":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path d="M3 11L12 3l9 8v8a1 1 0 0 1-1 1h-6v-6H10v6H4a1 1 0 0 1-1-1v-8z" />
          </svg>
        );
      case "building":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path d="M4 22V6h16v16" />
            <path d="M8 10h2M8 14h2M8 18h2M14 10h2M14 14h2M14 18h2" />
          </svg>
        );
      case "flag":
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path d="M5 22V2" />
            <path d="M5 6h14l-4 4 4 4H5" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <MotionSection id="contact" className="bg-[#FFF7F1] py-16 text-[#3B2A24]">
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
                <div className="flex items-end gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDE9D9] text-[#EA5828]">
                    {renderIcon(card.icon)}
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
                      {card.label}
                    </p>
                    <span className="mt-3 block h-px w-full max-w-30 bg-[#EA5828]/20" />
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  {card.values.map((item) => (
                    <div key={item.text} className="flex items-center gap-3">
                      {/* <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F5E6DA] text-[#EA5828] shrink-0">
                        {renderIcon(item.icon)}
                      </div> */}
                      <p className="text-sm leading-6 text-[#3B2A24]">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </MotionArticle>
            ))}
          </MotionContainer>

          <div className="relative min-h-105 overflow-hidden rounded-[28px] border border-[#C89C7A] bg-[#F5E6DA] shadow-[0_18px_42px_rgba(234,88,40,0.1)]">
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
