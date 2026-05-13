"use client";

import { motion } from "framer-motion";

const specials = [
  {
    title: "Banana Leaf Thali",
    description:
      "A modern celebration of South Indian hospitality with layered rice, curries, chutneys, and gilded spice.",
    price: "S$ 42",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Coastal Catch Fry",
    description:
      "Fresh catch marinated in stone-ground chili and curry leaf, served crisp with lemon and shell-fried drama.",
    price: "S$ 48",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Dum Biryani Reserve",
    description:
      "Seeraga samba rice layered with saffron, braised spices, and house-roasted chicken for a refined aroma.",
    price: "S$ 52",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ChefSpecials() {
  return (
    <section className="bg-[#FFFCF8] py-24 text-[#2D1F1A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[#EA5828] mb-4 text-xs font-semibold tracking-[0.28em] uppercase">
              Chef specials
            </p>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              Crafted daily for warm, memorable moments.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[#6B5B52]">
            A curated selection of dishes that reveal the kitchen’s refined spice work, terracotta roast, and rich natural lighting.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {specials.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group card-surface overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#2D1F1A]/50 via-transparent to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-[#FFFCF8]/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#2D1F1A] shadow-[0_10px_30px_rgba(234,88,40,0.14)]">
                  {item.price}
                </span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2D1F1A]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#6B5B52]">
                  {item.description}
                </p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="inline-flex h-3 w-3 rounded-full bg-[#EA5828]" />
                  <span className="text-xs uppercase tracking-[0.26em] text-[#C96A3D]">
                    Seasonal kitchen story
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
