const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#11100d]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center border border-primary/45 bg-primary/10 text-sm font-semibold tracking-[0.22em] text-primary">
            AR
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.28em] text-white">
              Ayyanar
            </span>
            <span className="block text-xs uppercase tracking-[0.22em] text-white/55">
              South Indian Dining
            </span>
          </span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-medium uppercase tracking-[0.2em] text-white/68 transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+919876543210"
            className="hidden text-sm font-medium text-white/75 transition hover:text-primary sm:inline"
          >
            +91 98765 43210
          </a>
          <a
            href="#reservations"
            className="border border-primary bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-transparent hover:text-primary"
          >
            Reserve
          </a>
        </div>
      </div>

      <nav
        aria-label="Mobile navigation"
        className="flex gap-5 overflow-x-auto border-t border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-white/65 lg:hidden"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="shrink-0 hover:text-primary">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
