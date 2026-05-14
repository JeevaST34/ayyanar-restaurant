"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#stories" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[#C89C7A]/70 bg-[rgba(59,42,36,0.92)] backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778585023/ChatGPT_Image_May_12_2026_03_35_27_PM_2_qaktev.svg"
            alt="Ayyanar Restaurant Logo"
            className="h-14 w-auto transition duration-300 group-hover:scale-105"
          />
          {/* <span className="hidden text-sm font-semibold uppercase tracking-[0.25em] text-[#FFF7F1] sm:inline-flex">
            Ayyanar
          </span> */}
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-[0.2em] text-white! uppercase transition hover:text-[#EA5828]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="group focus-visible:ring-primary relative grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-[#C89C7A]/70 bg-[rgba(255,255,255,0.08)] text-[#FFF7F1] shadow-[0_10px_30px_rgba(59,42,36,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(59,42,36,0.28)] focus-visible:ring-2 focus-visible:outline-none lg:hidden"
          >
            <span className="pointer-events-none absolute inset-[5px] rounded-full border border-[#C89C7A]/60 transition duration-300" />
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
            href="#contact"
            className="border-primary bg-primary hover:bg-accent hidden border px-4 py-2 text-xs font-bold tracking-[0.18em] text-[#ffffff]! uppercase transition lg:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>

      <div
        id="header-menu"
        className={`overflow-hidden border-t border-[#C89C7A]/65 transition-all duration-500 ease-out lg:hidden ${isMenuOpen
          ? "max-h-[28rem] opacity-100"
          : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="rounded-[1.75rem] border border-[#C89C7A]/60 bg-[rgba(255,247,241,0.95)] p-3 shadow-[0_22px_60px_rgba(59,42,36,0.14)]">
            <nav
              aria-label="Primary navigation"
              className="grid gap-2 sm:grid-cols-2"
            >
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group hover:bg-background-highlight hover:text-primary flex items-center justify-between rounded-2xl border border-[#C89C7A]/60 bg-white/80 px-4 py-3 text-sm tracking-[0.2em] text-[#3B2A24] uppercase transition duration-300"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 45}ms` : "0ms",
                  }}
                >
                  <span>{item.label}</span>
                  <span className="text-primary/60 group-hover:text-primary transition duration-300 group-hover:translate-x-1">
                    0{index + 1}
                  </span>
                </a>
              ))}
            </nav>

            <div className="mt-3 flex flex-col gap-3 rounded-2xl border border-[#C89C7A]/60 bg-white/90 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="tel:+919876543210"
                className="text-sm font-medium text-[#3B2A24] transition lg:hidden"
              >
                +65 9865 0140
              </a>
              <a
                href="#reservations"
                onClick={() => setIsMenuOpen(false)}
                className="border-primary bg-primary hover:bg-accent inline-flex w-full items-center justify-center rounded-full border px-4 py-3 text-xs font-bold tracking-[0.18em] text-[#17120b] uppercase transition sm:w-auto"
              >
                Reserve Your Table
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
