import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

const testimonials = [
  {
    name: "Nalla Laxman", role: "Regular Guest", rating: 5,
    text: "The biryani has depth, the seafood fry is crisp, and the service feels genuinely attentive. One of the finest South Indian experiences in Singapore.",
  },
  {
    name: "Prasant Kumar Saravanan", role: "Family Diner", rating: 5,
    text: "Ayyanar Restaurant la food semma tasty ah irundhuchu, service um romba nalla irundhuchu. Family ah serndhu pogarathukku super place.",
  },
  {
    name: "Prabu Karan", role: "Event Guest", rating: 5,
    text: "The set menu made hosting simple, and every guest found something memorable on the table. Truly a warm and generous dining room.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[#f97316]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <MotionSection className="bg-[#f0f9ff] py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-16 text-center">
          <p className="eyebrow justify-center mb-5">Guest Notes</p>
          <h2
            className="mx-auto max-w-2xl text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
          >
            Hospitality people
            <br />
            <em className="font-bold italic text-[#f97316]">remember after the meal.</em>
          </h2>
        </div>

        <MotionContainer className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => {
            const initials = t.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
            return (
              <MotionArticle
                key={t.name}
                className="relative flex flex-col overflow-hidden rounded-[24px] border border-[#bae6fd] bg-white p-8 shadow-[0_12px_32px_rgba(2,132,199,0.06)] transition duration-300 hover:shadow-[0_20px_48px_rgba(2,132,199,0.15)] hover:-translate-y-2 hover:border-[#7dd3fc]"
              >
                {/* Large open-quote mark */}
                <span
                  className="absolute right-4 top-0 select-none text-[8rem] leading-none text-[#7dd3fc]/20 font-serif"
                  aria-hidden="true"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>

                <div className="relative mb-6 z-10">
                  <Stars count={t.rating} />
                </div>

                <blockquote className="relative z-10 flex-1">
                  <p
                    className="text-[1rem] italic leading-8 text-[#075985]"
                    style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                <div className="relative z-10 mt-8 flex items-center gap-4 border-t border-[#e0f2fe] pt-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[0.9rem] font-black text-white uppercase shadow-[0_4px_16px_rgba(2,132,199,0.3)]"
                    style={{ background: "linear-gradient(135deg, #38bdf8, #0284c7)" }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-black text-[#075985] text-[0.875rem]">{t.name}</p>
                    <p className="text-[0.75rem] font-medium text-[#0369a1]">{t.role}</p>
                  </div>
                </div>
              </MotionArticle>
            );
          })}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
