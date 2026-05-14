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
          ? "bg-[#0a2459]/96 backdrop-blur-xl shadow-[0_4px_32px_rgba(10,36,89,0.28)] border-b border-[#1e88e5]/20"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="group flex items-center gap-3 shrink-0">
          <img
            src="https://res.cloudinary.com/dxfk1lmpg/image/upload/v1778580920/ChatGPT_Image_May_12_2026_03_35_27_PM_1_lrummf.svg"
            alt="Ayyanar Restaurant Logo"
            className="h-14 w-auto transition duration-300 group-hover:scale-105"
          />
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-[0.7rem] font-semibold tracking-[0.22em] text-[#e3f2fd]/80 uppercase transition hover:text-[#e3f2fd] group"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 rounded-full bg-[#e64a19] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="header-menu"
            onClick={() => setIsMenuOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#e3f2fd]/20 bg-[#e3f2fd]/08 text-[#e3f2fd] transition hover:border-[#1e88e5]/50 hover:text-[#42a5f5] lg:hidden"
          >
            <span className="relative flex h-5 w-5 flex-col items-center justify-center gap-[5px]">
              <span className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"}`} />
              <span className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-0 opacity-0" : "w-3.5"}`} />
              <span className={`h-[1.5px] rounded-full bg-current transition-all duration-300 ${isMenuOpen ? "w-5 -translate-y-[6.5px] -rotate-45" : "w-5"}`} />
            </span>
          </button>

          <a
            href="#contact"
            className="hidden rounded-full bg-[#e64a19] px-5 py-2.5 text-[0.7rem] font-bold tracking-[0.18em] text-white uppercase shadow-[0_4px_16px_rgba(230,74,25,0.40)] transition hover:bg-[#c84010] hover:shadow-[0_6px_22px_rgba(230,74,25,0.50)] hover:-translate-y-0.5 lg:inline-flex"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      <div
        id="header-menu"
        className={`overflow-hidden border-t border-[#e3f2fd]/10 transition-all duration-500 ease-out lg:hidden ${isMenuOpen ? "max-h-[24rem] opacity-100" : "max-h-0 border-transparent opacity-0"
          }`}
      >
        <div className="bg-[#0a2459]/98 px-5 py-5 sm:px-8">
          <nav className="grid gap-1">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold tracking-[0.18em] text-[#e3f2fd]/75 uppercase transition hover:bg-[#e3f2fd]/06 hover:text-[#e3f2fd]"
                style={{ transitionDelay: isMenuOpen ? `${i * 40}ms` : "0ms" }}
              >
                <span>{item.label}</span>
                <span className="text-[#42a5f5]/70 text-xs">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="mt-4 border-t border-[#e3f2fd]/10 pt-4">
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="flex w-full items-center justify-center rounded-full bg-[#e64a19] py-3.5 text-xs font-bold tracking-[0.18em] text-white uppercase shadow-[0_4px_16px_rgba(230,74,25,0.35)] transition hover:bg-[#c84010]"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
