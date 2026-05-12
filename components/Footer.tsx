export default function Footer() {
  const links = [
    ["About", "#about"],
    ["Menu", "#menu"],
    ["Gallery", "#gallery"],
    ["Reservations", "#reservations"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="border-t border-white/10 bg-[#0c0b09] py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-primary text-2xl font-semibold">
              Ayyanar Restaurant
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-white/58">
              Authentic South Indian dining with a polished room, generous
              hospitality, and flavors rooted in Tamil Nadu kitchens.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/58">
              {links.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="hover:text-primary transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-[0.2em] text-white uppercase">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/58">
              <li>Chennai, Tamil Nadu</li>
              <li>+91 98765 43210</li>
              <li>hello@ayyanarrestaurant.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 Ayyanar Restaurant. All rights reserved.</p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary/35 text-primary hover:bg-primary inline-flex w-fit border px-5 py-2 text-xs font-bold tracking-[0.18em] uppercase transition hover:text-[#17120b]"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
