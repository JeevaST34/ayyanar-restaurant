"use client";

import { motion } from "framer-motion";
import { MotionLink } from "./Animated";

export default function Hero() {
  return (
    <section
      id="home"
      className="grain-overlay relative flex min-h-screen items-center justify-center overflow-hidden bg-sky-100"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0 opacity-40"
      >
        <source src="/images/Hero-bg-video.mp4" type="video/mp4" />
      </video>

      {/* Decorative sunburst rays effect (like the logo) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none" style={{ background: "repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(255,255,255,0.2) 10deg 20deg)" }} />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/10 via-transparent to-white/30 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-36 pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-3"
        >
          <span className="h-1 w-10 rounded-full bg-[#f97316]" />
          <span className="text-[0.7rem] font-black tracking-[0.3em] text-[#0369a1] uppercase">
            Singapore Heritage Kitchen
          </span>
          <span className="h-1 w-10 rounded-full bg-[#f97316]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-heading text-[5rem] font-black leading-[1] tracking-tight text-[#f97316] sm:text-[6.5rem] lg:text-[8rem]"
          style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
        >
          Ayyanar
          <br />
          <em className="font-normal italic" style={{ color: "#ea580c" }}>
            Restaurant
          </em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="my-10 flex items-center gap-4"
        >
          <span className="h-1 w-20 rounded-full bg-[#0284c7]/20" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f97316]" />
          <span className="h-1 w-20 rounded-full bg-[#0284c7]/20" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="max-w-lg text-[1.1rem] font-semibold leading-8 text-[#0369a1]"
        >
          Fire-roasted spices, slow dum biryani, coastal seafood, and the warm
          generosity of a true South Indian table — in the heart of Singapore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.58 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <a href="#menu" className="btn-primary px-10 py-4 text-sm shadow-lg">
            Explore Our Menu
          </a>
          {/* <a href="#about" className="btn-secondary px-10 py-4 text-sm bg-white shadow-lg border-white text-[#0369a1] hover:bg-[#f0f9ff] hover:text-[#075985]">
            Our Story
          </a> */}
        </motion.div>
      </div>
    </section>
  );
}
