export default function Contact() {
  const contactCards = [
    {
      label: "Address",
      value: ["123 Gourmet Street", "T. Nagar, Chennai - 600017", "Tamil Nadu, India"],
    },
    {
      label: "Phone",
      value: ["+91 98765 43210", "+91 98765 43211"],
    },
    {
      label: "Email",
      value: ["hello@ayyanarrestaurant.com", "reservations@ayyanarrestaurant.com"],
    },
    {
      label: "Hours",
      value: ["Monday - Sunday: 11:00 AM - 11:00 PM", "Lunch: 11:00 AM - 3:00 PM", "Dinner: 6:00 PM - 11:00 PM"],
    },
  ];

  return (
    <section id="contact" className="bg-[#11100d] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Location and contact
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Visit for lunch, dinner, or a celebration worth dressing up for.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/62">
            Reach us for reservations, catering requests, private dining, and
            special event menus. The map area is ready for a live embed when
            the final location link is available.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {contactCards.map((card) => (
              <div key={card.label} className="bg-[#181510] p-6">
                <p className="text-xs uppercase tracking-[0.22em] text-primary">{card.label}</p>
                <div className="mt-4 space-y-1 text-sm leading-6 text-white/68">
                  {card.value.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-white/10 bg-[#181510]">
            <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:44px_44px]" />
            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_12px_rgba(216,180,106,0.12),0_0_0_32px_rgba(216,180,106,0.08)]" />
            <div className="absolute bottom-6 left-6 right-6 border border-primary/25 bg-[#11100d]/90 p-6 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-primary">Ayyanar Restaurant</p>
              <p className="mt-3 text-lg font-semibold text-white">T. Nagar, Chennai</p>
              <p className="mt-2 text-sm leading-6 text-white/58">
                Add a live Google Maps embed or directions link here for the
                final published site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
