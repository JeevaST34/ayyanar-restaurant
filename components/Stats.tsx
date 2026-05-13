import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Stats() {
  const stats = [
    { number: "25+", label: "Signature dishes" },
    { number: "10K+", label: "Guests served" },
    { number: "4.8/5", label: "Guest rating" },
    { number: "15+", label: "Years of recipes" },
  ];

  return (
    <MotionSection className="bg-[#F5E6DA] py-16 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionContainer className="grid gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <MotionArticle
              className="card-surface px-6 py-8 text-center"
              key={index}
            >
              <div className="text-primary mb-3 text-4xl font-semibold md:text-5xl">
                {stat.number}
              </div>
              <div className="text-sm tracking-[0.18em] text-[#5B4A42] uppercase">
                {stat.label}
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
