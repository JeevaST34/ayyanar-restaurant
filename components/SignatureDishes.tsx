import {
  MotionArticle,
  MotionContainer,
  MotionImage,
  MotionSection,
} from "./Animated";

export default function SignatureDishes() {
  const dishes = [
    {
      name: "Chicken Biryani",
      price: "$ 7",
      description:
        "Dum-cooked seeraga samba rice, tender chicken, mint, and slow-bloomed masala.",
      image: "/images/ChatGPT Image May 13, 2026, 06_57_32 PM.png",
    },
    {
      name: "Chicken Fried Rice",
      price: "$ 6",
      description:
        "Fragrant rice stir-fried with succulent chicken pieces, vibrant vegetables, and a blend of aromatic spices.",
      image: "/images/ChatGPT Image May 13, 2026, 07_04_58 PM.png",
    },
    {
      name: "Meals Special",
      price: "$ 5",
      description:
        "A proper banana-leaf style spread with sambar, rasam, kootu, poriyal, and curd.",
      image: "/images/ChatGPT Image May 13, 2026, 06_59_55 PM.png",
    },
    {
      name: "Fish Biryani",
      price: "$ 8",
      description:
        "Dum-cooked seeraga samba rice, marinated fish, mint, and slow-bloomed masala.",
      image: "/images/ChatGPT Image May 13, 2026, 07_08_16 PM.png",
    },
  ];

  return (
    <MotionSection className="bg-[#FFE2D1] py-24 text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Signature menu
            </p>
            <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
              The plates guests come back for.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#6B7280]">
            A tighter edit of house favorites, built around aroma, texture, and
            the comforting heat South Indian food does so well.
          </p>
        </div>

        <MotionContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {dishes.map((dish, index) => (
            <MotionArticle
              key={index}
              className="group card-surface overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(234,88,40,0.12)]"
            >
              <div className="relative h-64 overflow-hidden">
                <MotionImage
                  src={dish.image}
                  alt={dish.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3B2A24]/35 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-[#EA5828]">
                  {dish.price}
                </p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#3B2A24]">
                  {dish.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                  {dish.description}
                </p>
              </div>
            </MotionArticle>
          ))}
        </MotionContainer>
      </div>
    </MotionSection>
  );
}
