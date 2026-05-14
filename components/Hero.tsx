"use client";

import { motion } from "framer-motion";
import { MotionLink } from "./Animated";

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="relative flex min-h-[94vh] items-center overflow-hidden bg-[linear-gradient(135deg,#FFF7F1_0%,#FFE2D1_100%)] px-4 pt-36 pb-16 text-[#3B2A24] sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 z-0">
        <video
          src="/images/Hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,241,0.72)_0%,rgba(255,226,209,0.68)_55%,rgba(255,247,241,0.78)_100%)] backdrop-blur-[2px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#FFF7F1] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex justify-center w-full max-w-7xl items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl text-center">
          <p className="mb-5 inline-flex border border-[#EA5828]/20 bg-[#EA5828]/10 px-4 py-2 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
            Singapore heritage kitchen
          </p>
          <h1 className="max-w-4xl text-5xl leading-[0.96] font-bold tracking-normal text-[#3B2A24] sm:text-6xl lg:text-8xl">
            Ayyanar Restaurant
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5B4A42] font-semibold my-4 mx-auto">
            A polished South Indian dining room for fire-roasted spices, slow
            dum biryani, coastal seafood, layered parotta, and warm family
            celebrations.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row justify-center">
            <MotionLink
              href="#menu"
              className="inline-flex justify-center rounded-full bg-[#EA5828] px-8 py-4 text-sm font-bold tracking-[0.18em] text-white! uppercase shadow-[0_16px_35px_rgba(234,88,40,0.14)] transition hover:bg-[#F80901]"
            >
              Explore Menu
            </MotionLink>
            {/* <MotionLink
              href="#reservations"
              className="inline-flex justify-center rounded-full border border-[#EA5828] px-8 py-4 text-sm font-bold tracking-[0.18em] text-[#EA5828] uppercase transition hover:bg-[#EA5828]/10"
            >
              Book a Table
            </MotionLink> */}
          </div>
        </div>

        {/* <div className="grid gap-4 border-l border-[#D8B595] pl-5 text-sm text-[#5B4A42] sm:grid-cols-3 lg:grid-cols-1">
          <div className="card-surface p-6">
            <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
              Open Daily
            </p>
            <p className="mt-2 text-base font-semibold text-[#3B2A24]">
              7:00 AM - 11:30 PM
            </p>
          </div>
          <div className="card-surface p-6">
            <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
              Signature
            </p>
            <p className="mt-2 text-base font-semibold text-[#3B2A24]">
              Chettinad biryani and seafood fry
            </p>
          </div>
          <div className="card-surface p-6">
            <p className="text-xs tracking-[0.22em] text-[#EA5828] uppercase">
              For Events
            </p>
            <p className="mt-2 text-base font-semibold text-[#3B2A24]">
              Private dining, family feasts, catering
            </p>
          </div>
        </div> */}
      </div>
    </motion.section>
  );
}
