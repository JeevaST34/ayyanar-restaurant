import { MotionLink, MotionSection } from "./Animated";

export default function Footer() {
  const links = [
    ["About", "#about"],
    ["Menu", "#menu"],
    ["Gallery", "#gallery"],
    ["Reservations", "#reservations"],
    ["Contact", "#contact"],
  ];

  return (
    <MotionSection className="border-t border-[#C89C7A]/70 bg-[#3B2A24] py-12 text-[#FFF7F1]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold text-[#FFF7F1]">
              Ayyanar Restaurant
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#FFF7F1]/80">
              Authentic South Indian dining with a polished room, generous
              hospitality, and premium service tailored to Singapore dining.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-[#FFF7F1]/90 uppercase">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[#FFF7F1]/70">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="transition hover:text-[#EA5828]">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-[#FFF7F1]/90 uppercase">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-[#FFF7F1]/70">
              <li>Singapore</li>
              <li>+65 9876 5432</li>
              <li>hello@ayyanarrestaurant.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-[#D8B595]/50 pt-8 text-sm text-[#FFF7F1]/70 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Ayyanar Restaurant. All rights reserved.</p>
          <MotionLink
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit border border-[#C89C7A]/75 bg-white/10 px-5 py-2 text-xs font-bold tracking-[0.18em] text-[#FFF7F1] uppercase transition hover:border-[#EA5828] hover:text-[#EA5828]"
          >
            WhatsApp
          </MotionLink>
        </div>
      </div>
    </MotionSection>
  );
}
