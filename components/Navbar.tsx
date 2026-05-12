"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B1A2F]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center">
          <img
            src="https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778585023/ChatGPT_Image_May_12_2026_03_35_27_PM_2_qaktev.svg"
            alt="Ayyanar Restaurant Logo"
            className="h-14 w-auto transition duration-300 group-hover:scale-105"
          />
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
            className="hidden text-sm font-medium text-white/75 transition hover:text-primary lg:inline"
          >
            +91 98765 43210
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="group relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-primary/35 bg-[radial-gradient(circle_at_top,_rgba(58,169,245,0.18),_rgba(11,26,47,0.96)_64%)] text-primary shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_35px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-0.5 hover:border-primary/55 hover:shadow-[0_0_0_1px_rgba(58,169,245,0.12),0_16px_40px_rgba(0,0,0,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 lg:hidden"
          >
            <span className="pointer-events-none absolute inset-[5px] rounded-full border border-primary/15 transition duration-300 group-hover:scale-110 group-hover:border-primary/30" />
            <span className="pointer-events-none absolute h-16 w-6 -translate-x-8 rotate-12 bg-gradient-to-r from-transparent via-primary/25 to-transparent transition duration-500 group-hover:translate-x-8" />
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span
                className={`absolute h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 rotate-45" : "top-0 w-5"
                  }`}
              />
              <span
                className={`absolute h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-3 opacity-80"
                  }`}
              />
              <span
                className={`absolute h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 -rotate-45" : "top-4 w-4"
                  }`}
              />
            </span>
          </button>

          <a
            href="#reservations"
            className="hidden border border-primary bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-transparent hover:text-primary lg:inline-flex"
          >
            Reserve
          </a>
        </div>
      </div>

      <div
        id="header-menu"
        className={`overflow-hidden border-t border-white/10 transition-all duration-500 ease-out lg:hidden ${isMenuOpen
          ? "max-h-[28rem] opacity-100"
          : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-primary/20 bg-[linear-gradient(180deg,rgba(58,169,245,0.08),rgba(11,26,47,0.96))] p-3 shadow-[0_22px_60px_rgba(0,0,0,0.42)]">
            <nav
              aria-label="Primary navigation"
              className="grid gap-2 sm:grid-cols-2"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm uppercase tracking-[0.2em] text-white/72 transition duration-300 hover:border-primary/35 hover:bg-primary/[0.08] hover:text-primary"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                  }}
                >
                  <span>{item.label}</span>
                  <span className="text-primary/50 transition duration-300 group-hover:translate-x-1 group-hover:text-primary">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="tel:+919876543210"
                className="text-sm font-medium text-white/75 transition hover:text-primary lg:hidden"
              >
                +91 98765 43210
              </a>
              <a
                href="#reservations"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full border border-primary bg-primary px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#17120b] transition hover:bg-transparent hover:text-primary sm:w-auto"
              >
                Reserve Your Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
