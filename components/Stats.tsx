import { MotionArticle, MotionContainer } from "./Animated";

const stats = [
  { number: "25+", label: "Signature Dishes" },
  { number: "10K+", label: "Guests Served" },
  { number: "4.8", label: "Guest Rating" },
  { number: "15+", label: "Years of Heritage" },
];

export default function Stats() {
  return (
    <section className="bg-[#0d1b3e] py-0">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <MotionContainer className="grid grid-cols-2 divide-x divide-[#e3f2fd]/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <MotionArticle
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-14 text-center"
            >
              <div className="mb-5 h-6 w-px bg-[#e64a19]" />
              <p
                className="text-5xl font-bold leading-none tracking-tight text-[#1565c0] md:text-6xl"
                style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
              >
                {stat.number}
              </p>
              <p className="mt-3 text-[0.65rem] font-semibold tracking-[0.22em] text-[#e3f2fd]/40 uppercase">
                {stat.label}
              </p>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </section>
  );
}
