import { MotionArticle, MotionContainer, MotionImage, MotionSection } from "./Animated";

const dishes = [
  {
    name: "Chicken Biryani", price: "$ 7.00",
    description: "Dum-cooked seeraga samba rice, tender chicken, mint, and slow-bloomed masala.",
    image: "/images/chicken-biryani.png",
  },
  {
    name: "Chicken Fried Rice", price: "$ 6.00",
    description: "Fragrant rice stir-fried with succulent chicken, vibrant vegetables, and aromatic spices.",
    image: "/images/chicken-fried-rice.png",
  },
  {
    name: "Meals Special", price: "$ 5.00",
    description: "A proper banana-leaf style spread with sambar, rasam, kootu, poriyal, and curd.",
    image: "/images/veg-meals.png",
  },
  {
    name: "Fish Biryani", price: "$ 8.00",
    description: "Dum-cooked seeraga samba rice, marinated fish, mint, and slow-bloomed masala.",
    image: "/images/fish-biryani.png",
  },
];

export default function SignatureDishes() {
  return (
    <MotionSection
      className="relative overflow-hidden py-[5.5rem] bg-white"
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#bae6fd]/50 blur-[80px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">
              Signature Menu
            </p>
            <h2
              className="max-w-lg text-4xl font-black leading-[1.1] text-[#075985] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              The plates guests
              <br />
              <em className="font-bold italic text-[#f97316]">come back for.</em>
            </h2>
          </div>
          <p className="max-w-xs text-[0.9rem] font-medium leading-7 text-[#0369a1]">
            A curated selection of house favourites, built around aroma, texture,
            and the comforting heat South Indian food does so well.
          </p>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <MotionArticle
              key={i}
              className="group overflow-hidden rounded-[24px] border border-[#bae6fd] bg-[#f0f9ff] shadow-[0_12px_24px_rgba(2,132,199,0.06)] transition duration-300 hover:bg-white hover:border-[#7dd3fc] hover:shadow-[0_16px_40px_rgba(2,132,199,0.15)] hover:-translate-y-2"
            >
              <div className="relative overflow-hidden" style={{ height: "220px" }}>
                <MotionImage
                  src={dish.image} alt={dish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-4 right-4 rounded-full bg-[#f97316] px-4 py-1.5 text-[0.8rem] font-black text-white shadow-[0_4px_16px_rgba(249,115,22,0.4)]">
                  {dish.price}
                </span>
              </div>
              <div className="p-6">
                <h3
                  className="text-[1.1rem] font-black text-[#075985] group-hover:text-[#0284c7] transition"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {dish.name}
                </h3>
                <p className="mt-2 text-[0.8rem] font-medium leading-6 text-[#0369a1]">{dish.description}</p>
                <div className="mt-5 h-1 w-8 rounded-full bg-[#f97316] transition-all duration-400 group-hover:w-16" />
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
