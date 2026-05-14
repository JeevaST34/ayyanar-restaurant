import { MotionArticle, MotionContainer, MotionSection } from "./Animated";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Nalla Laxman",
      rating: "5.0",
      text: "The biryani has depth, the seafood fry is crisp, and the service feels genuinely attentive.",
    },
    {
      name: "Prasant Kumar Saravanan",
      rating: "5.0",
      text: "Ayyanar Restaurant la food semma tasty ah irundhuchu, service um romba nalla irundhuchu. Family ah serndhu pogarathukku super place.",
    },
    {
      name: "Prabu Karan",
      rating: "4.9",
      text: "The set menu made hosting simple, and every guest found something memorable on the table.",
    },
  ];

  return (
    <MotionSection className="bg-[#FFE2D1] py-16 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
            Guest notes
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
            Hospitality people remember after the meal.
          </h2>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => {
            const initials = testimonial.name
              .split(" ")
              .map((part) => part[0])
              .slice(0, 2)
              .join("");

            return (
              <MotionArticle
                className="card-surface flex h-full flex-col p-8"
                key={testimonial.name}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#EA5828]">
                    {testimonial.rating}/5
                  </span>
                  <span className="h-px w-16 bg-[#EA5828]/20" />
                </div>
                <div className="flex-1">
                  <p className="text-lg leading-8 text-[#3B2A24]">
                    {testimonial.text}
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4 border-t border-[#D8B595]/60 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EA5828] text-sm font-semibold text-white uppercase">
                    {initials}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#3B2A24]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#6B7280]">Customer</p>
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
