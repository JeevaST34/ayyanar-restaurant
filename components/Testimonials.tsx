import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

const testimonials = [
  {
    name: "Nalla Laxman",
    role: "Regular Guest",
    rating: 5,
    text: "The biryani has depth, the seafood fry is crisp, and the service feels genuinely attentive. One of the finest South Indian experiences in Singapore.",
  },
  {
    name: "Prasant Kumar Saravanan",
    role: "Family Diner",
    rating: 5,
    text: "Ayyanar Restaurant la food semma tasty ah irundhuchu, service um romba nalla irundhuchu. Family ah serndhu pogarathukku super place.",
  },
  {
    name: "Prabu Karan",
    role: "Event Guest",
    rating: 5,
    text: "The set menu made hosting simple, and every guest found something memorable on the table. Truly a warm and generous dining room.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[#1e88e5]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <MotionSection className="bg-[#bbdefb] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 text-center">
          <p className="eyebrow mb-4">Guest Notes</p>
          <h2
            className="mx-auto max-w-2xl text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
            style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
          >
            Hospitality people
            <br />
            <em className="font-normal italic text-[#e64a19]">remember after the meal.</em>
          </h2>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => {
            const initials = t.name.split(" ").map((p) => p[0]).slice(0, 2).join("");
            return (
              <MotionArticle
                key={t.name}
                className="relative flex flex-col overflow-hidden rounded-3xl bg-white border border-[#bbdefb] p-8 shadow-[0_6px_28px_rgba(13,27,62,0.07)] transition hover:shadow-[0_14px_44px_rgba(13,71,161,0.12)] hover:-translate-y-1"
              >
                {/* Large open-quote mark */}
                <span
                  className="absolute right-6 top-4 select-none text-[7rem] leading-none text-[#1e88e5]/12 font-serif"
                  aria-hidden="true"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  &ldquo;
                </span>

                <div className="mb-6">
                  <Stars count={t.rating} />
                </div>

                <blockquote className="flex-1">
                  <p
                    className="text-[0.9375rem] italic leading-8 text-[#0d1b3e]"
                    style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                  >
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                <div className="mt-8 flex items-center gap-4 border-t border-[#bbdefb] pt-6">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white uppercase"
                    style={{ background: "linear-gradient(135deg, #42a5f5, #1565c0)" }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0d1b3e] text-sm">{t.name}</p>
                    <p className="text-xs text-[#7899c7]">{t.role}</p>
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
