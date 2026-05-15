import { MotionContainer, MotionImage, MotionSection } from "./Animated";

export default function About() {
  const highlights = [
    ["Stone-ground masalas", "Spices roasted in small batches for deeper aroma and character."],
    ["Family dining", "Comfortable layouts built for everyday meals and milestone celebrations."],
    ["Coastal specials", "Seafood, curries, and fry plates with authentic Tamil Nadu character."],
    ["Catering ready", "Custom menus for office lunches, weddings, and home events."],
  ];

  return (
    <MotionSection id="about" className="bg-[#f0f9ff] py-[5.5rem]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -right-5 -top-5 h-full w-full rounded-[24px] border-[3px] border-[#bae6fd] pointer-events-none" />
            <div className="absolute -left-4 -bottom-4 h-32 w-32 rounded-[20px] bg-[#7dd3fc]/30 pointer-events-none" />

            <div className="relative overflow-hidden rounded-[24px] shadow-[0_24px_50px_rgba(2,132,199,0.15)]" style={{ height: "540px" }}>
              <MotionImage
                src="/entrance-image.png"
                alt="Ayyanar Restaurant dining room"
                className="h-full w-full object-cover"
              />
              {/* Overlay gradient bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0284c7]/40 via-transparent to-transparent" />
            </div>

            {/* Floating smaller images */}
            <div className="absolute -bottom-10 -right-6 flex items-end gap-4">
              <div className="h-44 w-44 overflow-hidden rounded-[24px] border-[6px] border-[#bae6fd] shadow-[0_16px_32px_rgba(2,132,199,0.2)]">
                <MotionImage
                  src="/images/shop-interior-1.png"
                  alt="Ayyanar Restaurant interior"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="h-36 w-36 overflow-hidden rounded-[24px] border-[6px] border-[#bae6fd] shadow-[0_16px_32px_rgba(2,132,199,0.2)]">
                <MotionImage
                  src="/images/shop-interior-2.png"
                  alt="Ayyanar Restaurant seating"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="eyebrow mb-5">About the Restaurant</p>
            <h2
              className="text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl xl:text-[3.5rem]"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Heritage cooking shaped
              <br />
              <em className="font-bold italic text-[#f97316]">for a finer table.</em>
            </h2>

            <p className="mt-6 text-[0.95rem] font-medium leading-8 text-[#0369a1]">
              Ayyanar Restaurant brings together Tamil Nadu comfort food and a
              refined service style. Expect carefully layered spice, fresh
              ingredients, generous portions, and a room designed for families,
              dates, celebrations, and unhurried meals.
            </p>

            {/* Orange rule */}
            <div className="my-8 h-1 w-16 rounded-full bg-[#f97316]" />

            <MotionContainer className="grid gap-4 sm:grid-cols-2">
              {highlights.map(([title, desc]) => (
                <div
                  key={title}
                  className="group rounded-[20px] border border-[#bae6fd] bg-white p-5 transition duration-300 hover:border-[#7dd3fc] hover:shadow-[0_8px_24px_rgba(2,132,199,0.12)]"
                >
                  <div className="mb-3 h-1 w-8 rounded-full bg-[#f97316] transition-all duration-300 group-hover:w-12" />
                  <h3 className="mb-1.5 text-[0.9rem] font-black text-[#075985]">{title}</h3>
                  <p className="text-[0.8rem] font-medium leading-6 text-[#0369a1]">{desc}</p>
                </div>
              ))}
            </MotionContainer>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
