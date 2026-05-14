import { MotionContainer, MotionImage, MotionSection } from "./Animated";

export default function About() {
  const highlights = [
    ["Stone-ground masalas", "Spices roasted in small batches for deeper aroma and character."],
    ["Family dining", "Comfortable layouts built for everyday meals and milestone celebrations."],
    ["Coastal specials", "Seafood, curries, and fry plates with authentic Tamil Nadu character."],
    ["Catering ready", "Custom menus for office lunches, weddings, and home events."],
  ];

  return (
    <MotionSection id="about" className="bg-[#e3f2fd] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">

          {/* Image column */}
          <div className="relative">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[20px] border border-[#1e88e5]/25" />
            <div className="relative overflow-hidden rounded-[20px] shadow-[0_24px_64px_rgba(13,27,62,0.14)]" style={{ height: "520px" }}>
              <MotionImage
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80"
                alt="Ayyanar Restaurant dining room"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-[#e3f2fd]/92 backdrop-blur-sm border border-[#bbdefb] px-6 py-5 shadow-[0_8px_24px_rgba(13,71,161,0.12)]">
                <p className="eyebrow mb-2">House Promise</p>
                <p className="text-sm leading-7 text-[#0d1b3e]">
                  Traditional recipes, composed plating, attentive service — and
                  the comfort of a generous South Indian table.
                </p>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="eyebrow mb-4">About the Restaurant</p>
            <h2
              className="text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Heritage cooking shaped
              <br />
              <em className="font-normal italic text-[#e64a19]">for a finer table.</em>
            </h2>

            <p className="mt-6 text-base leading-8 text-[#4a6fa5]">
              Ayyanar Restaurant brings together Tamil Nadu comfort food and a
              refined service style. Expect carefully layered spice, fresh
              ingredients, generous portions, and a room designed for families,
              dates, celebrations, and unhurried meals.
            </p>

            <MotionContainer className="mt-10 grid gap-4 sm:grid-cols-2">
              {highlights.map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#bbdefb] bg-[#e3f2fd] p-5 shadow-[0_2px_12px_rgba(13,27,62,0.05)] hover:border-[#1e88e5]/40 hover:shadow-[0_6px_20px_rgba(21,101,192,0.10)] transition"
                >
                  <div className="mb-3 h-0.5 w-8 rounded-full bg-[#e64a19]" />
                  <h3 className="mb-1.5 text-[0.875rem] font-semibold text-[#0d1b3e]">{title}</h3>
                  <p className="text-[0.8125rem] leading-6 text-[#4a6fa5]">{desc}</p>
                </div>
              ))}
            </MotionContainer>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
