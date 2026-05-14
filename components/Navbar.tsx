"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "/menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Stories", href: "#stories" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("resize", closeMenu);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-[0_8px_32px_rgba(2,132,199,0.1)] border-b border-[#bae6fd]"
        : "bg-gradient-to-b from-[#e0f2fe]/80 to-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3 shrink-0">
          <img
            src={scrolled
              ? "https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778580920/ChatGPT_Image_May_12_2026_03_35_27_PM_1_lrummf.svg"
              : "https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778585023/ChatGPT_Image_May_12_2026_03_35_27_PM_2_qaktev.svg"
            }
            alt="Ayyanar Restaurant Logo"
            className="h-14 w-auto transition duration-300 group-hover:scale-105"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative text-[0.7rem] font-black tracking-[0.2em] uppercase transition duration-300 group ${scrolled ? "text-[#0369a1] hover:text-[#075985]" : "text-[#075985] hover:text-[#f97316]"
                }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-[#f97316] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((o) => !o)}
            className={`grid h-12 w-12 place-items-center rounded-full border transition duration-300 lg:hidden ${scrolled
              ? "border-[#bae6fd] bg-[#f0f9ff] text-[#0284c7] hover:border-[#7dd3fc]"
              : "border-[#0284c7]/30 bg-white/20 text-[#075985] hover:bg-white/40"
              }`}
          >
            <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
              <span className={`h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 translate-y-[7px] rotate-45" : "w-5"}`} />
              <span className={`h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-3.5"}`} />
              <span className={`h-[2px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 -translate-y-[7px] -rotate-45" : "w-5"}`} />
            </span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#f97316] px-6 py-3 text-[0.75rem] font-bold tracking-[0.18em] text-white uppercase shadow-[0_6px_20px_rgba(249,115,22,0.30)] transition duration-300 hover:bg-[#ea580c] hover:shadow-[0_8px_24px_rgba(249,115,22,0.40)] hover:-translate-y-0.5 lg:inline-flex"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        id="header-menu"
        className={`overflow-hidden border-t border-[#bae6fd] transition-all duration-500 ease-out lg:hidden ${isMenuOpen ? "max-h-[26rem] opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <div className="bg-white/95 px-6 py-6 sm:px-8 backdrop-blur-xl">
          <nav className="grid gap-2">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-[16px] px-5 py-4 text-[0.8rem] font-black tracking-[0.18em] text-[#0369a1] uppercase transition duration-300 hover:bg-[#f0f9ff] hover:text-[#075985]"
                style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span>{item.label}</span>
                <span className="text-[#f97316] text-xs font-bold">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-5 border-t border-[#e0f2fe] pt-5">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#f97316] py-4 text-[0.8rem] font-bold tracking-[0.18em] text-white uppercase shadow-[0_6px_20px_rgba(249,115,22,0.30)] transition duration-300 hover:bg-[#ea580c]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
