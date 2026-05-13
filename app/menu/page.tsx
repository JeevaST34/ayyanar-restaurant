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
      { name: "Idly", price: "S$ 0.80" },
      { name: "Vadai", price: "S$ 0.80" },
      { name: "Pongal", price: "S$ 2.00" },
      { name: "Poori (2 pcs)", price: "S$ 2.00" },
      { name: "Kal Dosai", price: "S$ 1.50" },
      { name: "Variety Rice", price: "S$ 1.50" },
    ],
  },
  {
    title: "Lunch",
    items: [
      { name: "Veg Meals", price: "S$ 5.00" },
      { name: "Chicken Meals", price: "S$ 7.00" },
      { name: "Mutton Meals", price: "S$ 8.00" },
      { name: "Fish Meals", price: "S$ 8.00" },
    ],
  },
  {
    title: "Biryani",
    items: [
      { name: "Egg Biriyani", price: "S$ 5.00" },
      { name: "Chicken Biriyani", price: "S$ 7.00" },
      { name: "Mutton Biriyani", price: "S$ 8.00" },
      { name: "Fish Biriyani", price: "S$ 8.00" },
    ],
  },
  {
    title: "Dinner",
    items: [
      { name: "Idly", price: "S$ 0.80" },
      { name: "Podi Idly", price: "S$ 3.00" },
      { name: "Dosai", price: "S$ 1.50" },
      { name: "Masala Dosai", price: "S$ 2.50" },
      { name: "Onion Dosai", price: "S$ 2.50" },
      { name: "Podi Dosai", price: "S$ 2.00" },
      { name: "Onion Podi Dosai", price: "S$ 2.50" },
      { name: "Vendhaya Keerai Dosai", price: "S$ 2.50" },
      { name: "Kal Dosai", price: "S$ 1.50" },
    ],
  },
  {
    title: "Dinner Specials",
    items: [
      { name: "Egg Dosai", price: "S$ 2.50" },
      { name: "Rava Dosai", price: "S$ 2.50" },
      { name: "Rava Onion Dosai", price: "S$ 3.00" },
      { name: "Uthappam", price: "S$ 2.00" },
      { name: "Onion Uthappam", price: "S$ 2.50" },
      { name: "Onion Podi Uthappam", price: "S$ 3.00" },
      { name: "Ghee Roast", price: "S$ 4.00" },
      { name: "Parotta (2 pcs)", price: "S$ 3.00" },
      { name: "Kothu Parotta", price: "S$ 6.00" },
      { name: "Chapathi (2 pcs)", price: "S$ 2.50" },
      { name: "Veg Fried Rice", price: "S$ 5.00" },
      { name: "Egg Fried Rice", price: "S$ 6.00" },
      { name: "Chicken Fried Rice", price: "S$ 6.00" },
    ],
  },
  {
    title: "Egg Special",
    items: [
      { name: "Omelette", price: "S$ 2.00" },
      { name: "Half Boil", price: "S$ 1.00" },
      { name: "Egg Podi Mass", price: "S$ 2.50" },
      { name: "Egg Kalaki", price: "S$ 2.00" },
    ],
  },
  {
    title: "Hot Drinks",
    items: [
      { name: "Tea", price: "S$ 1.00" },
      { name: "Masala Tea", price: "S$ 1.00" },
      { name: "Coffee", price: "S$ 1.50" },
      { name: "Horlicks Hot", price: "S$ 1.50" },
      { name: "Milo Hot", price: "S$ 1.50" },
      { name: "Boost", price: "S$ 1.50" },
    ],
  },
];

const imageCards = [
  {
    label: "Tea",
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Coffee",
    src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Horlicks",
    src: "https://images.pexels.com/photos/926361/pexels-photo-926361.jpeg",
  },
  {
    label: "Milo",
    src: "https://images.pexels.com/photos/10389609/pexels-photo-10389609.jpeg",
  },
  {
    label: "Badam Milk",
    src: "https://images.pexels.com/photos/4187716/pexels-photo-4187716.jpeg",
  },
  {
    label: "Boost",
    src: "https://images.pexels.com/photos/34541593/pexels-photo-34541593.jpeg",
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
    label: "Ragi Dosai",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Suzhiyam",
    src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Vadai",
    src: "https://images.unsplash.com/photo-1531219432768-244f7f0c51da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Bonda",
    src: "https://images.unsplash.com/photo-1564758866814-11699448dfbb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Samosa",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Puffs",
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Bun Butter",
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Sundal",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Pepper Chicken",
    src: "https://images.unsplash.com/photo-1543353071-087092ec3938?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Mutton Gravy",
    src: "https://images.unsplash.com/photo-1476671492381-488d4cfb47b4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Crab Masala",
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Fish Curry",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Mutton Nalli",
    src: "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Egg Masala",
    src: "https://images.unsplash.com/photo-1532634896-26909d0d8b83?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Chicken Uppu Kari",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Chettinad Chicken",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Mutton Bone Soup",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Prawn Masala",
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Set Meals",
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Idli",
    src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Dosai",
    src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Ven Pongal",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Poori",
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Chapathi",
    src: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Masala Dosai",
    src: "https://images.unsplash.com/photo-1546525848-3ce03ca516f6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Chicken Kothu Prata",
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Uthappam",
    src: "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Chicken Fried Noodles",
    src: "https://images.unsplash.com/photo-1543353071-087092ec3938?auto=format&fit=crop&w=1200&q=80",
  },
  {
    label: "Parotta",
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-[#FFF7F1] text-[#3B2A24]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <MotionSection className="mb-12 flex flex-col gap-6 rounded-4xl border border-[#D8B595]/70 bg-white/90 p-8 shadow-[0_20px_60px_rgba(59,42,36,0.08)] sm:p-12">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.28em] text-[#EA5828] uppercase">
              Full Menu
            </p>
            <h1 className="text-4xl font-semibold md:text-5xl">
              Ayyanar Restaurant Menu
            </h1>
            <p className="max-w-3xl text-sm leading-7 text-[#6B7280]">
              Discover the complete Ayyanar dining experience with breakfast
              staples, dosa varieties, set meals, curries and hot drinks. The
              gallery below reflects the menu items and dishes featured across
              our restaurant.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <MotionLink
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#EA5828] bg-white px-6 py-3 text-sm font-semibold tracking-[0.18em] text-[#3B2A24] uppercase transition hover:bg-[#EA5828]/10"
            >
              Back to homepage
            </MotionLink>
            <div className="rounded-full bg-[#F5E6DA] px-4 py-3 text-center text-[12px] font-semibold text-[#3B2A24]">
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
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-[#D8B595]/70 pb-5">
                  <h2 className="text-2xl font-semibold">{category.title}</h2>
                  <span className="h-px w-16 bg-[#EA5828]/20" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-3xl border border-[#D8B595]/60 bg-[#FFF7F1] p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold text-[#3B2A24]">
                            {item.name}
                          </h3>
                        </div>
                        <span className="font-semibold text-[#EA5828]">
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
            <section className="card-surface overflow-hidden rounded-4xl border border-[#D8B595]/60 bg-white">
              <div className="bg-[#EA5828] px-6 py-5 text-white">
                <h2 className="text-xl font-semibold">Gallery Highlights</h2>
                <p className="mt-2 text-sm text-white/90">
                  A preview of the dishes and drinks that bring our menu to
                  life.
                </p>
              </div>
              <div className="grid gap-1 p-3 sm:grid-cols-2">
                {imageCards.slice(0, 8).map((image) => (
                  <figure
                    key={image.label}
                    className="overflow-hidden rounded-3xl bg-[#F5E6DA]"
                  >
                    <MotionImage
                      src={image.src}
                      alt={image.label}
                      className="h-36 w-full object-cover"
                    />
                    <figcaption className="bg-white px-3 py-2 text-sm font-semibold text-[#3B2A24]">
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            {/* <section className="card-surface p-6 md:p-8">
              <h2 className="text-2xl font-semibold">More Favorites</h2>
              <p className="mt-3 text-sm leading-6 text-[#6B7280]">
                From crispy dosas and street-style snacks to rich curries and set meal classics, our menu is designed for sharing and celebration.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {imageCards.slice(8).map((image) => (
                  <figure key={image.label} className="overflow-hidden rounded-3xl bg-[#F5E6DA]">
                    <img
                      src={image.src}
                      alt={image.label}
                      className="h-32 w-full object-cover"
                    />
                    <figcaption className="bg-white px-3 py-2 text-sm font-semibold text-[#3B2A24]">
                      {image.label}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section> */}
          </aside>
        </div>
      </div>
    </div>
  );
}
