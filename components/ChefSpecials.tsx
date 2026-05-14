"use client";

import { motion } from "framer-motion";

const specials = [
  {
    title: "Banana Leaf Thali",
    description: "A full celebration of South Indian hospitality — layered rice, curries, chutneys, and gilded spice on a fresh banana leaf.",
    price: "$ 42",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1200&q=80",
    badge: "Chef's Favourite",
  },
  {
    title: "Coastal Catch Fry",
    description: "Fresh catch marinated in stone-ground chili and curry leaf, served crisp with lemon.",
    price: "$ 48",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=80",
    badge: "Seasonal",
  },
  {
    title: "Dum Biryani Reserve",
    description: "Seeraga samba rice layered with saffron, braised spices, and house-roasted chicken for a refined aroma.",
    price: "$ 52",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1200&q=80",
    badge: "Signature",
  },
];

export default function ChefSpecials() {
  return (
    <section id="specials" className="bg-[#e3f2fd] py-[5rem]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="eyebrow mb-4">Chef Specials</p>
            <h2
              className="text-4xl font-bold leading-tight text-[#0d1b3e] md:text-5xl"
              style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
            >
              Crafted daily for
              <br />
              <em className="font-normal italic text-[#e64a19]">memorable moments.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#4a6fa5] lg:self-end">
            A curated selection that reveals the kitchen's refined spice work,
            terracotta roast, and rich natural craftsmanship.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {specials.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group overflow-hidden rounded-3xl border border-[#bbdefb] bg-white shadow-[0_6px_28px_rgba(13,27,62,0.07)] transition hover:-translate-y-1 hover:shadow-[0_20px_52px_rgba(13,71,161,0.13)]"
            >
              <div className="relative overflow-hidden" style={{ height: "280px" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2459]/55 via-transparent to-transparent" />
                {/* Badge */}
                <span className="absolute left-4 top-4 rounded-full bg-[#e3f2fd]/90 backdrop-blur-sm px-3.5 py-1.5 text-[0.65rem] font-bold tracking-[0.18em] text-[#1565c0] uppercase shadow-sm">
                  {item.badge}
                </span>
                {/* Price — orange preserved */}
                <span className="absolute bottom-4 right-4 rounded-full bg-[#e64a19] px-4 py-1.5 text-sm font-bold text-white shadow-[0_4px_14px_rgba(230,74,25,0.42)]">
                  {item.price}
                </span>
              </div>

              <div className="p-7">
                <h3
                  className="text-xl font-bold text-[#0d1b3e] group-hover:text-[#1565c0] transition"
                  style={{ fontFamily: "var(--font-heading), 'Playfair Display', serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#4a6fa5]">{item.description}</p>
                <div className="mt-6 flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e64a19]" />
                  <span className="text-[0.65rem] font-semibold tracking-[0.24em] text-[#7899c7] uppercase">
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
