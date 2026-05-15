export default function Footer() {
  const footerLinks = [
    {
      heading: "Explore",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Menu", href: "/menu" },
        { label: "Gallery", href: "#gallery" },
        { label: "Chef Specials", href: "#specials" },
      ],
    },
    // {
    //   heading: "Visit",
    //   links: [
    //     { label: "Location", href: "#contact" },
    //     { label: "Reservations", href: "#reservations" },
    //     { label: "Catering", href: "#contact" },
    //     { label: "Private Dining", href: "#contact" },
    //   ],
    // },
    {
      heading: "Follow",
      links: [
        { label: "Instagram", href: "https://instagram.com/" },
        { label: "Facebook", href: "https://facebook.com/" },
        { label: "WhatsApp", href: "https://wa.me/6598650140" },
        { label: "Google Maps", href: "https://www.google.com/maps/dir/?api=1&destination=11+Veerasamy+Rd,+Singapore+207319" },
      ],
    },
    {
      heading: "Contact",
      links: [
        { label: "11 Veerasamy Rd", href: "#contact" },
        { label: "Sri Veeramakaliamman Temple", href: "#contact" },
        { label: "Singapore 207319", href: "#contact" },
        { label: "+65 8335 6561", href: "tel:+6598650140" },
        { label: "ayyanarrestaurant2026@gmail.com", href: "mailto:ayyanarrestaurant2026@gmail.com" },
      ],
    },
  ];

  const socialIcons = [
    {
      label: "Instagram",
      href: "https://instagram.com/",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6598650140",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#0284c7] pt-4">
      {/* Top border gradient */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#f97316]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-8 py-20 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="group mb-8 inline-block">
              <img
                src="https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778585023/ChatGPT_Image_May_12_2026_03_35_27_PM_2_qaktev.svg"
                alt="Ayyanar Restaurant"
                className="h-16 w-auto transition duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] brightness-0 invert"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm font-medium leading-8 text-white/80">
              Authentic South Indian dining with a polished room, generous
              hospitality, and premium service — in the heart of Singapore.
            </p>
            <div className="mt-8 flex gap-4">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white transition duration-300 hover:bg-white hover:text-[#f97316]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-6 text-[0.7rem] font-bold tracking-[0.25em] text-white! uppercase opacity-90">
                {col.heading}
              </h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-white/70 transition duration-300 hover:text-white break-all whitespace-normal min-w-0"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-white/20 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-semibold text-white/60">
            © 2026 Ayyanar Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {/* <a href="#" className="text-xs font-semibold text-white/60 transition hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-semibold text-white/60 transition hover:text-white">
              Terms of Use
            </a> */}
            <a
              href="https://wa.me/6598650140"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-5 py-2 text-[0.8rem] font-bold text-[#0284c7] transition duration-300 hover:bg-[#f97316] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
