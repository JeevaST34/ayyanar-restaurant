import { MotionContainer, MotionImage, MotionSection } from "./Animated";

export default function About() {
  const highlights = [
    [
      "Stone-ground masalas",
      "Spices roasted in small batches for deeper aroma.",
    ],
    [
      "Family dining",
      "Comfortable table layouts for everyday meals and milestones.",
    ],
    [
      "Coastal specials",
      "Seafood, curries, and fry plates with Tamil Nadu character.",
    ],
    [
      "Catering ready",
      "Custom menus for office lunches, weddings, and home events.",
    ],
  ];

  return (
    <MotionSection id="about" className="bg-[#FFF7F1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative">
            <div className="relative h-[520px] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(234,88,40,0.12)]">
              <MotionImage
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Warm restaurant dining room"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0" />
            </div>
            <div className="glass-panel absolute right-6 -bottom-7 left-6 border p-6">
              <p className="text-xs tracking-[0.24em] text-[#EA5828] uppercase">
                House promise
              </p>
              <p className="mt-3 text-lg leading-7 text-[#3B2A24]">
                Traditional recipes, composed plating, attentive service, and
                the comfort of a generous South Indian table.
              </p>
            </div>
          </div>

          <div className="pt-6 lg:pt-0">
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              About the restaurant
            </p>
            <h2 className="max-w-2xl text-4xl leading-tight font-semibold md:text-5xl">
              Heritage cooking shaped for a calmer, classier dining experience.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6B7280]">
              Ayyanar Restaurant brings together Tamil Nadu comfort food and a
              more refined service style. Expect carefully layered spice, fresh
              ingredients, generous portions, and a room designed for families,
              dates, celebrations, and unhurried meals.
            </p>

            <MotionContainer className="mt-10 grid gap-6 sm:grid-cols-2">
              {highlights.map(([title, description]) => (
                <div key={title} className="card-surface p-6">
                  <h3 className="text-base font-semibold text-[#3B2A24]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                    {description}
                  </p>
                </div>
              ))}
            </MotionContainer>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
