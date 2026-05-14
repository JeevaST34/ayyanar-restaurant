"use client";

import { motion } from "framer-motion";
import { MotionLink } from "./Animated";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a2459, #1565c0, #1976d2, #42a5f5)" }}
    >
      {/* Video overlay */}
      <div className="absolute inset-0 z-0">
        <video
          src="/images/Hero-bg-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,36,89,0.55)_0%,rgba(21,101,192,0.35)_50%,rgba(10,36,89,0.80)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,36,89,0.55)_100%)]" />

        {/* Animated grain */}
        <div
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            animation: "grain 8s steps(10) infinite",
          }}
        />

        {/* Bottom fade into page bg */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#e3f2fd] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pt-32 pb-24 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.35em] text-[#e64a19] uppercase"
        >
          <span className="h-px w-8 bg-[#e64a19]" />
          Singapore Heritage Kitchen
          <span className="h-px w-8 bg-[#e64a19]" />
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.22 }}
          className="font-heading text-6xl font-bold leading-[1.05] tracking-tight text-[#e3f2fd] sm:text-7xl lg:text-8xl xl:text-[6rem]"
          style={{ fontFamily: "var(--font-heading), 'Playfair Display', Georgia, serif" }}
        >
          Ayyanar
          <br />
          <em className="font-normal italic text-[#e64a19]">Restaurant</em>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="my-8 h-px w-24 origin-center bg-[#e64a19]/60"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.4 }}
          className="max-w-xl text-base leading-8 text-[#e3f2fd]/75 sm:text-lg"
        >
          Fire-roasted spices, slow dum biryani, coastal seafood, and the warm
          generosity of a true South Indian table — in the heart of Singapore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
        >
          <MotionLink href="#menu" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.75rem]">
            Explore Our Menu
          </MotionLink>
          <MotionLink href="#about" className="btn-secondary inline-flex items-center justify-center gap-2 px-8 py-4 text-[0.75rem]">
            Our Story
          </MotionLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 flex flex-col items-center gap-2"
        >
          <span className="text-[0.6rem] tracking-[0.3em] text-[#e3f2fd]/40 uppercase">Scroll</span>
          <div className="h-8 w-px bg-gradient-to-b from-[#e3f2fd]/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
