import { MotionArticle, MotionContainer } from "./Animated";

const stats = [
  { number: "25+",  label: "Signature Dishes" },
  { number: "10K+", label: "Guests Served"    },
  { number: "4.8",  label: "Guest Rating"     },
  { number: "15+",  label: "Years of Heritage" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative top border */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-[#f97316]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionContainer className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <MotionArticle
              key={stat.label}
              className="group relative flex flex-col items-center justify-center px-6 py-14 text-center"
            >
              {/* Vertical separator */}
              {i < 3 && (
                <div className="absolute right-0 inset-y-8 w-px bg-[#bae6fd] hidden lg:block" />
              )}
              {/* Number */}
              <p
                className="text-5xl font-black leading-none text-[#0284c7] md:text-6xl xl:text-7xl"
                style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
              >
                {stat.number}
              </p>
              <p className="mt-3 text-[0.7rem] font-bold tracking-[0.2em] text-[#0369a1] uppercase">
                {stat.label}
              </p>
              {/* Orange dot accent */}
              <div className="mt-4 h-1.5 w-6 rounded-full bg-[#f97316] transition-all duration-300 group-hover:w-12" />
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
