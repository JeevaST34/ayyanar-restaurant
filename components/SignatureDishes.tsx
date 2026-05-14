import { MotionArticle, MotionContainer, MotionImage, MotionSection } from "./Animated";

const dishes = [
  {
    name: "Chicken Biryani",
    price: "$ 7",
    description: "Dum-cooked seeraga samba rice, tender chicken, mint, and slow-bloomed masala.",
    image: "/images/ChatGPT Image May 13, 2026, 06_57_32 PM.png",
  },
  {
    name: "Chicken Fried Rice",
    price: "$ 6",
    description: "Fragrant rice stir-fried with succulent chicken, vibrant vegetables, and aromatic spices.",
    image: "/images/ChatGPT Image May 13, 2026, 07_04_58 PM.png",
  },
  {
    name: "Meals Special",
    price: "$ 5",
    description: "A proper banana-leaf style spread with sambar, rasam, kootu, poriyal, and curd.",
    image: "/images/ChatGPT Image May 13, 2026, 06_59_55 PM.png",
  },
  {
    name: "Fish Biryani",
    price: "$ 8",
    description: "Dum-cooked seeraga samba rice, marinated fish, mint, and slow-bloomed masala.",
    image: "/images/ChatGPT Image May 13, 2026, 07_08_16 PM.png",
  },
];

export default function SignatureDishes() {
  return (
    <MotionSection className="bg-[#bbdefb] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4">Signature Menu</p>
            <h2
              className="max-w-xl text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              The plates guests
              <br />
              <em className="font-normal italic text-[#e64a19]">come back for.</em>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-7 text-[#4a6fa5]">
            A curated selection of house favourites, built around aroma, texture,
            and the comforting heat South Indian food does so well.
          </p>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, i) => (
            <MotionArticle
              key={i}
              className="group overflow-hidden rounded-2xl border border-[#bbdefb] bg-white shadow-[0_4px_20px_rgba(13,27,62,0.07)] transition hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(13,71,161,0.13)]"
            >
              <div className="relative h-56 overflow-hidden">
                <MotionImage
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2459]/50 to-transparent" />
                <span className="absolute bottom-3 right-3 rounded-full bg-[#e64a19] px-3 py-1 text-xs font-bold text-white shadow-[0_4px_12px_rgba(230,74,25,0.40)]">
                  {dish.price}
                </span>
              </div>
              <div className="p-5">
                <h3
                  className="text-base font-bold text-[#0d1b3e] group-hover:text-[#1565c0] transition"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {dish.name}
                </h3>
                <p className="mt-2 text-[0.8rem] leading-6 text-[#4a6fa5]">{dish.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e64a19]" />
                  <span className="text-[0.65rem] tracking-[0.22em] text-[#7899c7] uppercase">Signature</span>
                </div>
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
