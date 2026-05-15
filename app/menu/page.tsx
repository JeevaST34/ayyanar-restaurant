import {
  MotionArticle,
  MotionContainer,
  MotionImage,
  MotionLink,
  MotionSection,
} from "../../components/Animated";

const menuCategories = [
  {
    title: "Breakfast",
    items: [
      { name: "Idly", price: "$ 0.80" },
      { name: "Vadai", price: "$ 0.80" },
      { name: "Pongal", price: "$ 2.00" },
      { name: "Poori (2 pcs)", price: "$ 2.00" },
      { name: "Kal Dosai", price: "$ 1.50" },
      { name: "Variety Rice", price: "$ 1.50" },
    ],
  },
  {
    title: "Lunch",
    items: [
      { name: "Veg Meals", price: "$ 5.00" },
      { name: "Chicken Meals", price: "$ 7.00" },
      { name: "Mutton Meals", price: "$ 8.00" },
      { name: "Fish Meals", price: "$ 8.00" },
    ],
  },
  {
    title: "Biryani",
    items: [
      { name: "Egg Biriyani", price: "$ 5.00" },
      { name: "Chicken Biriyani", price: "$ 7.00" },
      { name: "Mutton Biriyani", price: "$ 8.00" },
      { name: "Fish Biriyani", price: "$ 8.00" },
    ],
  },
  {
    title: "Dinner",
    items: [
      { name: "Idly", price: "$ 0.80" },
      { name: "Podi Idly", price: "$ 3.00" },
      { name: "Dosai", price: "$ 1.50" },
      { name: "Masala Dosai", price: "$ 2.50" },
      { name: "Onion Dosai", price: "$ 2.50" },
      { name: "Podi Dosai", price: "$ 2.00" },
      { name: "Onion Podi Dosai", price: "$ 2.50" },
      { name: "Vendhaya Keerai Dosai", price: "$ 2.50" },
      { name: "Kal Dosai", price: "$ 1.50" },
    ],
  },
  {
    title: "Dinner Specials",
    items: [
      { name: "Egg Dosai", price: "$ 2.50" },
      { name: "Rava Dosai", price: "$ 2.50" },
      { name: "Rava Onion Dosai", price: "$ 3.00" },
      { name: "Uthappam", price: "$ 2.00" },
      { name: "Onion Uthappam", price: "$ 2.50" },
      { name: "Onion Podi Uthappam", price: "$ 3.00" },
      { name: "Ghee Roast", price: "$ 4.00" },
      { name: "Parotta (2 pcs)", price: "$ 3.00" },
      { name: "Kothu Parotta", price: "$ 6.00" },
      { name: "Chapathi (2 pcs)", price: "$ 2.50" },
      { name: "Veg Fried Rice", price: "$ 5.00" },
      { name: "Egg Fried Rice", price: "$ 6.00" },
      { name: "Chicken Fried Rice", price: "$ 6.00" },
    ],
  },
  {
    title: "Egg Special",
    items: [
      { name: "Omelette", price: "$ 2.00" },
      { name: "Half Boil", price: "$ 1.00" },
      { name: "Egg Podi Mass", price: "$ 2.50" },
      { name: "Egg Kalaki", price: "$ 2.00" },
    ],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Tea", price: "$ 1.00" },
      { name: "Masala Tea", price: "$ 1.00" },
      { name: "Coffee", price: "$ 1.50" },
      { name: "Horlicks Hot", price: "$ 1.50" },
      { name: "Milo Hot", price: "$ 1.50" },
      { name: "Boost", price: "$ 1.50" },
    ],
  },
];

const imageCards = [
  {
    label: "Tea",
    src: "/images/beverages/Tea.png",
  },
  {
    label: "Coffee",
    src: "/images/beverages/Coeffe.png",
  },
  {
    label: "Horlicks",
    src: "/images/beverages/horlicks.png",
  },
  {
    label: "Milo",
    src: "/images/beverages/milo.png",
  },
  {
    label: "Masala Tea",
    src: "/images/beverages/masala-tea.png",
  },
  {
    label: "Boost",
    src: "/images/beverages/boost.png",
  },
  {
    label: "Idiyappam",
    src: "https://images.pexels.com/photos/22840373/pexels-photo-22840373.jpeg",
  },
  {
    label: "Rava Dosai",
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Rava Dosai",
    src: "/images/rava-dosa.png",
  },
  // {
  //   label: "Suzhiyam",
  //   src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
  // },
  {
    label: "Vadai",
    src: "/images/ChatGPT Image May 13, 2026, 06_52_44 PM.png",
  },
  // {
  //   label: "Bonda",
  //   src: "https://images.unsplash.com/photo-1564758866814-11699448dfbb?auto=format&fit=crop&w=1200&q=80",
  // },
  {
    label: "Samosa",
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Puffs",
    src: "/images/test 4/puffs.png",
  },
  {
    label: "Bun Butter",
    src: "/images/test 4/bun butter.png",
  },
  // {
  //   label: "Sundal",
  //   src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  // },
  {
    label: "Pepper Chicken",
    src: "/images/dishes/pepperchicken.jfif",
  },
  {
    label: "Mutton Gravy",
    src: "/images/dishes/mutton-gravy.png",
  },
  {
    label: "Crab Masala",
    src: "/images/dishes/crab-masala.jfif",
  },
  {
    label: "Fish Curry",
    src: "/images/dishes/fish-fry.jfif",
  },
  {
    label: "Mutton Nalli",
    src: "/images/dishes/mutton-nalli.png",
  },
  {
    label: "Egg Masala",
    src: "/images/dishes/Egg-masala.png",
  },
  {
    label: "Chicken Uppu Kari",
    src: "/images/dishes/Chicken-uppu-kari.jfif",
  },
  {
    label: "Chettinad Chicken",
    src: "/images/dishes/chettinad-masala.jfif",
  },
  {
    label: "Mutton Bone Soup",
    src: "/images/dishes/Mutton-bone-Soup.png",
  },
  {
    label: "Prawn Masala",
    src: "/images/dishes/prawn-masala.jfif",
  },
  {
    label: "Set Meals",
    src: "/images/dinner/dinner/Meals.png",
  },
  {
    label: "Idli",
    src: "/images/dinner/dinner/Idly.png",
  },
  {
    label: "Dosai",
    src: "/images/dinner/dinner/Dosa.png",
  },
  {
    label: "Ven Pongal",
    src: "/images/ChatGPT Image May 13, 2026, 06_52_47 PM.png",
  },
  {
    label: "Poori",
    src: "/images/dinner/dinner/Poori.png",
  },
  {
    label: "Chapathi",
    src: "/images/dinner/dinner/Chappathi.png",
  },
  {
    label: "Masala Dosai",
    src: "/images/dinner/dinner/masala-dosai.png",
  },
  {
    label: "Chicken Kothu Prata",
    src: "/images/dinner/dinner/Chicken-kothu-parotta.png",
  },
  {
    label: "Uthappam",
    src: "/images/dinner/dinner/uthappam.png",
  },
  {
    label: "Chicken Fried Noodles",
    src: "/images/dinner/dinner/Chicken-fried-noodles.png",
  },
  {
    label: "Parotta",
    src: "/images/dinner/dinner/parotta.png",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#075985]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <MotionSection className="mb-12 flex flex-col gap-6 rounded-[32px] border border-[#bae6fd] bg-white/90 p-8 shadow-[0_20px_60px_rgba(2,132,199,0.08)] sm:p-12">
          <div className="space-y-4">
            <p className="text-xs font-black tracking-[0.28em] text-[#f97316] uppercase">
              Full Menu
            </p>
            <h1 className="text-4xl font-black md:text-5xl text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>
              Ayyanar Restaurant Menu
            </h1>
            <p className="max-w-3xl text-[0.95rem] font-medium leading-7 text-[#0369a1]">
              Discover the complete Ayyanar dining experience with breakfast
              staples, dosa varieties, set meals, curries and hot drinks. The
              gallery below reflects the menu items and dishes featured across
              our restaurant.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MotionLink
              href="/"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#f97316] bg-white px-6 py-3 text-[0.8rem] font-black tracking-[0.18em] text-[#075985] uppercase transition hover:bg-[#f97316] hover:text-white"
            >
              Back to homepage
            </MotionLink>
            <div className="rounded-full bg-[#e0f2fe] border border-[#bae6fd] px-4 py-3 text-center text-[12px] font-bold text-[#0369a1]">
              Crafted for authentic South Indian flavour.
            </div>
          </div>
        </MotionSection>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_0.75fr]">
          <MotionContainer className="space-y-6">
            {menuCategories.map((category) => (
              <MotionArticle
                key={category.title}
                className="card-surface p-6 md:p-8"
              >
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#bae6fd] pb-5">
                  <h2 className="text-[1.75rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>{category.title}</h2>
                  <span className="h-1 w-16 rounded-full bg-[#f97316]" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-[20px] border border-[#bae6fd] bg-[#f0f9ff] p-5 shadow-sm transition hover:border-[#7dd3fc] hover:bg-white"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-[1.05rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>
                            {item.name}
                          </h3>
                        </div>
                        <span className="inline-flex min-w-[4.25rem] items-center justify-center whitespace-nowrap rounded-full bg-white border border-[#bae6fd] px-3 py-1 text-sm font-black text-[#f97316] shadow-sm">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionArticle>
            ))}
          </MotionContainer>

          <aside className="space-y-6">
            <section className="card-surface overflow-hidden rounded-[32px] border border-[#bae6fd] bg-white">
              <div className="bg-gradient-to-r from-[#38bdf8] to-[#0284c7] px-6 py-5 text-white">
                <h2 className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>Hot Drinks</h2>
                <p className="mt-2 text-[0.85rem] font-bold text-white/90">
                  Comforting beverages to pair with every plate.
                </p>
              </div>
              <div className="grid gap-1 p-3 sm:grid-cols-2">
                {imageCards.slice(0, 6).map((image) => (
                  <figure
                    key={image.label}
                    className="overflow-hidden rounded-[20px] bg-[#f0f9ff]"
                  >
                    <MotionImage
                      src={image.src}
                      alt={image.label}
                      className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                    />
                    <figcaption className="bg-white border-t border-[#bae6fd] px-3 py-2 text-[0.8rem] font-black text-[#075985] text-center">
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="card-surface p-6 md:p-8">
              <h2 className="text-[1.75rem] font-black text-[#075985]" style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}>More Favorites</h2>
              <p className="mt-3 text-[0.95rem] font-medium leading-6 text-[#0369a1]">
                From crispy dosas and street-style snacks to rich curries and
                set meal classics, our menu is designed for sharing and
                celebration.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {imageCards.slice(8).map((image) => (
                  <figure
                    key={image.label}
                    className="overflow-hidden rounded-[20px] bg-[#f0f9ff]"
                  >
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-32 w-full object-cover transition duration-300 hover:scale-105"
                    />
                    <figcaption className="bg-white border-t border-[#bae6fd] px-3 py-2 text-[0.8rem] font-black text-[#075985] text-center">
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

          </aside>
        </div>
      </div>
    </div>
  );
}